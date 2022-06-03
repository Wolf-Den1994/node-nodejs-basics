import crypto from 'crypto';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/fileToCalculateHashFor.txt`;

  try {
    const text = await fs.readFile(path, { encoding: 'utf8' });
    const result = crypto.createHash('sha256').update(text).digest('hex');
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

calculateHash();
