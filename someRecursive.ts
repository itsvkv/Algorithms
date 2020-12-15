function someRecursive(arr: Array<number>, callback: Function) {
  if (!arr.length) {
    return false;
  }
  return callback(arr[0]) || someRecursive(arr.slice(1), callback);
}
const isOdd = (val) => val % 2 !== 0;
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
