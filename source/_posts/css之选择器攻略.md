---
title: css之选择器攻略
date: 2016-12-12 09:26:02
categories: css
tag: [css选择器]
---

引言 ： 很多小伙伴对css选择器表示不屑，觉得很简单没必要学习，其实你究竟了解多少呢？当面试官问你的时候，你能分出哪些是css3新增的选择器，他们兼容如何？又该如何处理呢？

<!--more-->

## css3选择器分类

* css3选择器在最新的版本中作为一个独立的模块分离了出来，而css选择器有哪些呢？又该如何分类，请看下图。
![css选择器分类图谱](/blog/img/cssfilter.png)

## 选择器攻略

1. 基本选择器
  id,class,*通配符选择器，复合选择器（选择器分组），无兼容问题
2. 层次选择器
后代选择器：e f;子选择器 e>f ;相邻兄弟选择器 e+f,只能选择之后的一个；通用兄弟选择器，e~f 之后的所有，卡可以选择多个；后面三个兼容ie7+
3.  目标伪类选择器
e:target 针对连接到的部分，兼容ie9+
4. 动态伪类
：linked,:visited,:active,:hover,:focus  其中active和focus 兼容8+支持
5. 语言伪类
:lang(en)可以针对不同语言，兼容ie8+
6. ui元素状态伪类
：checked,:enabled,:disabled ,兼容ie9+
7. 结构伪类
数量最多的一类，：first-child(css2),:last-child(css3),nth-child(n)筛选第几个，nth-last-child,nth-of-type(n),:root,:only-child,:empty ,等，兼容ie9+
8. 否定伪类
：not() 针对性排除，兼容ie9+
9. 伪元素
伪元素在新的规范中为双冒号，为了区别伪类，ie6-8只识别单冒号，写法不同，无兼容问题
10. 属性选择器
针对属性，以及属性值筛选，筛选符号为| 筛选出等于val以及以val-开始，^以val开始的，* 包含val,$以val结束，ie7+ 支持


## 解决方案 
* 汇总选择器的兼容性，慎重使用，比如针对ie8+ ，可以使用的有基本选择器，层次选择器，动态伪类选择器，语言伪类选择器，伪元素，属性选择器；针对ie6 建议只使用基本选择器以及简单的伪类、伪元素、后代选择器；针对现代浏览器，所有选择器可以放心使用。整体建议还是不要为了使用新的选择器而使用，要找到对应的使用场景，多使用基本选择器能避免低版本ie的适配问题。
* 使用适配的脚本文件，实现让ie6-8ie6-8支持属性选择器，伪类选择器和伪元素。具体的支持情况根据js库来决定
![css选择器分类图谱](/blog/img/jslib.png)
``` html
<!- -[if (gte IE 6)&(lte IE 8)]>
<script type="text/javascript" src="selectivizr.js"></script>
      <noscript><link rel="stylesheet" href="[fallback css]" /></noscript>
<![endif]- ->
```

* **注意事项**
1. Selectivizr自动检测最佳的JavaScript库，如果你JavaScript库都没有调用，则IE下的伪类是不起作用的。
2. 样式属性必须使用`<link>`标签，以`<style>`标签定义的CSS样式是不会被解析的。
3. 由于安全原因，样式文件需以域的形式调用，像是file:是不起作用的。
4. 此效果非动态的。一旦样式被应用就被固定了，DOM改变时不会映射过去的。
5. 如果JavaScript不可以，你可以使用`<noscript>`标签调用一个用以反馈提示的样式文件。
6. Selectivizr要想在IE下起作用，需要时标准模式，请检查您的页面头部是否有DTD 。