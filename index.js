const program = require('commander');
const getCalibreTools = require('get-calibre-tools');
const i18n = require('./i18n');
const { supportedFormats, supportedMode } = require('./common');
const { version } = require('./package');

program
  .option('-v, --version', i18n.version)
  .option('-d, --directory <path>', i18n.directory)
  .option('-f, --format <string>', `${i18n.formatStart}${supportedFormats.join(', ')} ${i18n.formatEnd}`)
  .option('-o, --output <path>', i18n.output)
  .option('-m, --mode <string>', `${i18n.modeStart}${supportedMode.join(', ')} ${i18n.modeEnd}`)
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
