function maxSubarraySum(arr = [], count: number) {
  if (arr.length < count) return null;
  let max = arr
    .slice(0, count)
    .reduce((previous, current) => previous + current, 0);
  let temp = max;
  for (let i = count; i < arr.length; i++) {
    temp = temp + arr[i] - arr[i - count];
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([-3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
