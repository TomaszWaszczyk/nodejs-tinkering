function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const generator = idMaker();
console.log(generator.next().value);
