// // 1. Passing Arguments as an Array
// const numbers = [1,2,4,5,6,7,1];
// const max = Math.max.apply(null, numbers);
// console.log('Max', max);

// 2. Function Borrowing
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " " + city + ", " + country;
    }
};

const person1 = { firstName: "John", lastName: "Doe"};
console.log(person.fullName.apply(person1, ["Warsow", "Poland"]));
