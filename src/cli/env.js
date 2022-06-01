import { env } from 'node:process';

export const parseEnv = () => {
  let result = '';
  const query = 'RSS_';
  const entries = Object.entries(env);
  const data = entries.filter((entry) => entry[0].includes(query));
  data.forEach((item, index) => {
    if (data.length - 1 === index) result += `${item[0]}=${item[1]}`;
    else result += `${item[0]}=${item[1]}; `;
  });
  console.log(result);
};

parseEnv();
