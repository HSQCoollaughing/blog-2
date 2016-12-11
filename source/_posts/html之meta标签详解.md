---
title: html之meta标签详解
date: 2016-12-08 09:28:01
categories:  html
tags:  html
---

相信你已经多少见过html的meta标签，但是对它的认识可能还不够全面，那么我简单为大家整理了下meta标签全部的属性值以及说明。

<!--more-->

---

## 属性
meta为标签head中的子标签，包括content（必选，存储值）、name（键名）、http-equiv（键名）、scheme(content格式)四个属性。
其中content属性为标记的具体值，必填值；name为把值关联到某个名称，http-equiv是把值关联到http头部；scheme是规定了content 的文本格式。
## http-equiv 
1.  Content-Type 文档类型,对应值为 text-html;charset=utf-8 ;
   eg:<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
2. Cache-Control 缓存控制，常见的取值有private、no-cache、max-age、must-revalidate等，默认为private, 
      1） 打开新窗口 值为private、no-cache、must-revalidate，那么打开新窗口访问时都会重新访问服务器。 而如果指定了max-age值，那么在此值内的时间里就不会重新访问服务器，例如： Cache-control: max-age=5(表示当访问此网页后的5秒内再次访问不会去服务器)
      2） 在地址栏回车 值为private或must-revalidate则只有第一次访问时会访问服务器，以后就不再访问。 值为no-cache，那么每次都会访问。 值为max-age，则在过期之前不会重复访问。
      3） 按后退按扭 值为private、must-revalidate、max-age，则不会重访问， 值为no-cache，则每次都重复访问
      4） 按刷新按扭 无论为何值，都会重复访问 Cache-control值为“no-cache”时，访问此页面不会在Internet临时文件夹留下页面备份。
     eg:`<meta http-equiv="Cache-Control" content="no-cache"/>`
3.  refresh 刷新页面,取值 `5;URL=http://www.baidu.com`,前面为跳转的时间（单位s），页面可以为绝对地址也可以为相对页面地址，页面地址不写默认为刷新当前页面。
      `eg:<meta http-equiv="refresh" content="5;URL=http://www.baidu.com"/>`
4. X-UA-Compatible 设置ie浏览器的文档的渲染模式，IE=edge,chrome=1.说明 ：这个参数用于解决浏览器的兼容性一致外观问题，可以使ie不同版本的浏览器有一致的外观，如果是edge则是以最新的模式渲染，如果有谷歌按照谷歌渲染。也可以强制按照ie7 8的标准渲染，如IE=7;IE=9
      eg：`<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">`
5. 其他（不常用的不再说明）
expires:网页的有效期，超过这个时间，网页作废，很少用,Sunday 26 October 2008 01:00 GMT；
 eg:`<meta http-equiv="expires" content="Sunday 26 October 2008 01:00 GMT" />`
content-language:网页的编码,语言类型,zh,en等，语言类型地址：[点击查看](http://www.dreamdu.com/xhtml/names_of_languages/) 
eg: `<meta http-equiv="content-language" content="zh-CN" />`
Pragma  控制禁止从缓存中访问页面
`<meta http-equiv="Pragma" content="no-cache"> `

##  name 
* 用于定义一些关键属性，用处很多。
1.  keyword 关键字 ，用户描述网站的主题
   eg: `<meta name="keywords" content="your tags" />`
2.  description 网站描述，每个网页都应有一个不超过 150 个字符且能准确反映网页内容的描述标签
   eg: `<meta name="description" content="150 words" />`
3. robots 搜索方式，常见值 
      all：文件将被检索，且页面上的链接可以被查询；
    none：文件将不被检索，且页面上的链接不可以被查询；
    index：文件将被检索；
    follow：页面上的链接可以被查询；
    noindex：文件将不被检索，但页面上的链接可以被查询；
    nofollow：文件将不被检索，页面上的链接可以被查询。
    eg :`<meta name="robots" content="index,follow" />`
4.  viewport 针对移动设备，控制视图的宽高，width为页面内容的宽度，initial-scale代表初始方法倍数，maximum-scale代表最大放大倍数，minimum-scale=0.5代表最小放大倍数，height：高度（数值 / device-height）（范围从223 到10,000），user-scalable：用户是否可以手动缩 (no,yes)，而为了更好的使用这个scale参数，需要获取当前的缩放倍率，用设备的宽度缩放640设计稿的比率
    eg：`<meta name="viewport" content="width=device-width; initial-scale=1.0;maximum-scale=1.0; user-scalable=no;"/>`
5.   format-detection 忽略识别一些特殊内容，如邮箱，电话等，写在一起可能会失效
   eg:`<meta content="telephone=no" name="format-detection" />`
6.  apple-mobile-web-app-capable 苹果默认的菜单栏，工具栏
  eg:`<meta name=”apple-mobile-web-app-capable” content=”yes” />`
7.  其他 
  ``` bash
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 只有在开启WebApp全屏模式时才生效。content的值为default | black | black-translucent 。 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
```