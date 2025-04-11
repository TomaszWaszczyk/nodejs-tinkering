const { Worker } = require('worker_threads');

function runHashWorker(input) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./hashWorker.js');
    worker.postMessage(input);

    worker.once('message', (result) => {
      resolve(result);
    });

    worker.once('error', reject);
    worker.once('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

// Example usage:
(async () => {
  const input = "Hello, from Node.js with SHA-256!";
  try {
    const result = await runHashWorker(input);
    console.log("Input:", result.input);
    console.log("SHA-256 Hash:", result.hash);
  } catch (err) {
    console.error("Error:", err);
  }
})();
