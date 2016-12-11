---
title: html编码规范
date: 2016-12-08 09:27:31
categories:  html
tags:  html
---

本文为按照个人前端工程化中开发规划的子分之，将就html代码规范部分简单介绍，如果不完整或者不正确的，欢迎大家纠正并交流。

<!--more-->

---

## 基本规范

1.  使用<!Doctype html> 文档类型声明，h5的最新声明方式
`<!DOCTYPE html> `
2.  设置网页的编码以及文档类型
`<meta http-equiv ="Content-Type" content ="text/html; charset=utf-8" />`
3.  设置网页的渲染模式，按照最新的模式渲染
`<meta http-equiv ="X-UA-Compatible" content ="IE=edge,chrome=1">`
4.  如果是移动页面或者使用boot框架，设置meta的读取情况。
`<meta name="viewport" content="width=device-width; initial-scale=1.0;maximum-scale=1.0; user-scalable=no;"/>`
5.  网站的相关meta属性需要设置的设置，比如网站关键字，作者，描述，网站图标，请本站搜索meta关键字
6.  js以及css相关文档在head中引入，其中type属性可以省略，默认正确的，link标签的rel属性不可省略。
`<script src = "js/jquery-1.11.1.min.js" ></script >
<link rel = "stylesheet" href = "css/bootstrap.min.css" >`
7.  针对ie引入的文件写入注释语句中，注释条件语法如下，现在只针对ie8以上版本适配，需要的适配文件见有关资源。目前已经收集的兼容文件有兼容h5,媒体查询响应，css3选择器，css3部分属性。
```  html
<!--[if  lt IE 9]>
<script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<script src="../js/selectivizr.js"></script>
<noscript><link rel="stylesheet" href="[fallback css]" /></noscript>
<script src="../js/PIE.js"></script>
<![endif]-->
  # pie 的需要追加绑定脚本
   $(function() {
                 if (window.PIE) {
                      $( '.container-fluid' ).each(function () {
                           PIE.attach(this);
                      });
                }
         });
   ```
8.  针对jquery框架，特殊说明，之后的网站必须引用1.11.1以上版本，并且在其他js引入顺序之前。
9.  设置head内title标签属性，设置正确的网页标题。
10.  页面标签内不写脚本以及样式文件，实现网页的三层分离，也避免写style标签样式，避免focu现象。
11.  与dom有关的脚本绑定事件，写在domready之后，即可以加快页面的载入速度，也能避免事件绑定失败。特别注意的是，如果是自定义非绑定事件，写在
domready外面。
12.  页面文件，img，css等文件的命名使用英文语义化，使用驼峰式命名，对于特殊含义的使用中划线分割，对于格式以及访问层级的使用.,禁止使用中文，不建议使用拼音。备注：文件名称不宜过长控制在4个单词以内。
13.  待补充...

##  语法规范

* 以下规范不分先后
1.  标签以及标签属性小写
2.  可省略的闭合标签不省略，自闭合的标签可不写结束斜线。
3.  嵌套的标签必须被正确的嵌套，嵌套的子元素有一格的缩进
4.  使用语义化的标签，例如header,footer,nav,article,filedset,section等，避免全页使用div布局。
5.  针对img标签，写有合适的alt以及title属性，用于描述图片信息。
6.  对于标题项或者图片等，如果有需要显示的交互内容，建议写title属性，用于提示内容，在新浪以及淘宝等网站的图片以及标题中都有title属性，用于增加页面友好度，需要注意的是如果页面元素本身有交互效果或者弹框，可以省去。
7.  页面有完整的html结构，包括html,head,body标签。
8.  尽可能精简页面结构，标签最大可能性的是用于存放内容的，如果需要特殊样式用css实现，减少无意义的空标签。这个称作页面重构。
9.  格式化规则：每一个块级元素，新增空白行，行级元素写在同一行，同时子元素有两个空格的缩进。需要注意的是，行级元素换行会引起不必要的空白外间距，避免方式有两种，一种就是行级元素写在同一行，另外一种就是父元素设置font-size为0，当然也可以取巧，只把行级元素的开始标签头部写在上一行即可。
10. html属性值一律建议使用双引号，格式化html的同时，也便于js编写dom结构。（js为单引号）
11.  属性的使用顺序 class id name data- src for type href title alt aria role
12.  布尔型属性 不用赋值，有就是true，没有就是false
13.  有良好的注释规范，针对页面模块有简要的注释，便于维护。
单行注释 <!---->  ；多行注释<!--   -->
14.  待补充...

##  更多

###   友情链接
* [w3school官网-html](http://www.w3school.com.cn/html5/index.asp)
* [w3chtml教程](http://www.w3chtml.com/html5/course/)
* [极客学院html视频教程](http://search.jikexueyuan.com/course/?q=HTML5)

