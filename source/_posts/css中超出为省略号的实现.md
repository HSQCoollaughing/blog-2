---
title: css中超出为省略号的实现
date: 2016-12-12 15:34:46
categories:  [css]
tags:  text-overflow
---

文本超出为省略号在很多位置都会用到，作为一个基本样式或者说原子类样式，我们需要知道其实现原理为什么。

<!--more-->

---

## 使用场景
文字内容过多，超出盒子模型的内容显示为省略号。提示：无论是单行还是多行文本，都需要设置高度，行高，超出不可见。（仅供参考）

    
 
## 文本单行省略

``` bash 
.demo{
white-space:nowrap;（超出不换行，默认为换行的）
text-overflow:ellipsis;（省略号样式）
//代码部分 完整部分
overflow: hidden;
white-space:nowrap;
text-overflow:ellipsis;
} 
```  






## 文本多行省略 (webkit)

``` bash 
white-space:normal;（超出宽度换行）
text-overflow: ellipsis; （省略号样式）
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;（行数）
display: -webkit-box;（展示盒子模型类型）
//代码部分(供拷贝)
overflow:hidden;
white-space:normal;
text-overflow: ellipsis; 
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
display: -webkit-box;
```  

## 其他方案

* 引入jq插件，待补充