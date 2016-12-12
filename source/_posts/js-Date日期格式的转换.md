---
title: js-Date日期格式的转换
date: 2016-12-12 23:29:07
categories:  js
---

js之Date类型的对象支持一些日期格式的转换，下面为你介绍你可能用到的一些日期转换方法

<!--more-->

---
 *
## js日期格式转换
* 字符串变时间
``` javascript
var　date=new date('yyyy-mm-dd')
``` 
可以直接从字符串转变为时间对象的格式有标准格式的
字符串的格式可以直接创建时间对象,格式通过正则验证，date对象可以直接通过大小比较早晚
``` javascript
var date=new Date('2012-12-12');
var date=new Date('2012,12,12');
var date=new Date('2012,12,12,12:12');
var date=new Date('2012,12,12,12:12:34');
``` 
* 对象变字符串
``` javascript
var date1=new Date();
var year=date1.getFullYear();
var mon=date1.getMonth()+1;
var day=date1.getDate();
var str2=year+","+mon+","+day+","+"18:05";
//截至时间的半小时以前  获取半小时之前的时间
var date2=new Date(str2).getTime()-1000*60*30;
var date11=date1.getTime();
console.log(date11<=date2);
``` 
参考文档：[w3c日期对象](http://www.w3school.com.cn/jsref/jsref_obj_date.asp)

## js日期转换方法
* 自定义的工具方法，支持转换日期对象为日期以及日期时间
``` javascript
function todatestr( datat) {
         var year = datat.getFullYear();
         var m = datat.getMonth() + 1 ;
         var da = datat.getDate();
         var str = year + "-" + m + "-" + da;
          return str;
}
function totimestr( datat) {
       var hours = datat.getHours();
       var min = datat.getMinutes();
       if (min < 10) {
                min = "0" + min;
       }
       var str = hours + ":" + min;
       return str;
}
```  

## java日期格式转换
* java自带封装好的转换工具
``` java
String createTime='2014-12-24';
DateFormat dd=new SimpleDateFormat("yyyy-MM-dd");
Date creatTime = dd.parse(createTime);
//时间转变为字符串：
Date date=new Date();
var df = new SimpleDateFormat("yyyy-MM-dd" );
String formatDate = df.format(date);
```  