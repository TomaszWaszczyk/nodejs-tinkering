// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
// http://latentflip.com/loupe
const http = require('http');
const fs = require('fs');


// const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
// console.log(config);



// http.createServer((req, res) => {
//   const data = fs.readFileSync('bigfile.txt'); // 🛑 blocks everything!
//   res.end(data);
//   console.log(data);
// }).listen(3000);



// setTimeout(() => {
//     const delay = Date.now() - timeoutScheduled;
  
//     console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// console.time('timeout');

console.log('Start Event Loop Demo');

process.nextTick(() => {
  console.log('>> process.nextTick');
});

setTimeout(() => {
  console.log('>> setTimeout 0ms');
}, 0);

setImmediate(() => {
  console.log('>> setImmediate');
});

Promise.resolve().then(() => {
  console.log('>> Promise.resolve().then');
});

console.log('End Event Loop Demo');
/* 
Start Event Loop Demo
End Event Loop Demo
>> process.nextTick
>> Promise.resolve().then
>> setTimeout 0ms
>> setImmediate
*/
