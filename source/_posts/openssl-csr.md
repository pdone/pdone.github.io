---
title: OpenSSL生成多域名CSR
date: 2018-09-15
tags: [SSL,CA,cert]
categories: [Developer]
---
首先要选择证书颁发机构(CA)，各大著名的证书颁发机构的**多域名**<sup>[1]</sup>、泛域名证书大多是需要收费的。目前发现[亚洲诚信(TrustAsia)](https://www.trustasia.com/)的免费证书支持双域名，而[Let's Encrypt](https://letsencrypt.org/)的免费证书既支持多域名，同时也支持泛域名。

<!--more-->

申请证书需要用到**CSR**<sup>[2]</sup>，直接在搜索引擎搜索CSR在线生成就可以很方便的生成，然后会得到一个CSR和一个KEY，前者是提交给证书颁发机构申请证书用的，后者是给服务器安装证书的时候用到的。

在实践过程中发现，网上大多数 CSR 生成工具都不支持填多个域名，熟悉OpenSSL的同学应该很容易就搞定了，但是对于像博主一样的小白来说，能有个工具再好不过了，这里分享一个支持多域名CSR的在线生成网站：[https://certificatetools.com/newui/](https://certificatetools.com/newui/)

CSR也可以使用[OpenSSL](https://www.openssl.org/)生成，动手能力强的同学可以自己用工具离线生成。

### 配置文件
	[ req ]
	default_md = sha256  
	prompt = no  
	req_extensions = req_ext  
	distinguished_name = req_distinguished_name
	[ req_distinguished_name ]
	0.commonName = pdoner.cn
	1.commonName = *.pdoner.cn
	countryName = CN
	stateOrProvinceName = Henan
	localityName = Zhengzhou
	organizationName = Pdone Technology
	[ req_ext ]
	keyUsage=critical,digitalSignature,keyEncipherment
	extendedKeyUsage=critical,serverAuth,clientAuth
	subjectAltName = @alt_names
	[ alt_names ]
	DNS.0 = pdoner.cn

**[1]**多域名证书，一说为SAN certificater(SubjectAltName Certificater)，一说为Unified Communications Certificater(这个是微软的说法)，已经迅速成为一种深受大家欢迎的证书，通过这种证书，可以方便部署Exchange， OCS 等经常有多个服务名的应用系统，此外也便于企业的网络管理人员对证书管理。

**[2]**CSR是Certificate Signing Request的英文缩写，即证书请求文件，也就是证书申请者在申请数字证书时由CSP(加密服务提供者)在生成私钥的同时也生成证书请求文件，证书申请者只要把CSR文件提交给证书颁发机构后，证书颁发机构使用其根证书私钥签名就生成了证书公钥文件，也就是颁发给用户的证书。

### 相关资料
- OpenSSL下载:[http://gnuwin32.sourceforge.net/packages/openssl.htm](http://gnuwin32.sourceforge.net/packages/openssl.htm)
- SSL证书在线工具：[https://csr.chinassl.net/](https://csr.chinassl.net/)
- 免费证书在线申请：[https://freessl.org/](https://freessl.org/)