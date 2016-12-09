---
title: gulp项目构建入门(2)——基本插件的使用
categories: npm
tags: [gulp]
---

如果你已经在项目中引入了gulp，那么不妨尝试用一些gulp集成好的插件来做一些任务。下面假定前端项目中根目录有src以及dist两个，分别用于开发和生产。

<!--more-->
### 前言
* 以下模块地址均为官网地址，如果觉得请求地址慢，可以访问淘宝镜像的包说明地址，http://npm.taobao.org/
* 以下模块介绍顺序不分先后，代码仅供参考，亲测可用。
* 所有的模块使用都需要require引入，如果下面代码有遗漏请自觉加入。

### gulp-less
* 模块地址：https://www.npmjs.com/package/gulp-less/ 
* 安装
``` bash
$ npm install gulp-less --save-dev 
```
* 使用场景：开发完成之后利用任务自动将开发代码编译
* 使用
``` javascript
var less = require('gulp-less');
gulp.task('lessCompile', function () {
  return gulp.src('src/less/style.less')
    .pipe(less())//less编译 
    .pipe(gulp.dest('dist/css'));//编译为同名的文件,不需要单独命名样式文件
});
 
```

### gulp-rename
* 模块地址：https://www.npmjs.com/package/gulp-rename/ 
* 安装
``` bash
$ npm install gulp-rename --save-dev 
```
* 使用场景：区别于开发文件或者追加版本号等，入参有path：子属性有dirname，basename ，prefix，suffix，extname。可以通过字符串，方法以及hash三种方式。个人建议使用最后一个最方便,fn的最强大。
* 使用
``` javascript
var rename = require('gulp-rename');
gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
    //第一种方式
  .pipe(rename({
    dirname: "main/text/ciao",  basename: "aloha",prefix: "bonjour-",
    suffix: "-hola", extname: ".md"}))
      //第二种方式
   .pipe(rename(function (path) {
    path.dirname += "/ciao";
    path.basename += "-goodbye";//支持更灵活的定义
  })
```

### gulp-clean-css
* 模块地址：https://www.npmjs.com/package/gulp-clean-css/ 
* 安装
``` bash
$ npm install gulp-clean-css --save-dev 
```
* 使用场景：导出到生产之前需要压缩样式表
配置说明：
1. advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
2. compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
3. keepBreaks: true,//类型：Boolean 默认：false [是否保留换行]
4. keepSpecialComments: '*'//保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
* 使用
``` javascript
var cleanCSS = require('gulp-clean-css');
gulp.task('cleanCss', function () {
  return gulp.src('src/less/style.less')
    .pipe(cleanCSS())//压缩css文件
});
 
```

### gulp del
* 模块地址：http://www.gulpjs.com.cn/docs/recipes/delete-files-folder/ 
* 安装
``` bash
$ npm install gulp del --save-dev 
```
* 使用场景：删除指定路径的文件，删除管道中的文件（需要vinylPaths模块的安装），如果是整
个文件夹内容清空/*.如果是包括文件夹删除，直接文件目录即可，如/**/*
* 使用
``` javascript
var del=require('del'),vinylPaths = require('vinyl-paths')；
//删除指定路径的文件
gulp.task("clean:css",function(cb){
	del(['dist/css/*.css',  '!dist/css/*min.css'], cb);})
gulp.task("del-less",function(){
	return gulp.src('src/less/demo.less')
	.pipe(vinylPaths(del))
})//删除管道中的文件
 
```

### gulp-uglify

* 模块地址：https://www.npmjs.com/package/gulp-uglify 
* 安装
``` bash
$ npm install gulp-uglify --save-dev 
```
* 使用场景：脚本上线之前完成压缩工作
* 使用
``` javascript
var uglify = require('gulp-uglify');
gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
});
 
```


### gulp-concat
* 模块地址：https://www.npmjs.com/package/gulp-concat 
* 安装
``` bash
$ npm install gulp-concat --save-dev 
```
* 使用场景：web优化，合并文件减少http请求，同类型的文件才可以合并，比如css可以合并，js可以合并等。
* 使用
``` javascript
var fileConcat = require('gulp-concat');
gulp.task('fileConcat', function () {
  return gulp.src('src/js/*.js') 
    .pipe(concat("combine.js"))//可以控制合并生成的文件
});
 
```

### gulp copy 
* 不需要安装任何模块，因为本身gulp的文件流管道机制支持文件拷贝
* 使用场景：复制相关的文件结构到生产目录，比如页面文件。因为页面文件中的都是相对目录，所以当css以及js使用为产出地址时，要求页面等必备的希望产品的也放到产出目录。
* 使用
``` javascript
gulp.task("copyhtmldir",function(){
	return gulp.src(['src/html/**/*'])
	.pipe(gulp.dest('dist/html'))
	
})
```

### gulp-imagemin
* 模块地址：https://www.npmjs.com/package/gulp-imagemin 
* 安装
``` bash
$ npm install gulp-imagemin  --save-dev 
```
* 使用场景：上线之前对不必要的高精度图片进行压缩，避免不必要的高清图片。优化加载速度，提升页面性能，配置项为json类型。
1. optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
2. progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
3. interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
4. multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化 
* 使用
``` javascript
var imgmin=require("gulp-imagemin");
gulp.task("imgmin",function(){
 	return gulp.src('src/images/*')
 	.pipe(imgmin())
	.pipe(gulp.dest("dist/images"))})
```

### gulp-autoprefixer
* 模块地址：https://www.npmjs.com/package/gulp-autoprefixer 
* 安装
``` bash
$ npm install gulp-autoprefixer --save-dev 
```
* 使用场景：不熟悉厂商前缀的开发者可以在开发完成之后利用此模块一次性追加前缀，可以灵活配置前缀需求的浏览器列表。
1. browsers：[]  （定义使用的浏览器版本）
2. cascade ： true  （定义对属性进行对齐操作）,默认true
3. remove : true (去掉不必要的前缀) ，默认true

* 使用
``` javascript
//直接对管道文件操作
 .pipe(autoprefixer({
			browsers:["last 5 versions"],
			cascade:true,
			remove:true}))
```

### gulp-load-plugins
* 模块地址：https://www.npmjs.com/package/gulp-load-plugins 
* 安装
``` bash
$ npm install gulp-load-plugins --save-dev 
```
* 使用场景：所有gulp集成的模块插件如果前面有gulp- 开头并且在package.json中有依赖注入，那么不需要重复声明变量，可以直接用$.name使用，后面多单词从第二个词开始首字母需要大写。
* 使用
``` javascript
var $ = require('gulp-load-plugins')();
$.rename
//等效于下面的写法
var rename=require('gulp-rename');
rename
 
```