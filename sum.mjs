const obj = {
    a: 1,
    b: 2,
    sum() {
        return this.a + this.b;
    }
};

const result = obj.sum;
console.info(`The sum is: ${result()}`);































