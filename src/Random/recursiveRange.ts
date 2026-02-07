function recursiveRange(num: number) {
  if (num < 1) return 0;

  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(10));
