---
title: 用Python爬 历史的今天 数据
date: 2018-11-29
tags: [Python,reptile]
categories: [Developer]
---
刚开始学习Python，试着写了一些东西，发现Python确实是非常容易上手，代码十分简短，并且有很多第三方库可以使用，同样的一种操作用别的语言可能需要10行代码，Python可能只要1行就能实现。

<!--more--> 

我这里爬的是这个网站 [www.lssdjt.com](www.lssdjt.com)，类似的网站还有很多。由于我也是初学者，所以注释写的比代码多。

## Code

```py
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from urllib import request
from bs4 import BeautifulSoup

# 初始化第一条要查的url
startUrl = "http://www.lssdjt.com/11/29"

# 打开一个txt用来保存爬到的数据
pageFile = open('historyTodayData.txt', 'w', encoding='utf-8')

# 获取数据 并返回下一天的url
def getdata(url):
    # 请求url
    page = request.urlopen(url)
    # 获取数据流
    pageStream = page.read()
    # utf8解码
    pageHtml = pageStream.decode('utf-8')
    # 把页面转换成BeautifulSoup对象 具体使用方法 参考文末链接里的文档
    soup = BeautifulSoup(pageHtml, "html.parser")
    nextUrlClass = soup.find('ul', {'class': 'bot'}).find('li', {'class': 'r'})
    next_url = nextUrlClass.a['href']
    # print(next_url)
    links = soup.find_all("a", class_="screenshot")
    for link in links:
        # 微信小程序云开发提供的数据库是JSON数据库  可以直接导入JSON文件或者CSV文件  这里把内容整理成CSV格式的方便导入云数据库
        # title,date,month,day  导入云数据库时微信会自动给每条数据生成_id
        print(link.i.string, link.em.string, link.em.string.split('年')[1].replace('月', ' ').replace('日', ''))
        # 这里把数据行整理成我需要的格式
        tempStrLine = link.i.string+' '+link.em.string+' ' + link.em.string.split('年')[1].replace('月', ' ').replace('日', '') + '\n'
        # 这里开始把每行数据写到文件里
        pageFile.writelines(tempStrLine)
    return next_url

# 循环365次
for _ in range(365):
    # 递归调用获取数据方法
    startUrl = getdata(startUrl)

# 关闭文件
pageFile.close()
```

爬完的数据长下面这个样子，大概有一万多行，把列头title,date,month,day添加到第一行，文件扩展名改为csv就可以直接导入微信小程序云开发提供的数据库中了。

![](/img/article/python-historytoday/1.png)
## 参考内容
[BeautifulSoup中文文档](https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/index.html)