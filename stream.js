const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

// Pipe data from readable to writable
readableStream.pipe(writableStream);

console.log('Piping data from input.txt to output.txt...');
