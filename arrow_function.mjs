const object = {
    name: 'JavaScript',
    greet: function() {
        console.log(`Hello from ${this.name}`);
    },
    farewell: () => {
        console.log(`Goodbye from ${this.name}`);
    }
}
