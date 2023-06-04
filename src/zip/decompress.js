import { createUnzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/archive.gz`;
  const pathDecompress = `${__dirname}/files/fileToCompress.txt`;

  const input = createReadStream(path);
  const output = createWriteStream(pathDecompress);
  const gzip = createUnzip();

  pipeline(input, gzip, output, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
  console.log('File have been decompressed');
};

decompress();
