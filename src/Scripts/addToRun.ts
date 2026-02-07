import fs from "fs";
import path from "path";

console.log("=== DEBUG INFO ===");
console.log("All arguments:", process.argv);
console.log("==================");

const currentFilePath: string = process.argv[2]!;

if (!currentFilePath) {
  console.error("✗ No file path provided!");
  console.error("Arguments received:", process.argv);
  process.exit(1);
}

console.log(`📂 Current file: ${currentFilePath}`);

// Always target run.ts in the src directory
const currentDir: string = path.dirname(currentFilePath);
const srcDir: string = currentDir.includes("src")
  ? currentDir.substring(0, currentDir.indexOf("src") + 3)
  : currentDir;
const runFilePath: string = path.join(srcDir, "run.ts");

// Check if run.ts exists
if (!fs.existsSync(runFilePath)) {
  console.error(`✗ Could not find run.ts at ${runFilePath}`);
  process.exit(1);
}

if (!fs.existsSync(currentFilePath)) {
  console.error(`✗ Current file does not exist: ${currentFilePath}`);
  process.exit(1);
}

const fileContent = fs.readFileSync(currentFilePath, "utf8");

// Extract class name from current file
const classMatch = fileContent.match(/export\s+class\s+(\w+)/);

if (!classMatch) {
  console.error(
    `✗ Could not find exported class in ${currentFilePath}`,
  );
  console.error(
    "Make sure your file has: export class YourClassName",
  );
  console.error(
    `\nFile content preview:\n${fileContent.substring(0, 300)}...`,
  );
  process.exit(1);
}

const className = classMatch[1];
console.log(
  `📝 Auto-detected class: ${className} from ${path.basename(currentFilePath)}`,
);

// Convert ClassName to fileName (e.g., MoveZeroToEnd -> moveZeroToEnd)
const fileNameToSearch: string =
  className.charAt(0).toLowerCase() + className.slice(1);

// Search for the file in subdirectories of src
let importPath: string = "";
const subdirs: string[] = fs
  .readdirSync(srcDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

for (const subdir of subdirs) {
  const possibleFile: string = path.join(
    srcDir,
    subdir,
    `${fileNameToSearch}.ts`,
  );
  if (fs.existsSync(possibleFile)) {
    importPath = `./${subdir}/${fileNameToSearch}`;
    break;
  }
}

// Generate the complete file content for run.ts
const fileContentToWrite = `import { ${className} } from "${importPath}";
import type { IAlgorithm } from "./IAlgorithm";

let algorithmsToRun: (new () => IAlgorithm)[] = [${className}];

for (let algorithm of algorithmsToRun) {
  let algoObj = new algorithm();
  console.log(\`\\n=== Running: \${algoObj.constructor.name} ===\`);
  algoObj.execute();
}
`;

// Write to run.ts (not the current file)
fs.writeFileSync(runFilePath, fileContentToWrite, "utf8");

if (importPath) {
  console.log(`✓ Updated ${runFilePath}`);
  console.log(`✓ Set to run: ${className}`);
} else {
  console.log(
    `⚠ Could not find ${fileNameToSearch}.ts - you'll need to add the import manually`,
  );
}
