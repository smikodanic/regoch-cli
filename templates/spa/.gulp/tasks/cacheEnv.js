/**
 * Create env /app/src/env.json file from /env/index.js.
 */
const fse = require('fs-extra');
const path = require('path');

module.exports = async () => {
  const regochJsonPath = `${process.cwd()}/regoch.json`;
  const regochJson = require(regochJsonPath);

  const env = process.env.NODE_ENV || regochJson.cache.env || 'development';
  const envPath = path.join(process.cwd(), `/env/${env}.js`);
  const envJs = require(envPath);

  const fileDest = path.join(process.cwd(), 'app/cache/env.json');
  await fse.ensureFile(fileDest);
  await fse.writeFile(fileDest, JSON.stringify(envJs, null, 2), {encoding: 'utf8'});

  delete require.cache[regochJsonPath];
  delete require.cache[envPath];

  console.log('👌  Cashed environment to "app/cache/env.js":', envJs);
}
