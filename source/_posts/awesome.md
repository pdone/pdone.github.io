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
桌面应用是一种在桌面操作系统上运行的应用程序，例如 Windows、macOS 和 Linux。与 Web 应用程序和移动应用程序不同，桌面应用程序通常是使用本地编程语言和工具（例如 C++、C#、Java 或 Swift）开发的，并且可以直接在计算机上运行，而无需通过浏览器或移动设备。桌面应用程序可以具有许多不同的功能，例如文本编辑器、图形设计工具、游戏、办公套件、音频/视频编辑器等。与 Web 应用程序相比，桌面应用程序通常具有更高的性能和更好的用户体验，因为它们可以直接访问计算机的资源，例如文件系统、网络和硬件设备。同时，桌面应用程序也需要更多的开发和维护工作，因为它们需要考虑不同操作系统和硬件设备的兼容性问题。(GPT-3.5)

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
易翻翻译、ctool、颜色助手、OCR、文件批量重命名、hosts、二维码、本地搜索、文本代码对比、json编辑器、变量命名方式、正则编辑器、编码小助手、计算稿纸。

## VS Code - 宇宙第一IDE
Visual Studio Code是一个轻量级但功能强大的源代码编辑器，可在桌面上运行，适用于Windows、macOS和Linux。它内置了对JavaScript，TypeScript和Node.js的支持，并拥有丰富的其他语言和运行时扩展生态系统（如C++，C#，Java，Python，PHP，Go，.NET）。通过这些[介绍视频](https://code.visualstudio.com/docs/getstarted/introvideos)开始您的VS Code之旅。
> 官方网站 [https://code.visualstudio.com/](https://code.visualstudio.com/)
> Github [https://github.com/Microsoft/vscode](https://github.com/Microsoft/vscode)

程序员必备工具，本博客的构建和文章的编写都是使用VSCode完成的。

<!-- # 移动应用 -->

# 服务应用
服务应用是一种在后台运行的应用程序，通常在服务器或云平台上运行。与桌面应用程序和移动应用程序不同，服务应用程序通常不直接与用户交互，而是在后台执行某些任务。服务应用程序可以具有许多不同的功能，例如数据处理、文件传输、消息传递、安全认证等。服务应用程序通常使用 Web 技术（例如 RESTful API、SOAP、JSON 等）作为与其他应用程序和服务进行交互的接口。服务应用程序可以在云平台上扩展和自动扩展，以满足不断变化的需求。同时，服务应用程序也需要更多的开发和维护工作，因为它们需要考虑安全性、可伸缩性、可靠性等问题。(GPT-3.5)

推荐部署在云服务器上或有公网IP的NAS设备上，推荐使用常见的Linux发行版，如CentOS、Ubuntu、Debian。段末标注了推荐的部署方式，但部署方式不限于此，文中推荐的大部分服务都提供了跨平台、跨架构支持，更多部署方式请参考官方网站或GitHub。

## Alist - 存储整合
一个支持多存储的文件列表程序，使用 Gin 和 Solidjs。
> 官方网站 [https://alist.nn.ci/](https://alist.nn.ci/)
> Github [https://github.com/alist-org/alist](https://github.com/alist-org/alist)

⭐⭐⭐⭐⭐强烈推荐的一款存储整合服务，可以把各种存储整合在一个服务中，提供了友好的操作界面，支持超多网盘和其他存储方式、在线预览、离线下载、推送到Aira下载等，作为网上冲浪资深选手的你，如果还没用过是你的损失。`docker-compose`

## Aria2 - 下载工具
Aria 2是一个轻量级的多协议和多源，跨平台下载工具，在命令行操作。它支持HTTP/HTTPS，FTP，SFTP，BitTorrent和Metalink。
> Github [https://github.com/aria2/aria2](https://github.com/aria2/aria2)

如果没有自己的服务器，建议使用[Motrix - 下载工具](#Motrix-下载工具)简单易用。
如果有自己的服务器，可以使用 `docker pull ghcr.io/p3terx/aria2-pro:latest` 获取镜像。`docker-compose`

## AriaNg - Aria2 WebUI
AriaNg，一个现代的Web前端，使aria2更容易使用。
> Github [https://github.com/mayswind/AriaNg](https://github.com/mayswind/AriaNg)

只是一个静态的网站，可以直接双击index.html运行，也可以托管到免费的平台中使用，如GitHub Pages、Vercel等。或者使用我托管在Netlify中的[AriaNg](https://aria.awaw.cc/)。`nginx`

## ddns-go - 动态域名解析
自动获得你的公网 IPv4 或 IPv6 地址，并解析到对应的域名服务。
> Github [https://github.com/jeessy2/ddns-go](https://github.com/jeessy2/ddns-go)

一般家用宽带没有固定的公网IP，但目前大部分地区运行商都提供了动态公网IPv6，此时就需要动态域名解析了。实现原理很简单，定时获取本机公网IP，调用域名服务商API将值更新上去，但是这个项目已经很完善，没必要重复造轮子，完全满足需求。`docker-compose`

## Heimdall - 导航页
应用程序仪表板和启动器。
> Github [https://github.com/linuxserver/Heimdall](https://github.com/linuxserver/Heimdall)

简约大气的导航页，且可以对一些支持的应用提供扩展功能，如监控Portainer容器状态、aria2下载任务状态等。`docker-compose`

## RustDesk - 远程桌面
RustDesk 是一款可以平替 TeamViewer 的开源软件，旨在提供安全便捷的自建方案。
> 官方网站 [https://rustdesk.com/](https://rustdesk.com/)
> Github [https://github.com/rustdesk/rustdesk](https://github.com/rustdesk/rustdesk)
> Github [https://github.com/rustdesk/rustdesk-server](https://github.com/rustdesk/rustdesk-server)

建议使用拥有公网IP的设备自建服务器（无公网IP可以通过[Tailscale - 异地组网](#Tailscale-异地组网)后使用），我的NAS只有公网IPv6，上行带宽30Mbps，使用体验比ToDesk免费版好很多，已经逐渐放弃使用ToDesk。`docker-compose`

## Tailscale - 异地组网
Tailscale是一种VPN服务，可以让您在世界任何地方安全、轻松地访问您拥有的设备和应用程序。它使用开源WireGuard协议实现加密的点对点连接，这意味着只有您的专用网络上的设备才能相互通信。
> 官方网站 [https://tailscale.com](https://tailscale.com)
> Github [https://github.com/tailscale/tailscale](https://github.com/tailscale/tailscale)

当用手机或电脑处于无IPv6环境时，可以通过Tailscale来访问家中的NAS服务器。需要注意的是，组网的双方其中有一方的[NAT](https://www.zhihu.com/question/38729355)是Symmetric（对称型），就会打洞失败，流量会经转公共DERP服务器，速度很慢。同类型的产品还有Zerotier，个人感觉没有Tailscale好用。`docker-compose`

## Uptime Kuma - 服务状态监控
一个精美的自托管监控工具。
> Github [https://github.com/louislam/uptime-kuma](https://github.com/louislam/uptime-kuma)

可以用于监控并记录一些可访问服务的运行状态，如docker容器、网站等，也可以用作导航页（Heimdall平替）。除了管理页面，还可以创建允许匿名访问的状态页面（[示例 - IPv6 Only](https://u.awaw.cc/status/me)）。`docker-compose`
