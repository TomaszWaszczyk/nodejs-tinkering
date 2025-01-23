const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // Main Thread
  console.log('Main Thread: Starting worker...');

  // Create a new Worker
  const worker = new Worker(__filename); // Run the same file in the worker thread

  // Listen for messages from the worker
  worker.on('message', (result) => {
    console.log('Main Thread: Received result from worker:', result);
  });

  // Handle errors from the worker
  worker.on('error', (err) => {
    console.error('Main Thread: Worker error:', err);
  });

  // Listen for the worker's exit
  worker.on('exit', (code) => {
    if (code !== 0) {
      console.error(`Main Thread: Worker stopped with exit code ${code}`);
    } else {
      console.log('Main Thread: Worker finished successfully.');
    }
  });

} else {
  // Worker Thread
  console.log('Worker Thread: Performing a CPU-intensive task...');

  // Simulate a heavy computation
  const performHeavyComputation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    return sum;
  };

  const result = performHeavyComputation();

  // Send the result back to the main thread
  parentPort.postMessage(result);
}
