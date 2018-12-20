const { supportedFormats, supportedMode, prefix, outputDir } = require('../lib/constant');

class Zn {
  get directory() {
    return '电子书所在的目录 (默认：当前目录)';
  }

  get format() {
    return `要重命名的电子书格式，支持格式：${Object.keys(supportedFormats).join(', ')} (默认：支持全部)`;
  }

  get output() {
    return `输出目录 (默认：${outputDir})`;
  }

  get mode() {
    return `输出模式，支持模式：${Object.keys(supportedMode).join(', ')} (默认: jump)`;
  }

  pathDoesNotExist (path) {
    return `${prefix}${path} 路径不存在`;
  }

  readPathFail(path) {
    return `${prefix}读取 ${path} 路径失败，请检查是否为权限不够`;
  }

  formatDoesNotExist(format) {
    return `${prefix}${format} 不在支持的格式里`;
  }

  createDirectoryFail(path) {
    return `${prefix}创建 ${path} 目录失败，请检查是否为权限不够`;
  }

  modeDoesNotExist(mode) {
    return `${prefix}${mode} 不在支持的列表里`;
  }
}

module.exports = new Zn();
