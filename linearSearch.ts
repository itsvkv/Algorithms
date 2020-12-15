function linearSearch(arr: number[], element) {
  for (let [index, current] of arr.entries()) {
    if (current == element) {
      return index;
    }
  }
  return -1;
}

console.log(linearSearch([1], 2));
