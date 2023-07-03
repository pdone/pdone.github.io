---
title: Cryptojs – JavaScript加密库
date: 2018-09-11
tags: [JS,加密]
categories: Development
---

### Import
```
npm install crypto-js
```
<!--more-->
### Usage
```js
//MD5加密
var md5Encrypt = CryptoJS.MD5("Message");
//SHA1加密
var sha1Encrypt = CryptoJS.SHA1("Message");
//SHA256加密
var sha256Encrypt = CryptoJS.SHA256("Message"); 
//AES加解密
var aesEncrypt = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
var aesDecrypt = CryptoJS.AES.decrypt(aesEncrypt, "Secret Passphrase");
//3DES加解密（不建议使用DES，这里展示3DES）
var 3desEncrypt = CryptoJS.TripleDES.encrypt("Message", "Secret Passphrase");
var 3desDecrypt = CryptoJS.TripleDES.decrypt(3desEncrypt, "Secret Passphrase");

//偏移量、加密模式、填充模式的应用
var message = "Message";
var key = CryptoJS.enc.Utf8.parse("123456"); //密钥
var iv = CryptoJS.enc.Utf8.parse("123456"); //偏移量
var aesEncrypt2 = CryptoJS.AES.encrypt(message ,key, {
iv: iv,
mode: CryptoJS.mode.CBC, //加密模式
padding: CryptoJS.pad.Pkcs7 //填充模式
});
aesEncrypt2 = encodeURIComponent(CryptoJS.enc.Base64.stringify(encryptResult.ciphertext)); //可转为Base64后再进行Url编码，也可直接使用十六进制
```

### Extend
1. 密钥和偏移量：一般情况下密钥为加密方与解密方双方约定好的，但如果长期使用同一密钥，对相同内容加密后的结果一致，容易被找出规律。所以，可以在双方交互时添加一个参数——偏移量，偏移量明文传递，并且每次请求都不同，但在一次交互过程中，双方使用同一偏移量，这样就可以使加密相同内容时结果每次都不同，间接提高安全性。
2. 加密模式：电码本模式（Electronic Codebook Book (ECB)）；密码分组链接模式（Cipher Block Chaining (CBC)）；计算器模式（Counter (CTR)）；密码反馈模式（Cipher FeedBack (CFB)）；输出反馈模式（Output FeedBack (OFB)）。ECB模式下偏移量不生效。具体各种模式的原理这里不再描述（[参考资料1](https://www.cnblogs.com/starwolf/p/3365834.html)）。
3. 填充模式：.NET和Java中并不完全通用，经过与安卓开发的同事踩坑与测试后，发现None和ISO10126两种填充模式，在两个平台是通用的。理论上PKCS7/PKCS5应该也是通用的（[参考资料2](http://www.users.zetnet.co.uk/hopwood/crypto/scan/cs.html#pad_PKCSPadding)/[参考资料3](https://www.cnblogs.com/midea0978/articles/1437257.html)）。
4. 编码格式：之前做项目时因为编码的问题耽误了不少时间。
5. 没有绝对的安全。

### 相关项目
- Google项目地址：[https://code.google.com/archive/p/crypto-js/](https://code.google.com/archive/p/crypto-js/)
- npm项目地址：[https://www.npmjs.com/package/crypto-j](https://www.npmjs.com/package/crypto-j)
- GitHub项目地址：[https://github.com/brix/crypto-js](https://github.com/brix/crypto-js)
