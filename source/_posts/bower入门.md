---
title: bower使用入门（一）
tags: bower
categories: npm
date: 2016-12-06 09:28:01
---

npm作为包管理器可以无差别的管理一些js模块，而bower可以从另一个维度申请下载项目所需的资源，以前端资源的方式去下载并应用到项目当中。

<!--more-->

---


## 快速入手

* [bower官网](https://bower.io/)
* 优点：项目依赖安装，可以固定资源文件，可以支持缓存安装等
* 全局安装bower
``` bash
$ npm install -g bower 
```
* 项目依赖安装 
``` bash
$ npm install --save-dev bower
```
 
* 本地资源资源依赖配置初始化
``` bash
$ bower init
```

* 资源加载,默认安装在bower_components
``` bash
#项目安装指定资源
$ bower install [name] --save-dev
#项目安装依赖资源 
$ bower install  --save-dev
#查看资源详情 
$ bower info [name]
#搜索资源 
$ bower search [name]

```

* bower支持的安装方式(后面几种是比较建议的方式)
> #registered package 包名
$ bower install jquery
#GitHub shorthand（github的短地址）
$ bower install desandro/masonry
#Git endpoint git的地址
$ bower install git://github.com/user/package.git
#URL，支持css js taz zip  
$ bower install http://example.com/script.js 
#local，本地资源目录 ,更喜欢本地文件的可以用这个，也可以参考bower的缓存文件目录（以文件夹的方式引入到comp中,文件夹理解为一个资源）
$ bower install my/local/folder/ 
#local，本地资源目录文件，也可以参考bower的缓存文件目录（以文件夹的方式引入到comp中,文件名为文件夹名，加index）
$ bower install my/local/folder/file     

## gulp集成bower

* bower拓展性很好，支持建立为gulp任务
``` javascript 
//安装资源，可以指定安装之后的目录，可以指定资源集合
var　bower=require("bower");
gulp.task("gulpbower",function(){
     return bower({ directory: './my_bower_components', cwd: './app' })
     .pipe(gulp.dest("lib"));
})
//获取资源的主文件
var mainBowerFiles=require("main-bower-files");
//吧下载的前端模块的主文件加载到lib当中 ,如何配置获取压缩版本的主文件？只获取主文件，不同项目需要的文件可以手动配置
gulp.task("bowerfiles",function(){
     return gulp.src(mainBowerFiles({
          paths:"",
          group:"basic"
     })) 
     .pipe(gulp.dest("lib"));
})
 
```

## 发布与删除资源
``` bash
# 发布资源
$ bower register <my-package-name> <git-endpoint>
# for example
$ bower register example git://github.com/user/example.git
# 删除资源 ,删除资源需要登录（github），需要你是这个资源的owner
# cmd窗口操作
bower login
? Username csnikey
? Password ********
bower EAUTH         Logged in as csnikey
$ bower unregister <my-package-name> 
bower Package unregistered      zj-boot


```

## 资源使用
资源发布之后如何使用取决于用户，我们推荐你用bower and 其他工具一起使用，比如grunt \gulp\requirejs 等，为此可以查看官方使用的[api文档](https://bower.io/docs/api/)