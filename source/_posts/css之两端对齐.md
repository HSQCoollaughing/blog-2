---
title: css之两端对齐
date: 2016-12-12 09:26:02
categories: css

---

引言 ：文本内容总是左对齐，显得呆板，试试样式的两端对齐吧。

---

<!--more-->

## 探索过程

浏览器参照基准：Firefox4 and Later, Chrome5 and Later, Safari5 and Later, Opera10.53 and Later, IE5.5 and Later.两端对齐方案基于 text-align:justify 及 text-align-last:justify 实现. 
 
* IE实现 :justify最先是作为IE私有属性实现 
> div{
text-align:justify;
text-align-last:justify;
}  
   
* Firefox实现: text-align-last 在Firefox12-17下仍处理实验支持阶段，需加前缀 -moz-
>div{
text-align:justify;
-moz-text-align-last:justify;
}

* Chrome, Safari, Opera实现
>div{
overflow:hidden;
height:19px;
text-align:justify;
}
div:after{
display:inline-block;
content:'';
overflow:hidden;
width:100%;
height:0;
}

* 总结    
Chrome23, Safari5.1.7, Opera12.11 不支持 text-align-last, 但支持 text-align 的 jsutify, 所以这里可以变通实现单行文本两端对齐对齐，我们知道text-align:justify 不处理块内的最后一行文本（包括块内仅有一行文本的情况，这时既是第一行也是最后一行）及被强制打断的行的两端对齐，但会处理除此之外的其它行，所以只需要将这里的单行变成多行即可，那么我们可以使用伪对象的方式派生出新行，这样不需要额外处理html代码，然后再将派生出的新行隐藏

## 最终成果

``` css
//以下代码亲测可用，只要浏览器支持伪元素即可 
.text-justify{
text-align:justify;
text-align-last:justify;
}
.text-justify:after{
display:inline-block;
content:'';
width:100%;
}
```