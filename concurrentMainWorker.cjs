const { availableParallelism } = require('node:os');
const { Worker } = require('worker_threads');
const path = require('path');

const numCPUs = availableParallelism();
console.log(`Number of available CPUs: ${numCPUs}`);

function runHashWorker(input) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.resolve(__dirname, './hashWorker.js'));

    worker.postMessage(input);

    worker.once('message', (result) => resolve(result));
    worker.once('error', reject);
    worker.once('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

async function hashMultipleStrings(strings) {
  const tasks = strings.map(runHashWorker); // Launch all workers in parallel
  const results = await Promise.all(tasks); // Wait for all to complete

  results.forEach(({ input, hash }) => {
    console.log(`🔹 Input: "${input}"\n🔐 SHA-256: ${hash}\n`);
  });
}

// Example usage
const stringsToHash = [
  "Hello World!",
  "Secure All The Things",
  "Node.js concurrency",
  "libuv and event loop",
  "Async worker threads 🚀"
];

hashMultipleStrings(stringsToHash).catch(console.error);
