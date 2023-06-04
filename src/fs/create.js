import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorText } from '../utils/constants.js';

export const create = async () => {
  const data = 'I am fresh and young';
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/fresh.txt`;

  try {
    await fs.access(path);
    throw new Error(errorText);
  } catch (err) {
    if (err.message === errorText) throw new Error(errorText);
    try {
      await fs.writeFile(path, data);
      console.log('File has been created');
    } catch (err) {
      throw new Error(errorText);
    }
  }
};

create();
