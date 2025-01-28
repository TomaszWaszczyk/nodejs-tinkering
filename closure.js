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
