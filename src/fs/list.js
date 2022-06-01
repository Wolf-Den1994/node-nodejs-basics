import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorText } from '../utils/constants.js';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files`;

  try {
    await fs.access(path);
    throw new Error(errorText);
  } catch (error) {
    if (error.message === errorText) {
      const files = await fs.readdir(path);
      files.forEach((file) => {
        console.log(file);
      });
    } else {
      throw new Error(errorText);
    }
  }
};

list();
