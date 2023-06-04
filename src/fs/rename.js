import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorText } from '../utils/constants.js';

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files/wrongFilename.txt`;
  const pathRename = `${__dirname}/files/properFilename.md`;

  try {
    await fs.access(path);
    throw new Error(errorText);
  } catch (error) {
    if (error.message === errorText) {
      try {
        await fs.access(pathRename);
        throw new Error(errorText);
      } catch (error) {
        if (error.message === errorText) throw new Error(errorText);
        try {
          await fs.rename(path, pathRename);
          console.log('File has been renamed');
        } catch (error) {
          throw error;
        }
      }
    } else {
      throw new Error(errorText);
    }
  }
};

rename();
