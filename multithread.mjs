import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { fileURLToPath } from 'url';

if (isMainThread) {
  // This code runs in the main thread
  const worker = new Worker(__filename, { workerData: "hello" });

  worker.on('message', (msg) => console.log(`Worker message received: ${msg}`));
  worker.on('error', (err) => console.error(err));
  worker.on('exit', (code) => console.log(`Worker exited with code ${code}.`));
}
