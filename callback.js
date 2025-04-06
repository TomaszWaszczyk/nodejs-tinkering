function getNumber(cb) {
  setTimeout(() => {
    console.log('getNumber');
    cb(10);
  }, 100);
}

function getNumberPromise() {
  return new Promise((resolve, reject) => {
    getNumber(resolve);
  });
}

const promise = getNumberPromise();
promise.then(n => console.log(n));
