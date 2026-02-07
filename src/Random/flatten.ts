function flatten(arr = []) {
  const result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
