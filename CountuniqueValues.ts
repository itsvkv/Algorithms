function countUniqueValues(arr = []) {
  let ref = 0, moving = 1;

  while (moving < arr.length) {
    if (arr[ref] !== arr[moving]) {
      arr[++ref] = arr[moving];
    }
    moving++;
  }
  return ref + 1;
}
console.log(countUniqueValues([-1, 1, 2, 3, 4, 4, 4, 4]));
