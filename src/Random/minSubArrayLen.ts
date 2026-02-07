function minSubArrayLen(arr, sum) {
  let minlength = Infinity, tempSum = 0, end = 0, start = 0;
  while (start < arr.length) {
    if (tempSum < sum && end < arr.length) {
      tempSum += arr[end++];
    } else if (tempSum >= sum) {
      minlength = Math.min(minlength, end - start);
      tempSum -= arr[start++];
    } else {
      break;
    }
  }

  return (minlength == Infinity) ? 0 : minlength;
}

console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
