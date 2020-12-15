function binarySearch(arr: number[], element: number) {
  let start = 0, end = arr.length - 1;
  let center = 0;
  let i = 0;

  while (start <= end) {
    center = Math.round((start + end) / 2);
    if (arr[center] == element) {
      return center;
    }
    if (arr[center] < element) {
      start = center + 1;
    } else {
      end = center - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
