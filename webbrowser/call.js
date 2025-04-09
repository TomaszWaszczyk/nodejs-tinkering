function test() {
    return this;
}

var greet = {
    name: 'Tomek',
};

console.log(test.call(greet)); // { name: 'Tomek' }
