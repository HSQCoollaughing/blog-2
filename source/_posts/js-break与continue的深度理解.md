---
title: js-break与continue的深度理解
date: 2016-12-11 17:28:38
categories:  js
---

如果你还缺乏对break与continue断点跳出循环的正确理解，请复制粘贴以下代码，思考得出答案（代码涉及标签语句的用法，如果不会的请自行百度）。

<!--more-->

---

``` javascript
    var k1 = 0;
	startFor:
	for (i = 0; i < 10; i++) {
			for (l = 0; l < 10; l++) {
				if (l == 5) {
					break;
					}
				k1++;
			}
	}
	var k2=0;
	startFor:
	for (i = 0; i < 10; i++) {
			for (l = 0; l < 10; l++) {
				if (l == 5) {
					break startFor;
				}
				k2++;
			}
	}
	var k3=0;
	startFor:
	for (i = 0; i < 10; i++) {
			for (l = 0; l < 10; l++) {
				if (l == 5) {
					continue;
				}
				k3++;
			}
	}
	var k4=0;
	startFor:
	for (i = 0; i < 10; i++) {
			for (l = 0; l < 10; l++) {
				if (l == 5) {
					continue startFor;
				}
				k4++;
			}
	}
	console.log("case1 break当前循环："+k1);//50
	console.log("case2 break外面循环："+k2);//5
	console.log("case3 continue当前循环："+k3);//90
	console.log("case4 continue外面循环："+k4);//50
``` 