const { existsSync } = require('fs');
const { resolve } = require('path');
const { mkdirpSync } = require('fs-extra');
const i18n = require('../i18n');
const { supportedFormats, supportedMode } = require('./constant');

const detectFileOrDir = (path) => {
  path = resolve(path);
  try {
    if (existsSync(path)) {
      return path;
    } else {
      return {
        msg: i18n.pathDoesNotExist(path)
      }
    }
  } catch (e) {
    return {
      msg: i18n.readPathFail(path)
    }
  }
};

const detectFormat = (format) => {
  if (format.indexOf(',') !== -1) {
    const formatArr = format.split(',');
    let len = formatArr.length;

    while(len--) {
      const key = formatArr[len];
      if (typeof supportedFormats[key] === 'undefined') {
        return {
          msg: i18n.formatDoesNotExist(key)
        }
      }
    }
    return formatArr;
  } else {
    if (typeof supportedFormats[format] === 'undefined') {
      return {
        msg: i18n.formatDoesNotExist(format)
      }
    }
    return [format];
  }
};

const createDirectory = (path) => {
  try {
    mkdirpSync(path);
    return path;
  } catch (e) {
    return {
      msg: i18n.createDirectoryFail(path)
    }
  }
};

const detectMode = (mode) => {
  if (Object.keys(supportedMode).includes(mode)) {
    return mode
  } else {
    return {
      msg: i18n.modeDoesNotExist(mode)
    }
  }
};

const checkMethodResult = (result) => {
  if (typeof result === 'object' && result !== null && typeof result.msg === 'string') {
    throw Error(result.msg);
  }
  return result;
};

module.exports = {
  checkMethodResult,
  detectFileOrDir,
  detectFormat,
  createDirectory,
  detectMode
};
