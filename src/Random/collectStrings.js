function collectStrings(obj = {}) {
  let result = [];
  for (let value of Object.values(obj)) {
    if (typeof value == "string") {
      result.push(value);
    }
    if (typeof value == "object") {
      result = result.concat(collectStrings(value));
    }
  }
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])c
