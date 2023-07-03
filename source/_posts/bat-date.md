---
title: 批处理获取时间小于10点时补零
date: 2021-04-08
tags: [批处理]
categories: Development
---
使用 `%time:~0,2%` 获取时间时，当前时间若小于10点，获取到的时间不会自动补零，但是分钟和秒钟会补零，所以小时部分需要自己处理一下。
<!--more-->
### Code
```bash
@echo off
set hour=%time:~0,2%
if %hour% LSS 10 (
set "hour=0%time:~1,1%")
set date=%date:~0,4%-%date:~5,2%-%date:~8,2%T%hour%:%time:~3,2%:%time:~6,5%
echo %date%
pause
```
### Output
```text
2021-04-08T09:45:01.11
```
