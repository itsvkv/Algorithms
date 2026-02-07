// Example 1:
// Input:
//  nums = [1, 2, 3, 4, 5]
// Output:
//  [2, 3, 4, 5, 1]

function lefRotate(input: number[] = []) {
  if (input.length === 0) return input;
  let element = input.shift()!;
  input.push(element);
  return input;
}

console.log(lefRotate([1, 2, 3, 4, 5]));
