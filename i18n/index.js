const zh = require('./zh');
const en = require('./en');

// https://github.com/noob9527/universal-locale/blob/master/index.ts#L17 (Thanks~)
const getLocale = () => {
  const env = process.env;
  const localeStr = env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE || env.LC_CTYPE;
  const res = localeStr && localeStr.replace(/[.:].*/, '').replace('_', '-').toLowerCase();
  return res
    ? res === 'zh-cn'
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
