import { createWriteStream } from 'fs';
import { stdin } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/fileToWrite.txt`;

  const output = createWriteStream(path);

  stdin.on('data', (data) => {
    output.write(data);
  });
  output.on('error', (error) => {
    throw new Error(error);
  });
};

write();
