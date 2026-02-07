function maxSubArraySum(arr = [], count: number) {
  let max_sum = 0;
  //sum of first number count
  for (let item of arr.slice(0, count)) {
    console.log(max_sum, item);
    max_sum += item;
  }
  let temp_sum;
  temp_sum = max_sum;
  for (let i = count; i < arr.length; i++) {
    temp_sum = temp_sum + arr[i] - arr[i - count];
    console.log(i, count, temp_sum, max_sum);
    if (temp_sum > max_sum) {
      max_sum = temp_sum;
    }
  }
  return max_sum;
}

console.log(maxSubArraySum([1, 2, 3, 121, 5, 6], 2));
