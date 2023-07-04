---
title: Steam免费游戏一键领取
date: 2019-07-22
tags: [Steam,Game]
categories: Share
---
这些都是Steam上免费的游戏，如果手动领取的话需要一个一个领取，这里提供一种简便的方法，一键批量把免费游戏添加到自己的库里。
<!--more-->
## 第一步

打开该链接： [https://store.steampowered.com/account/licenses/](https://store.steampowered.com/account/licenses/) ，然后登录自己的账号（或者自己进入Steam主页，登录网页版Steam，然后进入到 **主页 > 帐户 > 许可和产品序列号激活** 页面）。

## 第二步

按键盘F12，进入Console，粘贴下方代码后按Enter键执行代码。

```js
(function () {
  if (location.href.match(/^https:\/\/store\.steampowered\.com\/account\/licenses\/?$/) === null) {
    alert('请在Steam帐号明细页面运行这些代码: https://store.steampowered.com/account/licenses/');

    window.location = 'https://store.steampowered.com/account/licenses/';

    return;
  }

  var freePackages =
    [
      //本体
      39166,//Heroine's Quest: The Herald of Ragnarok
      13261,//RACE 07: Andy Priaulx Crowne Plaza Raceway
      32032,//Portal 2 Sixense Perceptual Pack
      59373,//Penumbra: Necrologue
      33694,//Grimm&Episode 1 - A Boy Learns What Fear Is
      88162,//Romance of the Three Kingdoms Maker
      36561,//Serena
      58514,//Voxelized
      117526,//Amnesia: Final Revelations

      //dlc
      85604,//RTK Maker - Face CG “RTK13” Set / 三国志ツクール顔登録素材 『三國志13』セット+シナリオ
      21478,//Free to Play免费本体
      50861,//Free to Play Soundtrack
      21473,//Prime World免费本体
      31538,//Prime World - Prime Machine
      32287,//Z3TA+ 2 - Polybius 8-bit Game Pack
      38085,//Saints Row IV - Reverse Cosplay Pack
      72261,//The Secret of Tremendous Corporation免费本体
      81026,//The Sources of Tremendous Corporation
      47333,//Aura Kingdom免费本体
      38820,//Aura Kingdom - Winter Gift
      69802,//Fuse免费本体
      60341,//Fuse - Free Brute Character Pack
      21416,//Elsword免费本体
      63207,//Time Tracer's DLC Package
      59253,//Vindictus - New User Package

      //软件&工具
      35063,//Star Swarm Stress Test
      74465,//Arma 3 Samples

      21101, //  DiRT Showdown Demo
      21102, //  Rayman Origins Demo
      21103, //  iBomber Defense Pacific  Demo
      21104, //  Men Of War: Assault Squad GOTY Demo
      21105, //  Bang Bang Racing Demo
      21106, //  Sine Mora Demo
      21107, //  Noitu Love 2 Devolution Demo
      21108, //  Waveform Demo
      21109, //  Ridge Racer™ Unbounded Demo
      21110, //  Hegemony Gold: Wars of Ancient Greece
      21111, //  Rocksmith Demo
      21113, //  Binary Domain Demo
      21114, //  Sniper Elite V2 Demo
      21115, //  Blades of Time Demo
      21117, //  A Valley Without Wind Demo
      21118, //  F1 2012 Demo
      21119, //  Magical Diary Demo
      21120, //  The Dream Machine Demo
      21121, //  Hell Yeah! Demo
      21122, //  A Virus Named Tom Demo
      21123, //  Splice Demo
      21124, //  Atooms to Moolecules
      21125, //  BeatBuddy Demo
      21126, //  DIVO
      21127, //  Imagine Earth Demo
      21128, //  MilitAnt
      21129, //  Plutonic Repulse
      21130, //  The White Laboratory Demo
      21131, //  Blackwell's Asylum
      21132, //  Magic 2014 Demo
      21133, //  Sid Meier's Civilization V: Gods & Kings Demo
      21134, //  Gratuitous Tank Battles Demo
      21135, //  Tiny and Big: Grandpa's Leftovers Demo
      21136, //  KungFu Strike Demo
      21137, //  Adventures of Shuggy Demo
      21138, //  E.Y.E: Divine Cybermancy Demo
      21139, //  Orcs Must Die! 2 Demo
      21140, //  The Book of Unwritten Tales Demo
      21141, //  Sleeping Dogs™ Demo
      21142, //  Damage Inc Demo
      21143, //  Gateways Demo
      21144, //  Football Manager 2013 Demo
      21145, //  XCOM: Enemy Unknown Demo
      21146, //  Transcripted Demo
      21147, //  Intrusion 2 Demo
      21148, //  Din's Curse Demo
      21149, //  Democracy 2 Demo
      21150, //  Ys Origin Demo
      21151, //  Ether Vapor Remaster Demo
    ];

  var ownedPackages = {};

  jQuery('.account_table a').each(function (i, el) {
    var match = el.href.match(/javascript:RemoveFreeLicense\( ([0-9]+), '/);

    if (match !== null) {
      ownedPackages[+match[1]] = true;
    }
  });

  var i = 0,
    loaded = 0,
    package = 0,
    total = freePackages.length,
    modal = ShowBlockingWaitDialog('努力执行中...',
      '请耐心等待，如果有错误请无视，请耐心等待脚本加载完毕');

  for (; i < total; i++) {
    package = freePackages[i];

    if (ownedPackages[package]) {
      loaded++;
      continue;
    }

    jQuery.post(
      '//store.steampowered.com/checkout/addfreelicense',
      {
        action: 'add_to_cart',
        sessionid: g_sessionID,
        subid: package
      }
    ).always(function () {
      loaded++;

      modal.Dismiss();

      if (loaded >= total) {
        location.reload();
      }
      else {
        modal = ShowBlockingWaitDialog('执行中...',
          '加载至 <b>' + loaded + '</b>/' + total + '.');
      }
    }
    );
  }
}());
```

## 第三步

Enjoy your free game！