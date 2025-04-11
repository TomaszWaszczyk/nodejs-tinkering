// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

const http = require('http');
const fs = require('fs');


const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
console.log(config);



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
