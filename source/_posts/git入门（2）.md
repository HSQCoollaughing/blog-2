---
title: git入门（2）
date: 2016-12-08 17:54:52
tags: git
categories: git
---

相信你通过git入门学习已经可以进行简单的代码提交与更新了，但那只是开始，这一篇文章将重点带领你如何去做分支管理。

<!--more-->

---


## 查看分支

* 下面三行分别代表查看本地分支，远程分支，以及所有分支（其中本地当前分支会有*号标记）

``` bash
$ git branch
$ git branch -r
$ git branch -a
```

## 本地新建分支，或者说切换分支

* 要求远程有这个分支，如果没有会提示路径错误,并且会跳转到这个分支。

``` bash
$ git checkout branchname
```

* 如果希望本地新增分支，远程没有这个分支。该命令会以当前分支为模板进行分支拷贝。
 
 ``` bash
$ git branch branchname
$ git checkout branchname
//以上两行等效于下面的
$ git checkout -b branchname
```

## 删除分支

* 删除本地分支，要求不再本地分支上，如果删除不掉，尝试追加 -f （force表示强制）

``` bash
$ git branch -d  branchname
```

* 删除远程分支，提供两种方式(1 删除分支  2 推送空内容 等于删除)

``` bash
$ git push origin --delete dev1
$ git push origin :dev1
```




* 如果希望本地新增分支，远程没有这个分支。

![git仓库概念](/blog/img/git-desc.png)

* 图解git工作流

![git工作流](git-flow.png)

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