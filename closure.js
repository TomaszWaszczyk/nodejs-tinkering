function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log(`Outer variable: ${outerVariable}`);
        console.log(`Inner variable: ${innerVariable}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World");
