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
* .create(name) ，Type: String,可稍后用于检索的标识符,在2.0.0+版本（推荐）这种方式创建服务 ,意味着你得到一个唯一的实例并允许您创建多个服务器或代理。
``` bash
// 创建一个未命名的实例
var bs = require("browser-sync").create();
// 创建一个命名实例
var bs = require("browser-sync").create('My server');
// 创建多个
var bs1 = require("browser-sync").create('Server 1');
var bs2 = require("browser-sync").create('Server 2');
```
### 获取实例
* .get(name) ，可以通过名称获取实例。如果你有其他构建脚本在单独的文件，这很有用。
``` bash
// 在一个文件中创建一个命名实例... 
var bs = require("browser-sync").create('My Server');
// 初始化Browsersync服务器
bs.init({
    server: true
});
// 现在，获取另一个实例。 
var bs = require("browser-sync").get('My server');
// 并调用它的任何方法。 
bs.watch('*.html').on('change', bs.reload);
```
### 初始化服务
* .init( config, cb ) ，启动Browsersync服务。这将启动一个服务器，代理服务器或静态服务器，这取决于你实际需要。
config
Type: Object [optional]
这是你的Browsersync实例的主配置，并且可以包含任何可用的选项。如果你不使用已有的配置参数，Browsersync仍将运行; 但只能在 snippet 模式下
cb
Type: Function [optional]
如果你传递一个回调函数，它会在Browsersync已完成全部安装任务，并准备使用时被调用。或同步执行其他任务：当你需要等待信息（网址，端口等），这非常有用。
``` bash
var bs = require("browser-sync").create();

// 开始一个Browsersync静态文件服务器
bs.init({
    server: "./app"
});

// 开始一个Browsersync代理
bs.init({
    proxy: "http://www.bbc.co.uk"
});
```

### 重载
.reload( arg ) ，该 reload 方法会通知所有的浏览器相关文件被改动，要么导致浏览器刷新，要么注入文件，实时更新改动。arg Type: String | Array | Object [optional]一个或多个文件被重新加载。
``` bash
// 浏览器重载
bs.reload();
// 单个文件
bs.reload("styles.css");
// 多个文件
bs.reload(["styles.css", "ie.css"]);
// 在2.6.0里 - 通配符来重新加载所有的CSS文件 
bs.reload("*.css");
```

### 变化流
.stream( opts ) 该 stream 方法返回一个变换流，并且可以充当一次或多个文件。opts Type: Object [optional]
配置流的方法 （注: 至少需要2.6.0版本）
``` bash
// 编译SASS且自动注入到浏览器
gulp.task('sass', function () {
    return gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'))
        .pipe(bs.stream());
});

// 提供 `once: true` 限制每个流重装一次
gulp.task('templates', function () {
    return gulp.src('*.jade')
        .pipe(jade())
        .pipe(gulp.dest('app'))
        .pipe(bs.stream({once: true}));
});

// 提供过滤器以被重新加载阻止不需要的文件
gulp.task('less', function () {
    return gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(bs.stream({match: "**/*.css"}));
});
```

### 消息提醒
.notify( msg, timeout ) 浏览器消息助手 msg Type: String | HTML 可以是一个简单的消息，如“连接”或HTML
timeout Type: Number [optional]消息将保存在浏览器里时间设置。1.3.0版本
``` bash
var bs = require("browser-sync").create();

// 文本信息
bs.notify("Compiling, please wait!");

// HTML信息
bs.notify("HTML <span color='green'>is supported</span> too!");

// 1.3.0版本，指定超时
bs.notify("This message will only last a second", 1000);
```

### 其他

* 更多方法参考官方文档：[点击跳转](http://www.browsersync.cn/docs/api/)
