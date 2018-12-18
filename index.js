const { join } = require('path');
const program = require('commander');
const getCalibreTools = require('get-calibre-tools');
const i18n = require('./i18n');
const { checkMethodResult, detectFileOrDir, detectFormat, createDirectory, detectMode } = require('./utils');
const { supportedFormats, outputDir } = require('./common');
const { version } = require('./package');

program
  .option('-v, --version', i18n.version)
  .option('-d, --directory <path>', i18n.directory, path => checkMethodResult(detectFileOrDir(path)))
  .option('-f, --format <string>', `${i18n.format}`, format => checkMethodResult(detectFormat(format)))
  .option('-o, --output <path>', i18n.output, path => checkMethodResult(createDirectory(path)))
  .option('-m, --mode <string>', `${i18n.mode}`, mode => checkMethodResult(detectMode(mode)))
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.directory = program.directory || (() => {
  checkMethodResult(detectFileOrDir(__dirname));
  return __dirname;
})();
program.output = program.output || (() => {
  const output = join(__dirname, outputDir);
  checkMethodResult(createDirectory(output));
  return output;
})();
program.format = program.format || Object.keys(supportedFormats);
program.mode = program.mode || 'jump';
