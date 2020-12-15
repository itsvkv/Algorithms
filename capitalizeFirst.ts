function capitalizeFirst(arr: Array<string> = []) {
  const result = [];
  if (!arr.length) {
    return [];
  }
  const capiltalized = arr[0][0].toUpperCase() + arr[0].slice(1);
  return result.concat(capiltalized, capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
