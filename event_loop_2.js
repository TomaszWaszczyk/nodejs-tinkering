console.log(1);

setImmediate(() => {
  console.log(2);
});

setTimeout(() => {
  console.log(3);
}, 0);

const promise = new Promise((resolve) => {
  console.log(4);
  resolve();
});

promise.then(() => {
  console.log(5);

  process.nextTick(() => console.log(6));

  const promise2 = new Promise((resolve) => {
    resolve();
  });

  promise2.then(() => console.log(7));
});

promise.then(() => console.log(8));

process.nextTick(() => console.log(9));

console.log(10);
