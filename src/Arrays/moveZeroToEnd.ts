// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

import type { IAlgorithm } from "../IAlgorithm";

//
console.log("Running moveZeroToEnd");
export class MoveZeroToEnd implements IAlgorithm {
  swapTill(input: number[], startIndex: number, endIndex: number) {
    while (startIndex < endIndex) {
      [input[startIndex], input[startIndex + 1]] = [
        input[startIndex + 1],
        input[startIndex],
      ];
      startIndex++;
    }
    return input;
  }

  move(input: number[] = []) {
    let swapTillIndex = input.length - 1;
    let index = 0;
    while (index < swapTillIndex) {
      if (input[index] == 0) {
        this.swapTill(input, index, swapTillIndex--);
      }
      index++;
    }
    return input;
  }

  execute() {
    console.log(new MoveZeroToEnd().move([1, 2, 0, 3, 0, 4, 5, 6]));
  }
}
