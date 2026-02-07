function getOddNumbers(arr: Array<number>) {
  let newArr = [];
  if (!arr.length) return newArr;
  if ((arr[0] % 2) !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(getOddNumbers(arr.slice(1)));
  return newArr;
}

console.log(
  getOddNumbers([1, 2, 3, 4, 5]),
);
