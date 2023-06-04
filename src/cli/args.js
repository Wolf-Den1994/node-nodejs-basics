import { argv } from 'node:process';

export const parseArgs = () => {
  let result = '';
  const resultArr = [];
  argv.forEach((val, index) => {
    if (index >= 2) {
      if (val.startsWith('--') && argv[index + 1]) {
        resultArr.push(val);
        resultArr.push(argv[index + 1]);
      }
    }
  });
  resultArr.forEach((val, index) => {
    if (val.startsWith('--') && resultArr[index + 1]) {
      if (resultArr.length - 2 === index)
        result += `${val.slice(2)} is ${resultArr[index + 1]}`;
      else result += `${val.slice(2)} is ${resultArr[index + 1]}, `;
    }
  });
  console.log(result);
};

parseArgs();
