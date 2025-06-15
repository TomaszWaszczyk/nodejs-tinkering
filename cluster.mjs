import cluster from "node:cluster";
import http from "node:http";
import os from "node:os";

if (cluster.isPrimary) {
  // Master process: fork workers equal to CPU cores
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} started. Forking ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Restart workers if they crash
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Worker process: create an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello from worker " + process.pid);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started`);
}
