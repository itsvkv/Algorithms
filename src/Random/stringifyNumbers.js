function stringifyNumbers(obj = {}) {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value == "number") {
      obj[key] = value.toString();
    }
    if (!Array.isArray(value) && typeof value == "object") {
      obj[key] = stringifyNumbers(value);
    }
  }
  return obj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
console.log(
  stringifyNumbers(obj),
);
