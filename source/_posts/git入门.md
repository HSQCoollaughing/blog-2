---
title: git版本管理入门（一）
tags: git
categories: git
---

git版本管理作为开源项目的版本管理法则，以及多分支多版本的扁平分布式支持，被大多数的开发者所喜爱，那么究竟如何才能正确而轻松的学习git的版本管理呢？目前公司内部是搭建的gitlab的平台，那么我们学习gitlab的工作流是必须的哦。

<!--more-->

---

## 准备工作
### 准备一个git源项目
* [github官网地址](https://github.com) ，也可以选择公司内网的[gitlab](http://192.168.0.116/users/sign_in)新建项目，
* [新建代码仓库教程](https://guides.github.com/activities/hello-world/)


### 本地安装git客户端
* 软件下载地址：[内网地址（win64位）](\\192.168.0.117\share1\ZJFE\前端软件) ；[官网地址-win](https://git-scm.com/download/win)
* 安装教程：[点击查看](http://jingyan.baidu.com/article/49711c617f3e03fa451b7c10.html)
* 需要注意的是在进入Configuring the line ending conversions界面，选择换行格式，选择“Checkout as-is, commit Unix-style line endings”（按照检出格式检出，但是提交统一按照unix格式）。其他的都是默认选项点下一步即可。
* 任意位置，可以在鼠标右键菜单打开git bash,或者用git gui进行相关操作。例如 git --version 可以查看安装好的git版本。
除此之外，git bash面板还支持npm相关的命令操作，但不支持cmd的部分操作。cmd面板可支持git的相关操作，不同的只是前面没有$标志，不影响运行结果。

``` bash
$ git --version 
```

## 图解git

* git的三个代码仓库

![git仓库概念](/blog/img/git-desc.png)

* 图解git工作流

![git工作流](/blog/img/git-flow.png)

* git常见的三种工作流程

1. git 
2. github flow 
3. gitlab flow

*了解更多：[git三种工作流的区别](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)

---

## git基本配置

### 查看配置

``` bash
$ git config --list 
```
### 修改配置

* 设置用户名，邮箱

``` bash
$ git config --global user.name "csnikey"
$ git config --global user.email "email address"
```

* 设置编码

``` bash
$ git config --global gui.encoding utf-8
$ git config --global i18n.commitencoding utf-8
$ git config --global i18n.logoutputencoding gbk

```

## git基本命令

* 图解git常用命令行

![git仓库概念](/blog/img/git-desc2.png)

 **名词解释:** Workspace:工作区  ; Index / Stage：暂存区; Repository：仓库区（或本地仓库）; Remote：远程仓库;
 
### 新建项目

* 当前目录作为项目目录
``` bash
$ git init 
```
* 新建一个目录作为git目录
``` bash
$ git init proname
```
* 检出一个项目，默认将用远程项目的名字作为项目文件夹名称(如果检出目录已经有该文件，并且非空会报错哦),另外特别说明：默认情况下clone只能检出master分支，检出后可以利用git branch -r 查看远程分支，然后在checkout 对应的远程分支即可（检出时就是检出远程的分支）。
``` bash
$ git clone url
```
* 检出一个项目，用自定义的名字，会帮你新建文件夹
``` bash
$ git clone url self_proname
```
### 从远程更新代码

* 建议项目开发之前都拉取下远程代码

``` bash
$ git pull
```

### 提交代码到远程

* 检测本地代码的状态,命令行会给出正确的提交流程

``` bash
$ git status
```

* 提交代码到暂存区 （.代表 所有文件，也可以指定特定文件）.

``` bash
$ git add .   
```
* 如果遇到提交失败，提示Another git process seems to be running in this repository...,说明有其他进程操作这个文件，删除锁文件即可。然后就可以愉快的进行下一步了。

``` bash
$ rm -f ./.git/index.lock    
```

* 提交代码到本地仓库 （message代表提交的注释，必须填写的）

``` bash
$ git commit -m [message]
```
* 提交之前从远程拉取项目，更新一下，避免提交失败。如果拉取失败，那么检出有问题的文件，进行处理。

``` bash
$ git pull
```
* 如果有冲突文件，针对冲突文件进行处理，文件内会有多行冲突描述的，建议使用较好的客户端工具，比如toriseGit

``` bash
$ git diff
```
* 修改完成之后，重复上面流程，再次pull，如果不报错了，就可以push了，默认提交到本分支

``` bash
$ git push
```

## 更多

 * 廖雪峰git教程参考：[点击跳转](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)
 