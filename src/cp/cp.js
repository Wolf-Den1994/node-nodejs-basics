import { spawn } from 'child_process';
import { argv, stdin } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const args = argv.slice(2);

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/script.js`;

  const child = spawn(`node`, [path, ...args], {
    stdio: [stdin, 'pipe'],
  });

  child.stdout.on('data', (data) => {
    console.log(`Received from child process:\n${data}`);
  });

  child.on('spawn', () => {
    console.log('\nSpawn child process!\n');
  });
};

spawnChildProcess(args);
