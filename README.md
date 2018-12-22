# ebook-rename

[![Github License](https://img.shields.io/github/license/Calibre-Node/ebook-rename.svg?logo=appveyor&longCache=true&style=flat-square)](https://github.com/Calibre-Node/ebook-rename) [![Github Stars](https://img.shields.io/github/stars/Calibre-Node/ebook-rename.svg?logo=appveyor&longCache=true&style=flat-square)](https://github.com/Calibre-Node/ebook-rename)

If you use this project, you can click star to support it.

[中文文档](https://github.com/Calibre-Node/ebook-rename/blob/master/README-zh.md)

> Use ebook-meta to retrieve data from eBooks and rename them

**Before using, please ensure that the computer has calibre software installed**

## Use

```shell
$ npm i -g ebook-rename
$ ebook-rename -h
Usage: ebook-rename [options]

Options:
  -d, --directory <path>  The directory where the e-book is located (default: current directory)
  -f, --format <string>   The e-book format to be renamed, supported formats: azw, azw1, azw3, azw4, cbr, cbz, chm, docx, epub, fb2, fbz, html, htmlz, imp, lit, lrf, lrx, mobi, odt, oebzip, opf, pdb, pdf, pml, pmlz, pobi, prc, rar, rb, rtf, snb, tpz, txt, txtz, updb, zip (default: Support all)
  -o, --output <path>     Output directory (default: outputBooks)
  -m, --mode <string>     Output mode, supported mode: cover, jump (default: jump)
  -v, --version           output the version number
  -h, --help              output usage information
```

If your computer is mac or linux and there are spaces in the directory, then you need to use a backslash in front of the space to convert spaces, as follows:

```shell
# mac or linux
$ ebook-rename -d ~/kindle/My\ Kindle\ Content
```

If your computer is windows and there are spaces in the directory, then you need to enclose the directory with double quotes `"`. as follows:

```shell
# windows
$ ebook-rename -d "c:/kindle/My Kindle Content"
```

### Set up e-book directory

```shell
$ ebook-rename -d ~/kindle/My\ Kindle\ Content
```

If not filled, the default is the current directory.

### Set the output directory

```shell
$ ebook-rename -o ~/newName
```

If not filled, the default is the outputBooks folder in the current directory(If not, it is automatically created)


### Set output mode

```shell
$ ebook-rename -m jump
```

* jump: Skip if there is already a file with this name in the output directory

* cover: If there is already a file with this name in the output directory, then the file is overwritten

### Set the file format to be renamed

```shell
$ ebook-rename -f mobi,azw3,epub
```

The default support format is: azw, azw1, azw3, azw4, cbr, cbz, chm, docx, epub, fb2, fbz, html, htmlz, imp, lit, lrf, lrx, mobi, odt, oebzip, opf, pdb, pdf, pml, pmlz, pobi, prc, rar, rb, rtf, snb, tpz, txt, txtz, updb, zip

If you want to specify more than one, you can use a comma to split

## Author

**Black-Hole**

* Github: https://github.com/BlackHole1
* Blog: http://bugs.cc
* WeiBo：http://weibo.com/comelove
* Twitter：https://twitter.com/Free_BlackHole
