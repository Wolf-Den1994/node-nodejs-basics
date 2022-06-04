import os from 'node:os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/worker.js`;

  let workerData = 10;

  const result = await Promise.all(
    os.cpus().map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(path, {
          workerData,
        });
        workerData++;

        worker.on('message', (data) => {
          resolve({ status: 'resolved', data });
        });

        worker.on('error', (data) => {
          resolve({ status: 'error', data: null });
        });

        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        });
      });
    })
  );

  console.log(result);
};

performCalculations();
