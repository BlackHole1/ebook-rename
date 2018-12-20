const { supportedFormats, supportedMode, prefix, outputDir } = require('../lib/constant');

class En {
  get directory() {
    return 'The directory where the e-book is located (default: current directory)';
  }

  get format() {
    return `The e-book format to be renamed, supported formats: ${Object.keys(supportedFormats).join(', ')} (default: Support all)`;
  }

  get output() {
    return `Output directory (default: ${outputDir})`;
  }

  get mode() {
    return `Output mode, supported mode: ${Object.keys(supportedMode).join(', ')} (default: jump)`;
  }

  pathDoesNotExist(path) {
    return `${prefix} ${path} path does not exist`;
  }

  readPathFail(path) {
    return `${prefix}Failed to read the ${path} path, please check if the permissions are not enough`;
  }

  formatDoesNotExist(format) {
    return `${prefix}${format} is not in the supported format`;
  }

  createDirectoryFail(path) {
    return `${prefix}Failed to create ${path} directory, please check if the permissions are not enough`;
  }

  modeDoesNotExist(mode) {
    return `${prefix}${mode} is not in the supported list`;
  }
}

module.exports = new En();
