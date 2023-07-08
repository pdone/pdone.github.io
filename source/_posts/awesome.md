---
title: 🌈Awesome Software / Service
date: 2023-07-07
tags: [Software,Service,Awesome]
categories: Share
sticky: 99
# hide: true
---
分享一些好用的软件、服务和开源项目等。纯粹的分享与记录，无推广行为，放心食用。
<!--more-->

{% note primary %}
非开源项目提供官网地址，开源项目提供代码仓库地址
项目名称按照英文字母顺序或中文拼音顺序排序
{% endnote %}

# 宗旨
- 传递开源与分享精神
- 推广优秀项目
- 提高效率

# 桌面应用

## DBeaver - 数据库工具
DBeaver Community is a free cross-platform database tool for developers, database administrators, analysts, and everyone working with data. It supports all popular SQL databases like MySQL, MariaDB, PostgreSQL, SQLite, Apache Family, and more.
> 官方网站 [https://dbeaver.io/](https://dbeaver.io/)

程序员必备工具，之前一直使用Navicat的crack版，随着版权意识深入我心，开始使用DBeaver社区版，社区版功能即可满足大部分需求。

## Snipaste - 截图贴图工具
Snipaste 是一个简单但强大的贴图工具，同时也可以执行截屏、标注等功能。
> 官方网站 [https://zh.snipaste.com/](https://zh.snipaste.com/)

## TrafficMonitor - 硬件资源监控
一款用于Windows平台的网速监控悬浮窗软件，可以显示当前网速、CPU及内存利用率，支持嵌入到任务栏显示，支持更换皮肤、历史流量统计等功能。
> GitHub [https://github.com/zhongyang219/TrafficMonitor](https://github.com/zhongyang219/TrafficMonitor)

## uTools - 效率工具平台
uTools 是一个极简、插件化的现代桌面软件，通过自由选配丰富的插件，打造得心应手的工具集合。
> 官方网站 [https://u.tools/](https://u.tools/)

对我来说已经是装机必备了，虽然有会员订阅服务，主要是提供了数据备份、多端同步等功能，但普通用户无需订阅即可使用大部分功能。

### 插件推荐
- hosts切换
- 文本代码对比
- 编码小助手
- 本地搜索
- 颜色助手
- 易翻翻译
- ctool

## VS Code - 宇宙第一IDE
Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtimes (such as C++, C#, Java, Python, PHP, Go, .NET). Begin your journey with VS Code with these [introductory videos](https://code.visualstudio.com/docs/getstarted/introvideos).
> 官方网站 [https://code.visualstudio.com/](https://code.visualstudio.com/)
> Github [https://github.com/Microsoft/vscode/](https://github.com/Microsoft/vscode/)

程序员必备工具，本博客的构建和文章的编写都是使用VSCode完成的。

# 移动应用


# 服务应用

## Tailscale - 打洞直连
Tailscale是一种VPN服务，可以让您在世界任何地方安全、轻松地访问您拥有的设备和应用程序。它使用开源WireGuard协议实现加密的点对点连接，这意味着只有您的专用网络上的设备才能相互通信。
> 官方网站 [https://tailscale.com/](https://tailscale.com/)

当用手机或电脑处于无IPv6环境时，我会通过Tailscale来访问家中的NAS服务器。需要注意的是，组网的双方其中有一方的[NAT](https://www.zhihu.com/question/38729355)是Symmetric（对称型），就会打洞失败，流量会经转公共DERP服务器，速度很慢。同类型的产品还有Zerotier，个人感觉没有Tailscale好用。
