---
title: html之table标签的基本使用
date: 2016-12-12 09:28:01
categories:  [html,web]
tags:  table
---

表格作为页面展现中一部分不可获取，尤其在后台管理界面中，我们对之既爱又恨。那么它有哪些样式需要控制呢,又有哪些你所不知道的。本文通过一个简单的table实例来帮你解析实现一个table表格实例所需要的基础知识。

<!--more-->

---

## 基本了解
1. 表格标题用caption标签，标头的用thead，  表格内容用tbody ，一个表格默认只有一个标题一个表格头 一个表格内容，标题标签的高度不算入table 的高度 ，表格的默认样式需要修正初始化
2. 一般情况下针对数据表格建议使用table标签，做好每个表格所需要的枚举数据项总数（如每页10条），做好分页以及意外数据处理，当然也可以用div模拟表格布局。
3. td默认会根据内容扩充的，而且布局不是固定布局，为了统一美化处理，需要对每一个单元格做限制单行高宽，如果必须为多行文本且限制高度，内部再加div高度，td本身写高度以及行高是无法限制的，如果不需要处理的采用自动拓展高度即可
4. 针对数据项的宽度可以采用百分比或者固定数值布局，需要根据不同数据项的需求采用合适的宽高以及样式，例如身份证号、日期等要给合适的宽度，而标题长字段的要给较大的宽度值等
5. 设置宽度只需要在数据项的名称设置一次即可，后面的表格内容布局会自动参考上面的比例
6. colspan为合并列，rowspan为合并行，在布局明显为表格而且有合并单元格时，建议用table实现，简约大方

## 代码实践
* html代码部分
``` bash 
<table class="tableDemo" >
	<caption >我是表格的标题</caption>
	<thead>
		<tr><th class="no">编号</th>
		<th class="name">姓名</th>
		<th class="idno">身份证号</th>
		<th class="desc">描述</th></tr>
	</thead>
	<tbody>
		<tr><td>001</td><td>李四赵武</td><td>131102199010242011</td><td>13110219901024201的v的的v的的v的的v的1</td></tr>
		<tr><td>002</td><td>张三</td><td>131102199010242011</td><td>13的1</td></tr>
        <tr><td>002</td><td>张三</td><td>131102199010242011</td><td>13的1</td></tr>
        <tr><td>002</td><td>张三</td><td>131102199010242011</td><td>13的1</td></tr>
        <tr><td>002</td><td>张三</td><td>131102199010242011</td><td>13的1</td></tr>
	</tbody>
</table>
``` 
* css代码部分 
``` css  
 *{
	margin: 0;
	padding: 0;
} 
.tableDemo {
	width: 800px;
	/*实际高度286px，如果不清楚实际高度可以不写*/
	/*height:251px;*/
	border: 1px solid grey;
	/*采用固定数据项的宽度决定布局*/
	table-layout: fixed;
	/*控制表格外间距*/
	border-spacing: 0;
	/* 设置合并边框*/
	border-collapse: collapse;
}
/*表格标题栏的样式*/
.tableDemo caption {
	height: 40px;
	line-height: 40px;
	font-size: 30px;
} 
/*每一行的数据项*/
.tableDemo tr {
	height: 40px;
	line-height: 40px;
}
.tableDemo tr th,
.tableDemo tr td {
	border: 1px solid grey;
}
/*table中的表格不能做多行超出隐藏  只能通过内部div的设置超出隐藏，这里直接设置内容为单行超出隐藏*/
.tableDemo tr td {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.tableDemo th {
	line-height: 40px;
	height: 40px;
}
/*针对各个数据项给不同的宽度*/
.tableDemo .no {
	width: 100px;
}
.tableDemo .name {
	width: 150px;
}
.tableDemo .idno {
	width: 250px;
} 
``` 
* 效果图如下 
![表格效果图](/blog/img/tabledemo.png)
