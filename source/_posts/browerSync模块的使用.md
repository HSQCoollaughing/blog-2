---
title: browserSync模块的使用（1）
categories: npm
---

你经常会遇到项目代码修改调试然后重新刷新页面甚至清楚浏览器缓存的情况，下面提供一种方案为你提高下工作效率--browserSync.  sd

<!--more-->

## 前言

它不但能够帮你实现同步代码到浏览器，而且可以实现多终端同时响应操作来进行你的开发工作，那么你在微信端调试你的页面遇到的问题或者代码的情况，谷歌浏览器也是可以看到，更多特性等待你去挖掘。

## 基本了解
### 官方文档
官网中文地址：http://www.browsersync.cn/
官网中文说明： http://www.browsersync.cn/docs/
github代码托管地址： https://github.com/BrowserSync/browser-sync

### 优点介绍
* 交互同步
* 文件同步
* URL历史
* 同步定制
* 远程督察
* URL通道
* UI或命令行控制
* 浏览器支持
* 构建工具兼容
* 服务于任何本地站点
* 安装并运行在任何地方
* 空闲运行并再利用

## 安装与实现
### 安装
``` bash
#全局安装
$ npm install -g browser-sync
#依赖安装
$ npm install  browser-sync --save-dev
```

### 实现原理
Browsersync的工作原理是在<body>标签之后插入初始请求的`<script async>...</script>)`	异步脚本标记， 为了能够正常工作	`<body>	`标签必须存在。另外，您可以为使用 snippetOptions代码段自定义规则

###  监听静态网站
你可以对特定的文件进行监听，也可以对特定的文件进行监听，如果想监听整体的网站，那么设置--files "**",文档模式为glob.补充说明默认所建服务器为本地3000端口并且在3001可以看到监测的同步情况。默认成功显示的是网站根目录index.html文件，如果没有提示can not get错误。如果有提示，conneted to browserSync.

``` bash
# 启动服务器 监听所有的html文件
$ browser-sync start --server --files "*.html"
# 启动服务器 监听所有的文件
$ browser-sync start --server --files "**"
```

## 基本命令行配置
### 参数说明
* 下面只列出常用的参数，详细的请看[官网说明](http://www.browsersync.cn/docs/command-line/)
参数| 说明
----|----
--help | 输出使用信息
--files | 监听文件的匹配模式
--version | 版本信息
--browser  |	选择哪个浏览器应该是自动打开
--exclude	|文件模式忽视
--server|	运行本地服务器（使用您的CWD作为Web根）
--index	|指定哪些文件应该被用作索引页
--proxy|	代理现有的服务器
--host	|指定主机名使用
--port	|指定要使用的端口

### 文件实例
``` bash
# 单个文件 
$ browser-sync start --files "css/core.css"
# 单模式
$ browser-sync start --files "css/*.css"
# 多个文件 
$ browser-sync start --files "css/core.css, css/ie.css"
# 多模式 
$ browser-sync start --files "css/*.css, *.html"
# 启动服务器 监听所有的文件
$ browser-sync start --server --files "**"
```
###  服务器实例

``` bash
# 使用当前目录为根＃静态服务器
$ browser-sync start --server

# 使用“应用程序”目录的根目录＃静态服务器
$ browser-sync start --server app

# 使用当前目录与目录列表根＃静态服务器 
$ browser-sync start --server --directory
```
### 代理实例

``` bash
# 使用local.dev虚拟主机
$ browser-sync start --proxy

# 使用local.dev虚拟主机与港口 
$ browser-sync start --proxy local.dev:8001

# 使用本地主机地址 
$ browser-sync start --proxy localhost:8001

# 使用本地主机地址 子地址
$ browser-sync start --proxy localhost:8080/site1
```
### 重载选项
可以选择重载 --files 重载，--port 端口重载 ，--url 提供完整的url重载
``` bash
# 重载http协议
$ browser-sync reload

# 重载带端口的HTTP协议
$ browser-sync reload --port 4000 --files="*.css"

```
## Browsersync API
Browsersync API是难以置信的简单和强大。你可以用它来创建简单的开发任务或与其他工具配合使用完成复杂的任务。你要使用它， 只需要 require Browsersync 模块，就像您使用其他模块那样。以下是常用方法的详细说明：
### 创建方式
在2.0.0+版本（推荐），调用 .create() 意味着你得到一个唯一的实例并允许您创建多个服务器或代理。
``` bash
#require 加载 browser-sync 模块
var bs = require("browser-sync").create();
# .init 启动服务器
bs.init({
    server: "./app"
});
#现在请BS，而不是方法
#主Browsersync模块出口，可以控制最终的结果 
bs.reload("*.html") ;

```
#require dfbdfbsdvfddfbv