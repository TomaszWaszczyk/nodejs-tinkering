// Parent constructor
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound.");
};

// Child constructor
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add method to Dog
Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

// Usage
var rex = new Dog("Rex", "Labrador");
rex.speak(); // Rex makes a sound.
rex.bark(); // Rex barks!
