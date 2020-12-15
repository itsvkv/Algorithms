function bubbleSort(arr = []) {
  for (let index = arr.length; index > 0; index--) {
    let swapped = false;
    for (let parsing = 0; parsing < index - 1; parsing++) {
      if (arr[parsing] > arr[parsing + 1]) {
        [arr[parsing], arr[parsing + 1]] = [arr[parsing + 1], arr[parsing]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 4, 7, 10]));
