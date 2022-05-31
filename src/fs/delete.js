import fs from 'fs';

export const remove = async () => {
  const path = 'files/fileToRemove.txt';
  const errorText = 'FS operation failed';

  fs.access(path, (errNoException) => {
    if (!errNoException) {
      fs.unlink(path, err => {
        if (err) throw err;
        console.log('File has been deleted');
      });
    } else {
      throw new Error(errorText);
    }
  });
};

remove();
