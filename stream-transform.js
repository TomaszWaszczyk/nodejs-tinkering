const fs = require('fs');
const { Transform } = require('stream');
const csv = require('csv-parser');


const main = async () => {
  const readStream = fs.createReadStream('./data/import.csv');
  const writeStream = fs.createWriteStream('./data/export.csv');

  const myTransform = new Transform({
    objectMode: true,
    transform(chunk, enc, callback) {
      const user = {
        name: chunk.name,
        email: chunk.email.toLowerCase(),
        age: Number(chunk.age),
        salary: Number(chunk.salary),
        isActive: chunk.isActive === 'true'
      };
      callback(null, user);
    }
  });

  const myFilter = new Transform({
    objectMode: true,
    transform(user, enc, callback) {
      if (user.age > 18 && user.salary > 3000) {
        callback(null, user);
      } else {
        callback();
      }
    }
  });

  readStream
    .pipe(csv({ delimiter: ';' }, { objectMode: true }))
    .pipe(myTransform)
    .pipe(myFilter)
    .pipe(writeStream);
};

main();
