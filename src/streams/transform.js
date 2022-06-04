import { Transform, pipeline } from 'node:stream';
import { stdin, stdout } from 'node:process';

const reverseString = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().trim().split('').reverse().join('');
    callback(null, result + '\n');
  },
});

export const transform = async () => {
  pipeline(stdin, reverseString, stdout, (error) => {
    throw new Error(error);
  });
};

transform();
