import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorText } from '../utils/constants.js';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/fileToRead.txt`;

  try {
    await fs.access(path);
    throw new Error(errorText);
  } catch (error) {
    if (error.message === errorText) {
      const promise = await fs.readFile(path, { encoding: 'utf8' });
      console.log(promise);
    } else {
      throw new Error(errorText);
    }
  }
};

read();
