const getCalibreTools = require('get-calibre-tools');
const { find } = require('sagase');
const i18n = require('./i18n');
const { directory, output, format, mode } = require('./lib/commander');

find({
  folder: directory,
  pattern: /^.+\.(js)$/,
  nameOnly: false,
  exclude: /(node_modules\/)/,
  excludeNameOnly: false,
  recursive: true
})
  .then(files => {
    console.log(files)
  });
