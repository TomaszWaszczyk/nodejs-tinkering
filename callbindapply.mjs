function sum(a, b) {
    return a + b;
}

console.log(sum.call(null, 2, 2));

console.log(sum.apply(null, [2, 2]));

const fun = sum.bind(null, 2,2);
console.log(fun(5));
































