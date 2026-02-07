function isSubsequence(first: string, second: string) {
  let firstpointer = 0, secondPointer = 0;
  while (secondPointer < second.length) {
    if (second[secondPointer] == first[firstpointer]) {
      firstpointer++;
    }
    if (firstpointer >= first.length) {
      return true;
    }
    secondPointer++;
  }

  return false;
}

console.log(isSubsequence("abc", "acbc"));
