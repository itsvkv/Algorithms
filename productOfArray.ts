function productOfArray(arr = []) {
  if (!arr.length) return 1;
  let product = 1;
  product = product * arr[0];
  return product * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));
