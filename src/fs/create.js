import fs from 'fs';

export const create = async () => {
  const path = 'files/fresh.txt';
  const data = 'I am fresh and young';
  const errorText = 'FS operation failed';

  fs.access(path, (errNoException) => {
    if (errNoException) {
      fs.open(path, 'w', (err) => {
        if (err) throw err;
      });
      fs.appendFile(path, data, (err) => {
        if (err) throw err;
        console.log('File has been created');
      });
    } else {
      throw new Error(errorText);
    }
  });
};
