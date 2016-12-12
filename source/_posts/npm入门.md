---
title: npm入门
categories: npm
date: 2016-12-09 17:54:52
---

在nodejs大环境下，npm作为包管理工具风靡一时，作为前端开发者需要知道npm可以实现哪些操作，核心的机制是如何的。

<!--more-->


## 快速入手

### 基本了解

* [npm官网地址](https://www.npmjs.com/)

* npm的运行环境是nodejs,默认nodejs安装之后就可以执行npm命令,nodejs的安装教程可以站内搜索或者百度搜索。
 ``` bash
$ npm -v
3.10.3
#全局安装 ,建议全局安装一次
$ npm i -g
#依赖安装,根据项目里的模块依赖情况
$ npm i --save-dev
```
* 模块版本说明
^1.0.0 此主版本  1.x.x>=1.0.0
~1.0.0 主版本对，并且包括分支小版本 1.1.0>1.0.x>=1.0.0
\>1.0.0 安装大于某个版本，默认等于版本的。 
<1.0.0 安装小于某个版本

### npm安装某模块
* npm也支持检索，但是npm模块太多，建议根据准确的模块名称直接安装。
``` bash
#全局安装某模块
$ npm i  packname -g
#全局安装某模块特定版本
$ npm i  packname@1.0.0 -g
#依赖安装某模块
$ npm i packname --save-dev
```

### 发布与删除模块

* npm增加用户,也可以官网注册
``` bash
# 增加用户
$ npm adduser
# 用户登录 
$ npm login
```
* 模块要想发布到npm仓库，必须有package.json的包说明文件，其他不做具体要求，可根据自己的需要灵活开发私属模块。建议通过npm init来实现模块包文件初始化。
``` bash
# 模块初始化
$ npm init 
# 发布模块
$ npm publish [name]
# 删除模块 
$ npm unpublish [name]
```
* 查看以及更新模块
``` bash
#查看模块详情
$ npm info [name]
#更新模块 
$ npm update [name]
```

### 新建模块简易教程

* 模块示例,发布模块要符合cmd模块规范。可以按照以下 步骤制定js模块。
0. 代码托管地址新建仓库
1. 新建模块文件夹，或者检出仓库地址，文件夹内写主要入口文件index.js
2. 初始化包描述文件，填写基本模块信息
3. 添加许可证，说明文件等次要信息，必要时可以添加说明文档，测试用例等

* 模块主js文件参考
``` javascript
#当前模块依赖的模块
var re=require("m1");
# 模块私有变量
var ab="";
# 模块私有方法
function parse(){
 #code here
};
#确定对外接口的变量 or方法
module.exports.ab=ab;
module.exports.parse=parse;  

```


