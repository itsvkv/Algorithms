function getDigit(number, place) {
  return Math.floor(Math.abs(number) / Math.pow(10, place) % 10);
}
function digitCount(number) {
  if (number == 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}
function mostDigits(numbers = []) {
  let maxCount = 0;
  for (let num of numbers) {
    let curretnCount = digitCount(num);
    if (curretnCount > maxCount) {
      maxCount = curretnCount;
    }
  }
  return maxCount;
}

function radixSort(numbers = []) {
  const IterationCount = mostDigits(numbers);

  for (let i = 0; i < IterationCount; i++) {
    const helperArray = new Array(10).map((x) => []);
    for (let num of numbers) {
      const indexToInsert = getDigit(num, i);
      helperArray[indexToInsert].push(num);
    }
    numbers = helperArray.flat(Infinity);
  }
  return numbers;
}
console.log(getDigit(10232, 1));
