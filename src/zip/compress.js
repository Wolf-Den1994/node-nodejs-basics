import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/fileToCompress.txt`;
  const pathCompress = `${__dirname}/files/archive.gz`;

  const input = createReadStream(path, 'utf-8');
  const output = createWriteStream(pathCompress);
  const gzip = createGzip();

  pipeline(input, gzip, output, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
  console.log('File have been compressed');
};

compress();
