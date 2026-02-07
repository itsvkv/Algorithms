function sameFrequency(first: number, second: number) {
  let counter = {};

  for (let digit of first.toString()) {
    counter[digit] = (counter[digit] || 0) + 1;
  }
  for (let digit of second.toString()) {
    if (counter[digit]) {
      counter[digit]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(123, 123));
