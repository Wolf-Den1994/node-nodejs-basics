import fs from 'fs';

export const copy = async () => {
  const path = 'files';
  const pathCopy = 'files_copy';
  const errorText = 'FS operation failed';

  fs.access(path, (errNoException) => {
    if (!errNoException) {
      fs.access(pathCopy, (errNoException) => {
        if (errNoException) {
          fs.mkdir(pathCopy, (err) => {
            if (err) throw err;
            fs.readdir(path, (err, files) => {
              if (err) throw err;
              files.forEach(file => {
                fs.copyFile(`${path}/${file}`, `${pathCopy}/${file}`, err => {
                  if (err) throw err;
                });
              });
            })
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

copy();
