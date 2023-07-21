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

![](/img/article/awesome/dbeaver.png)

程序员必备工具，之前一直使用Navicat的crack版，随着版权意识深入我心，开始使用DBeaver社区版，社区版功能即可满足大部分需求。

<a class="btn" href="https://dbeaver.io/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>

## Everything - 本地搜索引擎
Everything 是 Windows 上一款搜索引擎，它能够基于文件名快速定文件和文件夹位置。

![](/img/article/awesome/everything.png)

可以快速搜索本地任何角落，以便找到自己想要的内容，装机必备。Everything也衍生了一些工具，比如uTools中的本地搜索依赖Everything才能更高效的工作，又如[EverythingToolbar](https://github.com/srwi/EverythingToolbar)可以把Everything集成到任务栏中。

<a class="btn" href="https://www.voidtools.com/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>

## Motrix - 下载工具
一款全能的下载工具。支持下载 HTTP、FTP、BT、磁力链接等资源。

![](/img/article/awesome/motrix.png)

这个软件内置了[Aria2 - 下载工具](#Aria2-下载工具)，如果懒得折腾aria2，用这个软件就够用了。如果有NAS设备，推荐使用Docker部署aria2服务，让下载这件事与PC解耦。

<span>
<a class="btn" href="https://motrix.app/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>
<a class="btn" href="https://github.com/agalwood/Motrix" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>
</span>

## Snipaste - 截图贴图工具
Snipaste 是一个简单但强大的贴图工具，同时也可以执行截屏、标注等功能。

![](/img/article/awesome/snipaste.png)

<a class="btn" href="https://zh.snipaste.com/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>

## TrafficMonitor - 硬件资源监控
一款用于Windows平台的网速监控悬浮窗软件，可以显示当前网速、CPU及内存利用率，支持嵌入到任务栏显示，支持更换皮肤、历史流量统计等功能。

![](/img/article/awesome/traffic-monitor1.gif)

![](/img/article/awesome/traffic-monitor2.png)

<a class="btn" href="https://github.com/zhongyang219/TrafficMonitor" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

## TranslucentTB - 任务栏透明
一个轻量级的实用程序，使Windows任务栏半透明/透明。

{% gi 2 2 %}
![](/img/article/awesome/translucent-tb1.png)

![](/img/article/awesome/translucent-tb2.png)
{% endgi %}

本来由于不支持Windows 11不打算推荐的，但是今天（2023.07.10）发布了2023.1版本，增加对了Windows 11的支持，虽迟但到！

<a class="btn" href="https://github.com/TranslucentTB/TranslucentTB" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

## uTools - 效率工具平台
uTools 是一个极简、插件化的现代桌面软件，通过自由选配丰富的插件，打造得心应手的工具集合。

{% dplayer "url=https://res.u-tools.cn/videos/utools3.mp4" "pic=https://res.u-tools.cn/website/video-play-1.png" "mutex=yes" "autoplay=no" %}

对我来说已经是装机必备了，虽然有会员订阅服务，主要是提供了数据备份、多端同步等功能，但普通用户无需订阅即可使用大部分功能。

<a class="btn" href="https://u.tools/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>

### 插件推荐
易翻翻译、ctool、颜色助手、OCR、文件批量重命名、hosts、二维码、本地搜索、文本代码对比、json编辑器、变量命名方式、正则编辑器、编码小助手、计算稿纸。

## VS Code - 代码编辑器
Visual Studio Code是一个轻量级但功能强大的源代码编辑器，可在桌面上运行，适用于Windows、macOS和Linux。它内置了对JavaScript，TypeScript和Node.js的支持，并拥有丰富的其他语言和运行时扩展生态系统（如C++，C#，Java，Python，PHP，Go，.NET）。通过这些[介绍视频](https://code.visualstudio.com/docs/getstarted/introvideos)开始您的VS Code之旅。

![](/img/article/awesome/vs-code.png)

程序员必备工具，本博客的构建和文章的编写都是使用VSCode完成的。

<span>
<a class="btn" href="https://code.visualstudio.com/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>
<a class="btn" href="https://github.com/Microsoft/vscode" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>
</span>

<!-- # 移动应用 -->

# 服务应用
服务应用是一种在后台运行的应用程序，通常在服务器或云平台上运行。与桌面应用程序和移动应用程序不同，服务应用程序通常不直接与用户交互，而是在后台执行某些任务。服务应用程序可以具有许多不同的功能，例如数据处理、文件传输、消息传递、安全认证等。服务应用程序通常使用 Web 技术（例如 RESTful API、SOAP、JSON 等）作为与其他应用程序和服务进行交互的接口。服务应用程序可以在云平台上扩展和自动扩展，以满足不断变化的需求。同时，服务应用程序也需要更多的开发和维护工作，因为它们需要考虑安全性、可伸缩性、可靠性等问题。(GPT-3.5)

推荐部署在云服务器上或有公网IP的NAS设备上，推荐使用常见的Linux发行版，如CentOS、Ubuntu、Debian。段末标注了推荐的部署方式，但部署方式不限于此，文中推荐的大部分服务都提供了跨平台、跨架构支持，更多部署方式请参考官方网站或GitHub。

## acme.sh - 自动化证书
一个实现ACME客户端协议的纯Unix shell脚本。

本站的证书由Let's Encrypt签发，因为托管在Vercel和Netlify中，服务商会定期进行续签，个人无需维护。

但个人服务器的证书就需要自己维护了，这时就要用到acme.sh。具体用法参考以下内容以及项目官网文档。

- [什么是acme协议？](https://www.ssl.com/zh-CN/常见问题/什么是acme协议/)
- [ACME v2证书自动化快速入门](https://blog.freessl.cn/acme-quick-start/)

<span>
<a class="btn" href="https://acme.sh/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>
<a class="btn" href="https://github.com/acmesh-official/acme.sh" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>
</span>

## Alist - 存储整合
一个支持多存储的文件列表程序，使用 Gin 和 Solidjs。

![](/img/article/awesome/alist.png)

⭐⭐⭐⭐⭐强烈推荐的一款存储整合服务，可以把各种存储整合在一个服务中，提供了友好的操作界面，支持超多网盘和其他存储方式、在线预览、离线下载、推送到Aira下载等，作为网上冲浪资深选手的你，如果还没用过是你的损失。`docker-compose`

<span>
<a class="btn" href="https://alist.nn.ci/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>
<a class="btn" href="https://github.com/alist-org/alist" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>
</span>

## aria2 - 下载工具
aria 2是一个轻量级的多协议和多源，跨平台下载工具，在命令行操作。它支持HTTP/HTTPS，FTP，SFTP，BitTorrent和Metalink。

如果没有自己的服务器，建议使用[Motrix - 下载工具](#Motrix-下载工具)简单易用。
如果有自己的服务器，可以使用 `docker pull ghcr.io/p3terx/aria2-pro:latest` 获取镜像。`docker-compose`

<a class="btn" href="https://github.com/aria2/aria2" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

## AriaNg - aria2 WebUI
AriaNg，一个现代的Web前端，使aria2更容易使用。

![](/img/article/awesome/aria-ng.png)

只是一个静态的网站，可以直接双击index.html运行，也可以托管到免费的平台中使用，如GitHub Pages、Vercel等。或者使用我托管在Netlify中的[AriaNg](https://aria.awaw.cc/)。`nginx`

<a class="btn" href="https://github.com/mayswind/AriaNg" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

## ddns-go - 动态域名解析
自动获得你的公网 IPv4 或 IPv6 地址，并解析到对应的域名服务。

![](/img/article/awesome/ddns-go.png)

一般家用宽带没有固定的公网IP，但目前大部分地区运行商都提供了动态公网IPv6，此时就需要动态域名解析了。实现原理很简单，定时获取本机公网IP，调用域名服务商API将值更新上去，但是这个项目已经很完善，没必要重复造轮子，完全满足需求。`docker-compose`

<a class="btn" href="https://github.com/jeessy2/ddns-go" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

## Heimdall - 导航页
应用程序仪表板和启动器。

![](/img/article/awesome/heimdall.png)

简约大气的导航页，且可以对一些支持的应用提供扩展功能，如监控Portainer容器状态、aria2下载任务状态等。`docker-compose`

<a class="btn" href="https://github.com/linuxserver/Heimdall" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

## RustDesk - 远程桌面
RustDesk 是一款可以平替 TeamViewer 的开源软件，旨在提供安全便捷的自建方案。

![](/img/article/awesome/rustdesk.png)

建议使用拥有公网IP的设备自建服务器（无公网IP可以通过[Tailscale - 异地组网](#Tailscale-异地组网)后使用），我的NAS只有公网IPv6，上行带宽30Mbps，使用体验比ToDesk免费版好很多，已经逐渐放弃使用ToDesk。`docker-compose`

<span>
<a class="btn" href="https://rustdesk.com/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>
<a class="btn" href="https://github.com/rustdesk/rustdesk" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>
</span>

## Tailscale - 异地组网
Tailscale是一种VPN服务，可以让您在世界任何地方安全、轻松地访问您拥有的设备和应用程序。它使用开源WireGuard协议实现加密的点对点连接，这意味着只有您的专用网络上的设备才能相互通信。

![](/img/article/awesome/tailscale.png)

当用手机或电脑处于无IPv6环境时，可以通过Tailscale来访问家中的NAS服务器。需要注意的是，组网的双方其中有一方的[NAT](https://www.zhihu.com/question/38729355)是Symmetric（对称型），就会打洞失败，流量会经转公共DERP服务器，速度很慢。同类型的产品还有Zerotier，个人感觉没有Tailscale好用。`docker-compose`

<span>
<a class="btn" href="https://tailscale.com/" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>
<a class="btn" href="https://github.com/tailscale/tailscale" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>
</span>

## Uptime Kuma - 服务状态监控
一个精美的自托管监控工具。

![](/img/article/awesome/uptime-kuma.jpg)

可以用于监控并记录一些可访问服务的运行状态，如docker容器、网站等，也可以用作导航页（Heimdall平替）。除了管理页面，还可以创建允许匿名访问的状态页面（[示例 - IPv6 Only](https://u.awaw.cc/status/me)）。`docker-compose`

<a class="btn" href="https://github.com/louislam/uptime-kuma" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

# 开源字体

## 阿里巴巴普惠体
阿里巴巴普惠体是一套全球永久免费正版商用的字体家族。

![](/img/article/awesome/alibaba-font.png)

阿里巴巴普惠体3.0为一套符合新国家标准GB18030-2022的简体中文字符集，包含GB18030-2022强制规范三个实现级别：实现级别1＋实现级别2标准规格的7字重、实现级别3标准规格的Regular 单一字重。7字重共194,460个全形汉字。包含拉丁字母、希腊字母、西里尔字母、标点符号。

<a class="btn" href="https://fonts.alibabagroup.com/#/font" title="访问官网"><i class='fa fa-home fa-lg'></i> 官方网站</a>

## Cascadia Code
This is a fun, new monospaced font that includes programming ligatures and is designed to enhance the modern look and feel of the Windows Terminal.
这是一种有趣的新型等宽字体，包含编程连字，旨在增强 Windows 终端的现代外观和感觉。

![](/img/article/awesome/cascadia-code2.png)

![](/img/article/awesome/cascadia-code3.png)

<a class="btn" href="https://github.com/microsoft/cascadia-code" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>

## 霞鹜文楷
An open-source Chinese font derived from Fontworks' Klee One.
一款开源中文字体，基于 FONTWORKS 出品字体 Klee One 衍生。

![](/img/article/awesome/lxgw1.png)

![](/img/article/awesome/lxgw2.png)

<a class="btn" href="https://github.com/lxgw/LxgwWenKai" title="访问代码仓库"><i class='fa fa-github fa-lg'></i> GitHub</a>