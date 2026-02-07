function averagePair(arr = [], average: number) {
  let firstPointer = 0;
  let secondPointer = arr.length - 1;

  while (firstPointer < secondPointer) {
    const avg = (arr[firstPointer] + arr[secondPointer]) / 2;
    if (avg > average) {
      secondPointer--;
    }
    if (avg < average) {
      firstPointer++;
    }
    if (avg == average) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
