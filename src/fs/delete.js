import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorText } from '../utils/constants.js';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/fileToRemove.txt`;

  try {
    await fs.access(path);
    throw new Error(errorText);
  } catch (error) {
    if (error.message === errorText) {
      try {
        await fs.unlink(path);
        console.log('File has been deleted');
      } catch (error) {
        throw error;
      }
    } else {
      throw new Error(errorText);
    }
  }
};

remove();
