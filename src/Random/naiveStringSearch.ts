function naiveStringSearch(orignal: string, substring: string) {
  let originalPointer = 0;
  let substringPointer = 0;
  let count = 0;

  while (originalPointer < (orignal.length)) {
    while (
      substringPointer < substring.length &&
      orignal[originalPointer + substringPointer] ==
        substring[substringPointer]
    ) {
      substringPointer++;
    }
    if (substringPointer == substring.length) {
      count++;
    }
    originalPointer++;
    substringPointer = 0;
  }
  return count;
}

console.log(naiveStringSearch("test", "test"));
