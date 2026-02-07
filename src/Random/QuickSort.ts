function getPivotIndex(arr, start = 0, end = arr.length - 1) {
  let pivotElement = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    let currentElement = arr[i];
    if (pivotElement > currentElement) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let index = getPivotIndex(arr, left, right);
    QuickSort(arr, left, index - 1);
    QuickSort(arr, index + 1, right);
  }
  return arr;
}

var input = [12, 3, 1, 54, 5, 6, 7, 2, 10, 12];
console.log(QuickSort(input));
