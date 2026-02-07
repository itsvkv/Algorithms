function capitalizedWords(arr: Array<string> = []) {
  if (!arr.length) {
    return [];
  }
  return [arr[0].toUpperCase(), ...capitalizedWords(arr.slice(1))];
}
let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
