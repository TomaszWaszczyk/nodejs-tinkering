let array = [1,2,3,4,5];

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1,2,3,4,5,6))
console.log(sum());
console.log('array', array) // nope
console.log(sum(...array));
