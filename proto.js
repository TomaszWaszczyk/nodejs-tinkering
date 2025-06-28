// Legacy prototype chain example
// Using __proto__ to set prototype
const animal = { eats: true };
const rabbit = { jumps: true };
rabbit.__proto__ = animal;

console.log(rabbit.eats); // true, inherited from animal
///
const animal2 = {
  eats: true
};

const rabbit = Object.create(animal2);
rabbit.jumps = true;

// Get the prototype of rabbit
const proto = Object.getPrototypeOf(rabbit);

console.log(proto === animal); // true
console.log(proto.eats);       // true

