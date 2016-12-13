---
title: nodejs入门
categories: nodejs
tags: [nodejs,nodejs入门]
date: 2016-12-13 15:34:46

---

作为前后端分离趋势的技术支持，nodejs一直扮演着重要的角色，那么在实际的项目中，nodejs究竟可以做哪些，又有什么便利之处呢？

<!--more-->

## 基础
### 什么是nodejs
js语言的运行环境，提供了一系列的内置对象。

### 用途
1 web服务器
2 调试js片段
3 编写前端工具
4 etc...

### 安装
NodeJS 提供了一些安装程序，都可以在 nodejs.org 这里下载并安装。
Windows 系统下，选择和系统版本匹配的 .msi 后缀的安装文件。Mac OS X 系统下，选择 .pkg 后缀的安装文件。
编译安装（linux系统下，win系统可以忽略）
Linux 系统下没有现成的安装程序可用，虽然一些发行版可以使用 apt-get 之类的方式安装，但不一定能安装到最新版。因此 Linux 系统下一般使用以下方式编译方式安装 NodeJS。
1.确保系统下 g++ 版本在 4.6 以上，python 版本在 2.6 以上。
2.从 nodejs.org 下载 tar.gz 后缀的 NodeJS 最新版源代码包并解压到某个位置。
3.进入解压到的目录，使用以下命令编译和安装。
``` bash
$ ./configure
$ make
$ sudo make install
``` 
### 运行
* win运行
打开终端，键入 node 进入命令交互模式，可以输入一条代码语句后立即执行并显示结果，例如：
``` bash
$ node
> console.log('Hello World!');
Hello World!
```
如果要运行一大段代码的话，可以先写一个JS文件再运行。例如有以下 hello.js。
``` javascript
function hello(){
	console.log("hello world");
}
hello();
```
写好后在终端下键入 node hello.js 运行，结果如下：
``` bash
$ node helloworld.js
```

### 模块
编写稍大一点的程序时一般都会将代码模块化。在 NodeJS 中，一般将代码合理拆分到不同的 JS 文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有 require、exports、module 三个预先定义好的变量可供使用。
1. require 定义需要依赖的模块
require 函数用于在当前模块中加载和使用别的模块，传入一个模块名，返回一个模块导出对象。模块名可使用相对路径（以./开头），或者是绝对路径（以/或C:之类的盘符开头）。另外，模块名中的.js扩展名可以省略。以下是一个例子。
``` javascript
var foo1 = require('./foo');
var foo2 = require('./foo.js');
var foo3 = require('/home/user/foo');
var foo4 = require('/home/user/foo.js');
```
2. exports
exports 对象是当前模块的导出对象，用于导出模块公有方法和属性。别的模块通过 require 函数使用当前模块时得到的就是当前模块的 exports 对象。以下例子中导出了一个公有方法。
``` javascript
exports.hello = function () {
    console.log('Hello World!');
};
```

3. module
通过 module 对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。
``` javascript
module.exports = function () {
    console.log('Hello World!');
};
```

4. 模块初始化
一个模块中的 JS 代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
主模块
通过命令行参数传递给 NodeJS 以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，main.js 就是主模块。
完整示例

例如有以下目录。

