---
title: git入门（2）——分支管理
date: 2016-12-08 17:54:52
tags: git
categories: git
---

相信你通过git入门学习已经可以进行简单的代码提交与更新了，但那只是开始，这一篇文章将重点带领你如何去做分支管理。

<!--more-->

---
## 查看分支
``` bash
#查看本地分支，其中本地当前分支会有*号标记
$ git branch
#查看远程分支
$ git branch -r
#查看所有分支
$ git branch -a
```

## 本地新建分支（切换分支）
``` bash
#新建分支（如果本地已有会报错）
$ git branch branchname

#切换分支：本地没有该分支，远程有，检出远程分支；本地有该分支，直接切换
$ git checkout branchname

#切换分支：切换到上一个分支
$ git checkout -

#切换分支：本地以及远程都没有该分支（提示路径错误），需新建本地分支（当前分支为模板）
$ git checkout -b branchname

#切换分支：本地以及远程都没有该分支（提示路径错误），需新建本地分支并指定分支模板
$ git checkout -b branchname copybranch

```

## 删除分支
``` bash
#删除本地分支，要求不再本地分支上，
$ git branch -d  branchname
#如果删除不掉，尝试追加 -f（--force表示强制）
$ git branch -d  branchname -f

#删除远程分支，提供两种方式(1 删除分支  2 推送空内容 等于删除)
$ git push origin --delete dev1
$ git push origin :dev1
```

## 本地分支推送到远程
``` bash
#本地分支推送到远程(远程没有该分支,远程新建分支)
$ git push --set-upstream origin branchname
```

## 合并分支
``` bash
#可以合并指定分支到当前分支（本地）
$ git merge branchname
#可以合并指定分支到当前分支（远程）
$ git merge origin/branchname
```



## 分支策略
* 如何利用分支？
首先，master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；
那在哪干活呢？干活都在dev分支上，也就是说，dev分支是不稳定的，到某个时候，比如1.0版本发布时，再把dev分支合并到master上，在master分支发布1.0版本；
你和你的小伙伴们每个人都在dev分支上干活，每个人都有自己的分支，时不时地往dev分支上合并就可以了。

![git-sta分支管理](/blog/img/git-sta.png)

* bug分支
软件开发中，bug就像家常便饭一样。有了bug就需要修复，在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。

* 临时保存(git stash) 
当你正在开发一个分支，但是这个分支还未完全开发好，不能提交到dev,需要临时保存。之后可以根据提供的7进制码来找到代码记录。
``` bash
$ git stash
Saved working directory and index state WIP on blog: 06e9083 sd
HEAD is now at 06e9083 sd
```