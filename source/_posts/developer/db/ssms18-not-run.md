---
title: SSMS18闪退解决方法
date: 2019-06-20
tags: 数据库
categories: Developer
---
这是已知问题，SSMS开发团队发布了新的官方解决方法。
<!--more-->

## 第一个方法

复制文件 
```text
Microsoft.VisualStudio.Shell.Interop.8.0.dll
```

将该DLL文件从目录
```text
C:\Program Files (x86)\Microsoft SQL Server Management Studio 18\Common7\IDE\PrivateAssemblies\Interop
```

复制到目录
```text
C:\Program Files (x86)\Microsoft SQL Server Management Studio 18\Common7\IDE\PublicAssemblies
```

## 第二个方法

删除文件

```text
C:\Program Files (x86)\Microsoft SQL Server Management Studio 18\Common7\IDE\CommonExtensions\Platform\Microsoft.VisualStudio.MinShell.Interop.pkgdef
```

## SSMS产品经理提供的方法

> 建议的解决方法是：
> 
> 1）关闭所有SSMS实例
> 
> 2）编辑ssms.exe.config
> 
> 3）删除具有以下文本的行（应该是第38行）：NgenBind_OptimizeNonGac enabled =“1”
> 
> 这与SSMS 18.x的下一版本中的改变相同

**注意！**ssms.exe.config文件的位置在文件夹中：
```text
C:\Program Files (x86)\Microsoft SQL Server Management Studio 18\Common7\IDE
```

## 相关链接
- [https://social.msdn.microsoft.com/Forums/sqlserver/en-US/76236e43-dc82-4586-bf7f-b01ff6374462/ssms2018-installed-but-will-not-run?forum=sqltools](https://social.msdn.microsoft.com/Forums/sqlserver/en-US/76236e43-dc82-4586-bf7f-b01ff6374462/ssms2018-installed-but-will-not-run?forum=sqltools)

- [https://feedback.azure.com/forums/908035-sql-server/suggestions/37502512-ssms2018-installed-but-will-not-run](https://feedback.azure.com/forums/908035-sql-server/suggestions/37502512-ssms2018-installed-but-will-not-run)