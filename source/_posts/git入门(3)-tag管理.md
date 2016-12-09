---
title: git入门（3）——tag管理
date: 2016-12-08 17:54:52
tags: git
categories: git
---

如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 git tag 给它打上标签。比如说，我们想为我们的 w3cschoolcc 项目发布一个"1.0"版本。 我们可以用 git tag -a v1.0 命令给最新一次提交打上（HEAD）"v1.0"的标签。

<!--more-->

---
## 查看标签
``` bash
#列出所有的tag
$ git tag
#查看远程分支
```

## 新增标签
``` bash
# 新建一个tag在当前commit
$ git tag [tag]
# 新建一个tag,说明版本信息
$ git tag -a v1.0 -m [message]

# 新建一个tag在指定commit
$ git tag [tag] [commit]
```


## 切换标签
``` bash
# 检出特定版本标签
$ git checkout [tag]
```

## 删除标签
``` bash
# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]
```

## 提交标签
``` bash
# 提交指定tag
$ git push [remote] [tag]
$ git push origin v1.2

# 提交所有tag
$ git push [remote] --tags
```

## 查看标签信息
*查看标签的具体信息，查看之后crtl+c退出
``` bash
$ git show [tag]
```



## 更多
* git入门3——tag管理