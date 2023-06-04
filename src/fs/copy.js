import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { errorText } from '../utils/constants.js';

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = `${__dirname}/files`;
  const pathCopy = `${__dirname}/files_copy`;

  try {
    await fs.access(path);
    throw new Error(errorText);
  } catch (error) {
    if (error.message === errorText) {
      try {
        await fs.access(pathCopy);
        throw new Error(errorText);
      } catch (error) {
        if (error.message === errorText) throw new Error(errorText);
        try {
          const files = await fs.readdir(path);
          fs.mkdir(pathCopy);
          await Promise.all(
            files.map((file) =>
              fs.copyFile(`${path}/${file}`, `${pathCopy}/${file}`)
            )
          );
          console.log('Files have been copied');
        } catch (error) {
          throw error;
        }
      }
    } else {
      throw new Error(errorText);
    }
  }
};

copy();
