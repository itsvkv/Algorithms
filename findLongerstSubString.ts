function findLongestSubstring(str: String) {
  const counter = {};
  let maxLength = 0;
  let start = 0;
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (char in counter && counter[char] >= start) {
      if (index - start > maxLength) {
        maxLength = index - start;
      }
      start = counter[char] + 1;
    }
    counter[char] = index;
  }
  return maxLength;
}
console.log(findLongestSubstring("longestsubstring"));
