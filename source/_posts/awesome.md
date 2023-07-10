---
title: 🌈Awesome Software / Service
date: 2023-07-07
tags: [Software,Service,Awesome]
categories: Share
sticky: 99
# hide: true
---
分享一些好用的软件、服务和开源项目等。纯粹的分享与推荐，放心食用。
<!--more-->

{% note primary %}
开源项目仅提供代码仓库地址，若有官方网站亦会标明。内容排序方式为项目名称英文字母顺序。
{% endnote %}

# 宗旨
- 传递开源与分享精神
- 仅分享优秀项目
- 提高生活、工作效率

# 桌面应用

## DBeaver - 数据库工具
DBeaver Community是一个免费的跨平台数据库工具，面向开发人员、数据库管理员、分析师和所有使用数据的人。它支持所有流行的SQL数据库，如MySQL，MariaDB，PostgreSQL，SQLite，Apache Family等。
> 官方网站 [https://dbeaver.io/](https://dbeaver.io/)

程序员必备工具，之前一直使用Navicat的crack版，随着版权意识深入我心，开始使用DBeaver社区版，社区版功能即可满足大部分需求。

## Everything - 本地搜索引擎
Everything 是 Windows 上一款搜索引擎，它能够基于文件名快速定文件和文件夹位置。
> 官方网站 [https://www.voidtools.com/](https://www.voidtools.com/)

可以快速搜索本地任何角落，以便找到自己想要的内容，装机必备。Everything也衍生了一些工具，比如uTools中的本地搜索依赖Everything才能更高效的工作，又如[EverythingToolbar](https://github.com/srwi/EverythingToolbar)可以把Everything集成到任务栏中。

## Motrix - 下载工具
一款全能的下载工具。支持下载 HTTP、FTP、BT、磁力链接等资源。
> 官方网站 [https://motrix.app/](https://motrix.app/)
> Github [https://github.com/agalwood/Motrix](https://github.com/agalwood/Motrix)

这个软件内置了[Aria2 - 下载工具](#Aria2-下载工具)，如果懒得折腾aria2，用这个软件就够用了。如果有NAS设备，推荐使用Docker部署aria2服务，让下载这件事与PC解耦。

## Snipaste - 截图贴图工具
Snipaste 是一个简单但强大的贴图工具，同时也可以执行截屏、标注等功能。
> 官方网站 [https://zh.snipaste.com/](https://zh.snipaste.com/)

## TrafficMonitor - 硬件资源监控
一款用于Windows平台的网速监控悬浮窗软件，可以显示当前网速、CPU及内存利用率，支持嵌入到任务栏显示，支持更换皮肤、历史流量统计等功能。
> GitHub [https://github.com/zhongyang219/TrafficMonitor](https://github.com/zhongyang219/TrafficMonitor)

## TranslucentTB - 任务栏透明
一个轻量级的实用程序，使Windows任务栏半透明/透明。
> GitHub [https://github.com/TranslucentTB/TranslucentTB](https://github.com/TranslucentTB/TranslucentTB)

本来由于不支持Windows 11不打算推荐的，但是今天（2023.07.10）发布了2023.1版本，增加对了Windows 11的支持，虽迟但到！

## uTools - 效率工具平台
uTools 是一个极简、插件化的现代桌面软件，通过自由选配丰富的插件，打造得心应手的工具集合。
> 官方网站 [https://u.tools/](https://u.tools/)

对我来说已经是装机必备了，虽然有会员订阅服务，主要是提供了数据备份、多端同步等功能，但普通用户无需订阅即可使用大部分功能。

### 插件推荐
易翻翻译、ctool、颜色助手、OCR、文件批量重命名、hosts、二维码、本地搜索、文本代码对比、json编辑器、变量命名方式、正则编辑器、编码小助手、计算稿纸

## VS Code - 宇宙第一IDE
Visual Studio Code是一个轻量级但功能强大的源代码编辑器，可在桌面上运行，适用于Windows、macOS和Linux。它内置了对JavaScript，TypeScript和Node.js的支持，并拥有丰富的其他语言和运行时扩展生态系统（如C++，C#，Java，Python，PHP，Go，.NET）。通过这些[介绍视频](https://code.visualstudio.com/docs/getstarted/introvideos)开始您的VS Code之旅。
> 官方网站 [https://code.visualstudio.com/](https://code.visualstudio.com/)
> Github [https://github.com/Microsoft/vscode](https://github.com/Microsoft/vscode)

程序员必备工具，本博客的构建和文章的编写都是使用VSCode完成的。

<!-- # 移动应用 -->

# 服务应用

## Aria2 - 下载工具
Aria 2是一个轻量级的多协议和多源，跨平台下载工具，在命令行操作。它支持HTTP/HTTPS，FTP，SFTP，BitTorrent和Metalink。
> Github [https://github.com/aria2/aria2](https://github.com/aria2/aria2)

如果没有自己的服务器，建议使用[Motrix - 下载工具](#Motrix-下载工具)简单易用。
如果有自己的服务器，可以使用 `docker pull ghcr.io/p3terx/aria2-pro:latest` 获取镜像。推荐使用docker-compose部署。

## AriaNg - Aria2 WebUI
AriaNg，一个现代的Web前端，使aria2更容易使用。
> Github [https://github.com/mayswind/AriaNg](https://github.com/mayswind/AriaNg)

只是一个静态的网站，可以直接双击index.html运行，也可以托管到免费的平台中使用，如GitHub Pages、Vercel等。或者使用我托管在Netlify中的[AriaNg](https://aria.awaw.cc/)。

## RustDesk - 远程桌面
RustDesk 是一款可以平替 TeamViewer 的开源软件，旨在提供安全便捷的自建方案。
> 官方网站 [https://rustdesk.com/](https://rustdesk.com/)
> Github [https://github.com/rustdesk/rustdesk](https://github.com/rustdesk/rustdesk)

建议使用拥有公网IP的设备自建服务器（当然也可以通过Tailscale组网后使用），我的NAS只有公网IPv6，上行带宽30Mbps，使用体验比ToDesk免费版好很多，已经逐渐放弃使用ToDesk。推荐使用docker-compose部署。

## Tailscale - 打洞直连
Tailscale是一种VPN服务，可以让您在世界任何地方安全、轻松地访问您拥有的设备和应用程序。它使用开源WireGuard协议实现加密的点对点连接，这意味着只有您的专用网络上的设备才能相互通信。
> 官方网站 [https://tailscale.com](https://tailscale.com)
> Github [https://github.com/tailscale/tailscale](https://github.com/tailscale/tailscale)

当用手机或电脑处于无IPv6环境时，可以通过Tailscale来访问家中的NAS服务器。需要注意的是，组网的双方其中有一方的[NAT](https://www.zhihu.com/question/38729355)是Symmetric（对称型），就会打洞失败，流量会经转公共DERP服务器，速度很慢。同类型的产品还有Zerotier，个人感觉没有Tailscale好用。推荐使用docker-compose部署。
