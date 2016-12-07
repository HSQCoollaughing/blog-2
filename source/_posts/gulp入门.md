---
title: gulp项目构建入门(1)
categories: npm
tags: [gulp]
---

我们经常会手工作一些代码压缩，文件目录拷贝以及整理的工作，还有一些比如编译以及文件合并，追加前缀等，而这些琐碎的工作实际已经有一个比较好的前端构建工具gulp可以帮我们批量实现。

<!--more-->
### 前言
在目前的前端构建或者说自动化中，形成了三足鼎立的情况，分别是百度的fis,grunt,gulp.而无论是用户数还是使用难度，gulp都独占上风，众多的github项目选择了gulp作为构建工具。
### gulp的优点
* 易于使用，通过代码优于配置的策略，让简单的任务简单，复杂的任务可管理。比grunt的使用简单，得到前端开发者的好评。
* 利用 Node.js 流的威力，你可以快速构建项目并减少频繁的 IO 操作。
* 插件品质高：Gulp 严格的插件指南确保插件如你期望的那样简洁高质得工作。
* 易于学习：通过较少的api，掌握 Gulp 毫不费力，构建工作尽在掌握：如同一系列流管道。

### 图解gulp工作范畴
![gulp的任务](/blog/img/gulp-desc.png)
### 官网相关链接
* gulp官网： http://www.gulpjs.com.cn/
* 入门指南； http://www.gulpjs.com.cn/docs/getting-started/
* api文档： http://www.gulpjs.com.cn/docs/getting-started/

### 安装gulp模块
* 准备工作：项目模块初始化
``` bash
$ npm init
```
* 建议全局安装一次
``` bash
$ npm install -g gulp
```
* 因为不同项目开发时依赖的gulp版本可能是不同的，避免构建工具的向下不兼容问题。建议具体项目依赖安装，加入依赖之后，模块的依赖以及对应版本会保存到package.json文件中。
``` bash
$ npm install -g gulp --save-dev
```
* 项目的根目录如果直接执行gulp命令，需要项目的根目录下新建gulpfile.js，必须是这个文件名，然后gulp构建的相关的js代码写到这个文件中。

### gulp Api使用指南
* 作为常识要知道npm模块分两类：1 作为核心模块，可以直接用关键字加载请求下载使用 2 文件模块，按照文件的相对或者绝对地址，请求对应的文件模块（任何一个npm模块本质就是一个符合cmd or amd规范的js文件或者文件夹）。
* 通过require语法引入gulp模块
``` javascript
var gulp =require("gulp");
```
* gulp.src(globs[, options])
1. 输出（Emits）符合所提供的匹配模式（glob）或者匹配模式的数组（array of globs）的文件。 将返回一个 Vinyl files 的 stream 它可以被 piped 到别的插件中。（这里具体的匹配模式可以去github上去看详细的介绍，连接地址：https://github.com/isaacs/node-glob）
2. 我们最常使用的是文件相对路径，这里只介绍几个常用的，*(a|b|c) 匹配零个或多个提供的模式；?(pattern|pattern|pattern) 匹配零个或所提供的模式之一；!(pattern|pattern|pattern) 匹配任何不匹配任何提供的模式;
``` javascript
gulp.src('client/templates/*.jade')
  .pipe(jade())
  .pipe(minify())
  .pipe(gulp.dest('build/minified_templates'));
```
* gulp.dest(path[, options])
能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。针对多个文件输出原位置时，只要指定父文件夹路径即可。
``` javascript
gulp.src('./client/templates/*.jade')
  .pipe(gulp.dest('./build/minified_templates'));
```
* gulp.task(name[, deps], fn)
使用场景：定义父任务与子任务，比如build任务包括html、css、js、img等多子任务。
``` javascript
gulp.task('task-name',[dep1,dep2],function(){
   return gulp.src()
   .pipe()
})
```
* gulp.watch(glob[, opts, cb])
使用场景：监听文件，并且根据文件改变的不同做出不同响应的子任务或者简单记录文档变动日志
``` javascript
gulp.watch((["src/less/style.less", "src/less/**/*.less"]), ["less"])；
```
``` javascript
gulp.watch('src/less/style.less',function(event){
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
})
```
* gulp的执行机制
gulp默认是吧所有任务并发执行，并不会等待或者按顺序执行，在执行完成之后会进入 任务回调。如果需要制定执行顺序，给出一个提示，来告知 task 什么时候执行完毕，并且再给出一个提示，来告知一个 task 依赖另一个 task 的完成。
``` javascript
var gulp = require('gulp');
// 返回一个 callback，因此系统可以知道它什么时候完成
gulp.task('one', function(cb) {
    // 做一些事 -- 异步的或者其他的
    cb(err); // 如果 err 不是 null 或 undefined，则会停止执行，且注意，这样代表执行失败了
});
// 定义一个所依赖的 task 必须在这个 task 执行之前完成
gulp.task('two', ['one'], function() {
    // 'one' 完成后
});
gulp.task('default', ['one', 'two']);
```
