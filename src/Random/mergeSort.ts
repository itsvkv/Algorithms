function merge(arr1 = [], arr2 = []) {
  let arr1p = 0, arr2p = 0;
  let result = [];
  while (arr1p < arr1.length && arr2p < arr2.length) {
    if (arr1[arr1p] < arr2[arr2p]) {
      result.push(arr1[arr1p]);
      arr1p++;
    } else {
      result.push(arr2[arr2p]);
      arr2p++;
    }
  }
  if (arr1p != arr1.length) {
    result.push(...arr1.slice(arr1p));
  }
  if (arr2p != arr2.length) {
    result.push(...arr2.slice(arr2p));
  }
  return result;
}
console.time("x");

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([1, 2, 56, 3, 4, 1, 7, 78, 67, 554, 54]));
