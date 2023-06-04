import { createReadStream } from 'fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/fileToRead.txt`;

  const stream = createReadStream(path, 'utf-8');
  let data = '';

  stream.on('data', (chunk) => (data += chunk));
  stream.on('end', () => {
    stdout.write(data);
  });
  stream.on('error', (error) => {
    throw new Error(error);
  });
};

read();
