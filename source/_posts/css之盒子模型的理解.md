---
title: css之盒子模型的理解
date: 2016-12-12 09:26:02
categories: css

---

引言 ：也许你觉得盒子模型很简单，尤其在ie6怪异盒模型已经退出历史舞台的时候，但事实上并非如此，怪异盒模型仍然在不断的被前端开发者所青睐。在css3中更是增加了`box-sizing`这一属性来改变标准盒模型。

---

<!--more-->

##  概念（box-model） 
   
盒子模型，就是针对html标签为单位，所定义的一个形象化的展示模型，规定了元素如何处理元素内容、内边距、边框 和 外边距的方式。而整体的页面布局就是不同的盒子堆砌以及嵌套组成。

## 盒子模型的差别

目前存在的盒子分为两种，一种是w3c标准盒子，另外一种是ie6以下的怪异盒子模型。区别这两种盒子之前，看一下盒子模型中外盒和内盒的概念。
1. w3c标准的盒模型中外盒以及内盒的定义 ：
    外盒尺寸计算（元素空间尺寸）
  Element空间高度 = content height + padding + border + margin
  Element 空间宽度 = content width + padding + border + margin
    内盒尺寸计算（元素大小）
  Element Height = content height + padding + border （Height为内容高度）
  Element Width = content width + padding + border （Width为内容宽度）
2. ie传统盒模型：ie6以下，不含ie6版本。
   外盒尺寸计算（元素空间尺寸）
  Element空间高度 = content Height + margin (Height包含了元素内容宽度，边框宽度，内距宽度)
  Element空间宽度 = content Width + margin (Width包含了元素内容宽度、边框宽度、内距宽度)
    内盒尺寸计算（元素大小）
  Element Height = content Height(Height包含了元素内容宽度，边框宽度，内距宽度)
  Element Width = content Width(Width包含了元素内容宽度、边框宽度、内距宽度)
 	可以看到 在以上的盒模型中，元素的宽高定义的非常细，两者的外盒模型是一致的，而ie的内盒模型的宽高是包括了w3c中的内盒模型的整体的,而content width=css属性的width.

## 实际使用
* 在目前的主流浏览器使用最新的h5文档申明之后，所参考的都是最新的w3c的盒模型，除非客户ie特别是ie6以下版本才是怪异模型。
就使用而言，现状是定义的样式宽高只包括了内容的宽高，而实际的宽高则是一个累加值。所以在定义所有元素大小时，如果宽高中有padding以及padding值时需要对应的宽高减去间距或者边框值，而这样的使用是不便于控制的。
所以在w3c的官方说明中，是这样建议的：
> 目前最好的解决方案是回避这个问题。也就是，不要给元素有指定宽度高度的元素添加内边距和边框，而是尝试将内边距或外边距添加到元素的父元素和子元素。
 
* 以上的应用也可以在大多数的网站中得到验证，在许多需要内边距或者边框的，尤其内边距的布局中，前端工程师都会多写一层类似于wrapper 的包裹元素用来解决这个问题。
  
## css3 box-sizing
* 就概念而言，ie的怪异模型是比较好控制和理解的，w3c在认识到这个问题之后，在css3中追加了改变盒模型的属性:box-sizing ，语法如下：
  `box-sizing ： content-box || border-box || inherit`
  中文版说明：http://www.w3help.org/zh-cn/kb/006/
  在这个属性中，可以控制内盒模型按照何种方式进行显示，如果是content-box是w3c 的标准盒子，如果是border-box是ie 的怪异盒模型处理。
  特别需要说明的是这个属性现代的浏览器都是支持的，但IE家族只有IE8版本以上才支持，虽然现代浏览器支持box-sizing，但有些浏览器还是需要加上自己的前缀，Mozilla需要加上-moz-，Webkit内核需要加上-webkit-，Presto内核-o-,IE8-ms-，所以box-sizing兼容浏览器时需要加上各自的前缀：
``` css
  /*Content box*/
  Element {
     -moz-box-sizing: content-box;  /*Firefox3.5+*/
     -webkit-box-sizing: content-box; /*Safari3.2+*/
     -o-box-sizing: content-box; /*Opera9.6*/
     -ms-box-sizing: content-box; /*IE8*/
     box-sizing: content-box; /*W3C标准(IE9+，Safari5.1+,Chrome10.0+,Opera10.6+都符合box-sizing的w3c标准语法)*/
  }       
  /*Border box*/
  Element {
     -moz-box-sizing: border-box;  /*Firefox3.5+*/
     -webkit-box-sizing: border-box; /*Safari3.2+*/
     -o-box-sizing: border-box; /*Opera9.6*/
     -ms-box-sizing: border-box; /*IE8*/
     box-sizing: border-box; /*W3C标准(IE9+，Safari5.1+,Chrome10.0+,Opera10.6+都符合box-sizing的w3c标准语法)*/
  }
```
## 总结 
* 在综合分析和深刻理解盒模型之后，我们可以得出这样的结论：
1. 如果用户主题为ie8以上的现代浏览器，那么可以采用ie 的怪异模式来处理所有的盒模型，在boot等主流框架中也是用的这种。（最新，前端开发人员青睐的）
2. 而如果用户中确定有ie6以及ie7时，需要按照w3c的标准建议，对于有padding的固宽固高元素需要多些一层wrapper。（常用经典，但是不方便的）
3. 针对有宽高同时有padding或者边框的，将宽高的数值减去内间距以及边框的。（少用）

## 个人建议
* 总结中第二种方案是最稳妥的，也是目前主流网站所采用的方式。但是随着响应式布局以及w3c的不变更新优化，ie的传统模型将不断的会被更好的支持，那时将不用这么麻烦。  