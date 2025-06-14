let original = {
  a: 1,
  b: { c: 2 },
  d: function () {
    return "test";
  },
};

let copy = structuredClone(original);

console.log(copy);
