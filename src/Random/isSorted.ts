function isSorted(input = []) {
  let min = input[0];
  for (let element of input.slice(1)) {
    if (element < min) {
      return false;
    }
    min = element;
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5, 6]));
console.log(isSorted([8, 1, 3, 4, 5]));
