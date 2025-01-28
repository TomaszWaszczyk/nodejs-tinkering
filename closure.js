// function outerFunction(outerVariable){
//     return function innerFunction(innerVariable){
//         console.log(`Outer variable: ${outerVariable}`);
//         console.log(`Inner variable: ${innerVariable}`);
//     };
// }

// const closureExample = outerFunction("Hello");
// closureExample("World");

function makeAdder(x){
    return function(y){
        return x+y;
    }
}

const adderOf7 = makeAdder(7);
console.log(adderOf7(3));

// function createCounter() {
//     let count = 0; // Private variable
//     return function increment() {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3
