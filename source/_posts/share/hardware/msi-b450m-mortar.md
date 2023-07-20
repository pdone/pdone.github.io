---
title: 微星B450M MORTAR主板PCI_E3接口无法识别硬件解决方法
date: 2019-02-17
tags: [PC,主板,PCI_E]
categories: [Share]
---

博主购买的微星B450M MORTAR主板，由于安装显卡后会挡住PCI_E2接口，所以无线网卡(Intel 9260AC)只能插PCI_E3接口上，但是一直无法识别出来，在微星社区咨询后发现已经有人反馈过这个问题，帖子中官方人员回复：
<!--more-->

>1. 主板的PCIE 插槽必须有共享LANES的状况
>2. PCIE CARD 本身没有依照规范将Prsnt 1(A1)#和Prsnt 2＃(B17)短接。

随后官方发布了B450M MORTAR新BIOS固件，版本号7B89v14，更新到最新BIOS后，进`BIOS` - `setting` - `advanced` - `PCI SUBsystem setting`, 找到`PCIe x1 slot switch` 改成`PCIE_3` (默认为`PCIE_2` )，然后插在PCI-E_E3上的无线网卡就可以正常被识别出来啦。B450M MORTAR Titanium版本的主板也同样适用该方法。

> 微星社区：[http://forum-sc.msi.com/index.php?topic=5308.14](http://forum-sc.msi.com/index.php?topic=5308.14)