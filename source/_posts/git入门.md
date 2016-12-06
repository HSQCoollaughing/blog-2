---
title: git版本管理入门
tags: git
categories: git
---

git版本管理作为开源项目的版本管理法则，以及多分支多版本的扁平分布式支持，被大多数的开发者所喜爱，那么究竟如何才能正确而轻松的学习git的版本管理呢？

<!--more-->

## 图解git版本管理工作流

![Alt text](/blog/img/cnpm-desc.png)



## 快速入手

### 全局安装cnpm

``` bash
$ npm install -g cnpm --registry=http://192.168.0.234:7001
```
如果你已经安装了cnpm模块，那么重新设置请求地址即可，不需要覆盖安装
``` bash
$ cnpm set registry http://192.168.0.234:7001
```

### 基本模块安装
cnpm的使用与npm完全相同，只是把npm改为cnpm即可，没有使用难度。

安装机制：从 http://192.168.0.234:7001 安装所有模块. 当安装的时候发现安装的模块还没有同步过来, 企业NPM会自动在后台进行同步, 并且会让你从淘宝NPM：registry.npm.taobao.org 进行安装. 下次你再安装这个模块的时候, 就会直接从企业NPM安装了.
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