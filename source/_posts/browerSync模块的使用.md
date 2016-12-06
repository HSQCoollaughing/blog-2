---
title: browserSync模块的使用（1）
categories: npm
---

你经常会遇到项目代码修改调试然后重新刷新页面甚至清楚浏览器缓存的情况，下面提供一种方案为你提高下工作效率--browserSync.

<!--more-->

## 前言

它不但能够帮你实现同步代码到浏览器，而且可以实现多终端同时响应操作来进行你的开发工作，那么你在微信端调试你的页面遇到的问题或者代码的情况，谷歌浏览器也是可以看到，更多特性等待你去挖掘。



## 快速入手

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

### 全局安装browser-sync

``` bash
$ npm install -g browser-sync
```
### 对静态网站添加文件监听
你可以对特定的文件进行监听，也可以对特定的文件进行监听，如果想监听整体的网站，那么设置--files \"**\",文档模式为glob.补充说明默认所建服务器为本地3000端口并且在3001可以看到监测的同步情况。默认成功显示的是网站根目录index.html文件，如果没有提示can not get错误。如果有提示，conneted to browserSync.

``` bash
$ browser-sync start --server --files "*.html"
```

### 基本模块安装

``` bash
$ cnpm install [name]
```
### 手动同步模块
``` bash
$ cnpm sync [name]
```
### 发布与删除模块
备注：需要先用户登录,用户账号以及密码可以找运维部门索要配置。
* 用户登录
``` bash
$ cnpm login
```
* 发布模块
``` bash
$ cnpm publish [name]
```
* 删除模块
``` bash
$ cnpm unpublish [name]
```
### 其他
* 模块初始化
模块要想发布到npm仓库，必须有package.json的包说明文件，其他不做具体要求，可根据自己的需要灵活开发私属模块。建议通过cnpm init来实现模块包文件初始化。
``` bash
$ cd [name]
$ cnpm init 
```
* 查看模块详情
``` bash
$ cnpm info [name]
```

更多详情参考: [cnpm](http://192.168.0.234:7002/)