const osLocale = require('os-locale');
const zh = require('./zh');
const en = require('./en');

const getLocale = () => {
  const res = osLocale.sync().toLowerCase();
  return res
    ? res === 'zh_cn'
      ? 'zh'
      : 'en'
    : 'en';
};

const i18nList = {
  zh,
  en
};

const i18n = () => {
  return i18nList[getLocale()];
};

module.exports = i18n();
