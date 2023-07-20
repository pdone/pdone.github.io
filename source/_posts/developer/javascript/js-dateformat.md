---
title: JavaScript获取时间并格式化
date: 2018-10-20
tags: [JS,DateFormat]
categories: Developer
---

最近在学习微信小程序，用到不少前端的知识，比如时间格式化。
<!--more-->

## Example

```js
function getDateNow() {
  var date = new Date();
  return date.format("yyyy-MM-dd HH:mm:ss.t w");
}
```

## Code

```js
/*
 *对Date的扩展，将 Date 转化为指定格式的String
 *月(M)、日(d)、小时(H)、分(m)、秒(s)、季度(q) 可以用 1-2个占位符，
 *年(y)可以用 1-4个占位符，毫秒(t) 1个占位符(3位的数字)
 *星期(w) 1个占位符
 *example
 *(new Date()).Format("yyyy-MM-dd HH:mm:ss.t w") ==> 2018-10-19 14:19:17.649 星期五
 */
Date.prototype.format = function(fmt) {
  var weekArr = {
    cn: new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"),
    en: new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
  };
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "H+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "t": ("00" + this.getMilliseconds()).slice( - 3),
    "w": weekArr.en[this.getDay()]
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
```