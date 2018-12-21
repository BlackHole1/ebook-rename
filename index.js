const { exec } = require('child_process');
const { join } = require('path');
const ProgressBar = require('progress');
const getCalibreTools = require('get-calibre-tools');
const { find } = require('sagase');
const { copySync } = require('fs-extra');
const i18n = require('./i18n');
const { directory, output, format, mode } = require('./lib/commander');
const { detectFileOrDir } = require('./lib/utils');

const formatRegex = new RegExp(`^.+\.(${format.join('|')})$`);

const findEbooks = ebookMeta => {
  find({
    folder: directory,
    pattern: formatRegex,
    nameOnly: false,
    exclude: /(node_modules\/)/,
    excludeNameOnly: false,
    recursive: true
  })
    .then(async files => {
      if (files.length === 0) {
        return Promise.reject(i18n.directoryDoesNotEbook(directory, format.join(', ')));
      }

      const bar = new ProgressBar(`${i18n.renaming} :bar`, {
        total: files.length,
        complete: '█',
        incomplete: '░'
      });

      let len = files.length;
      while(len--) {
        const filePath = files[len];
        const fileSuffix = filePath.split('.').pop();

        exec(`"${ebookMeta}" "${filePath}"`, { encoding: 'utf8' }, (err, stdout) => {
          if (err) {
            console.log(`${i18n.renameFail} ${filePath}`);
          }

          const bookName = /^Title.*:(.*)$/m.exec(stdout.toString())[1].replace(/[/\\;"':*<>?|]/, '').trim();
          try {
            if (mode === 'cover') {
              copySync(filePath, join(output, `${bookName}.${fileSuffix}`));
            } else {
              if (typeof detectFileOrDir(join(output, `${bookName}.${fileSuffix}`)) !== 'string') {
                copySync(filePath, join(output, `${bookName}.${fileSuffix}`));
              }
            }
            bar.tick();
          } catch (e) {
            console.log(`${i18n.renameFail} ${filePath}`);
          }
        });
      }
    })
    .catch(e => {
      console.log(e)
    });
};

getCalibreTools('ebook-meta')
  .then(path => {
    findEbooks(path);
  })
  .catch(e => {
    console.log(e);
  });
