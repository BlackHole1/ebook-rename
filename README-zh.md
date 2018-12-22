# ebook-rename

[![Github License](https://img.shields.io/github/license/Calibre-Node/ebook-rename.svg?logo=appveyor&longCache=true&style=flat-square)](https://github.com/Calibre-Node/ebook-rename) [![Github Stars](https://img.shields.io/github/stars/Calibre-Node/ebook-rename.svg?logo=appveyor&longCache=true&style=flat-square)](https://github.com/Calibre-Node/ebook-rename)

如果你使用到了这个项目，可以点击star支持一下。

[English document](https://github.com/Calibre-Node/ebook-rename/blob/master/README.md)

> 利用ebook-meta来获取电子书的数据，进行重命名

**使用前，请保证电脑安装了calibre软件**

## 使用

```shell
$ npm i -g ebook-rename
$ ebook-rename -h
Usage: ebook-rename [options]

Options:
  -d, --directory <path>  电子书所在的目录 (默认：当前目录)
  -f, --format <string>   要重命名的电子书格式，支持格式：azw, azw1, azw3, azw4, cbr, cbz, chm, docx, epub, fb2, fbz, html, htmlz, imp, lit, lrf, lrx, mobi, odt, oebzip, opf, pdb, pdf, pml, pmlz, pobi, prc, rar, rb, rtf, snb, tpz, txt, txtz, updb, zip (默认：支持全部)
  -o, --output <path>     输出目录 (默认：outputBooks)
  -m, --mode <string>     输出模式，支持模式：cover, jump (默认: jump)
  -v, --version           output the version number
  -h, --help              output usage information
```

如果你的电脑是mac或者linux，并且目录中有空格，那么你需要在空格前面使用反斜杠来转化空格，如下：

```shell
# mac or linux
$ ebook-rename -d ~/kindle/My\ Kindle\ Content
```

如果你的计算机是windows，并且目录中有空格，那么你需要用双引号`"`括起目录。如下：

```shell
# windwos
$ ebook-rename -d "c:/kindle/My Kindle Content"
```

### 设置电子书目录

如果你的电脑是windows，并且目录中有空格，可以像下面这样

```shell
$ ebook-rename -d ~/kindle/My\ Kindle\ Content
```

如果不填，则默认是当前目录

### 设置输出目录

```shell
$ ebook-rename -o ~/newName
```

如果不填，则默认是当前目录下的outputBooks文件夹(如果没有，则自动创建)

### 设置输出模式

```shell
$ ebook-rename -m jump
```

* jump: 如果输出目录里已经有这个名字的文件了，则跳过

* cover: 如果输出目录里已经有这个名字的文件了，则覆盖

### 设置要重命名的文件格式

```shell
$ ebook-rename -f mobi,azw3,epub
```

默认支持格式为：azw, azw1, azw3, azw4, cbr, cbz, chm, docx, epub, fb2, fbz, html, htmlz, imp, lit, lrf, lrx, mobi, odt, oebzip, opf, pdb, pdf, pml, pmlz, pobi, prc, rar, rb, rtf, snb, tpz, txt, txtz, updb, zip

如果要指定多个，可以使用逗号进行分割
