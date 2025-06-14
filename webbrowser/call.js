function test() {
    return this;
}

function greeting(){
    console.log(`Hello, my name is ${this.name}`)
}

let greet = {
    name: 'Tomek',
};

// console.log(test.call(greet)); // { name: 'Tomek' }
greeting.call(greet);
