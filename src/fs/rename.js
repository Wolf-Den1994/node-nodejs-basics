import fs from 'fs';

export const rename = async () => {
  const path = 'files/wrongFilename.txt';
  const pathRename = 'files/properFilename.md';
  const errorText = 'FS operation failed';

  fs.access(path, (errNoException) => {
    if (!errNoException) {
      fs.access(pathRename, (errNoException) => {
        if (errNoException) {
          fs.rename(path, pathRename, err => {
            if (err) throw err;
          });
        } else {
          throw new Error(errorText);
        }
      });
    } else {
      throw new Error(errorText);
    }
  });
};
