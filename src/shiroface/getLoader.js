const glob = require('glob');
const fs = require('fs/promises');

// options is optional
glob('**/*.{png,PNG}', function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
  const folders = files.reduce((res, file) => {
    const [folder, second] = file.split('/');
    const hasSubFolder = second.split('.').length === 1;

    // 確保
    res[folder] = res[folder] || (hasSubFolder ? [] : []);
    if (hasSubFolder) {
      res[folder][second - 1] = res[folder][second - 1] || [];
      res[folder][second - 1].push(`require('./${file}').default`);
    } else {
      res[folder].push(`require('./${file}').default`);
    }
    return res;
  }, {});

  const loaderString = Object.keys(folders).reduce((str, folder) => {
    return `${str}\n${folder}:${JSON.stringify(folders[folder]).replace(
      /"/g,
      ''
    )},`;
  }, 'module.exports = { ');
  fs.writeFile('index.js', `${loaderString}\n}`).then(process.exit);
});
