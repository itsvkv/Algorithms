// Example 1:
// Input: prices = {1, 1, 0, 1, 1, 1}
// Output: 3
// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

function getMaximumConsecutive(
  input: number[] = [],
  numberToCheck: number,
) {
  let max = 0;
  let count = 0;
  if (input.length == 0) return 0;
  for (let element of input) {
    if (element == numberToCheck) {
      count++;
      max = Math.max(count, max);
    } else {
      count = 0;
    }
  }

  return max;
}

console.log(
  getMaximumConsecutive([1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1], 1),
);
