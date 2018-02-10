title: html之iframe标签的基本使用
categories:
  - html
tags:
  - iframe
author: zhangbing
date: 2018-12-12 09:28:00
---
如果你的页面是一个后台管理页面，那么你一定对iframe不陌生。从h5定稿开始，在涉及框架引入页面时，统一建议使用iframe来进行相关的资源嵌入。

<!--more-->

---

## 使用场景
1. 通常在不希望整体页面跳转，只需要主体页面跳转，则需要加入iframe标签来作为展示页面的窗口，通常在管理后台 、qq邮箱等管理界面应用比较多。
2. iframe 的属性中有src以及name属性 ，通过这两个属性可以搭配a标签实现第一条的需求，name是a连接target属性的指向地址，而src的地址可以通过a的href来改变

## 基本属性
* src 属性 指向该框架链接的页面地址，可以为相对请求地址，也可以为绝对地址，也可以为外网地址，当为不同服务器项目涉及跨域时，控制台会报错，但不会影响正常的显示
* name 大多数标签都有的自带属性，在input中为特殊含义 指代数据项的类型，而在iframe中可以用来当做目标
* frameborder 框架的边框可以用cssborder 代替
* width 一般由展示的空间决定宽度 ，height一般由载入页面的高度确定
* scrolling :auto yes no ,也可以用css 的overflow 的相关属性来控制

## iframe获取子页面的高度  
* 通常用于正确设置嵌入页的高度，一般情况下要设置展示嵌入页为固定大小的。
``` javascript 
//父页面载入获取高度　
标签内事件 ： onload="this.height=this.contentWindow.document.documentElement.scrollHeight"
js脚本通用事件
$( "iframe").load( function () {
   $(this).height($(this).contents().find( "body" ).height() + 30 );
})
//子页面载入之后　改变高度　  
var htmlHeight=$("body").height()+30;
$("#iframe", window.parent.document).height(htmlHeight);
```  

## 父子页面元素的获取

* 父页面以及子页面位置的元素获取
``` javascript 
   // 父页面获取子页面的元素 
$("#iframe").contents().find("#body")
  //子页面获取父页面的元素
$(window.parent.document).find("#iframe")
```