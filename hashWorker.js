const { parentPort } = require('worker_threads');
const crypto = require('crypto');

parentPort.on('message', (input) => {
  const hash = crypto.createHash('sha256').update(input).digest('hex');
  parentPort.postMessage({ input, hash });
});
