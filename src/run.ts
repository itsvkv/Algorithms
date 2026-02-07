import { MoveZeroToEndOptimal } from "./Arrays/moveZeroToEndOptimal";
import type { IAlgorithm } from "./IAlgorithm";

let algorithmsToRun: (new () => IAlgorithm)[] = [MoveZeroToEndOptimal];

for (let algorithm of algorithmsToRun) {
  let algoObj = new algorithm();
  console.log(`\n=== Running: ${algoObj.constructor.name} ===`);
  algoObj.execute();
}
