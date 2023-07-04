---
title: WinForm加载中窗体
date: 2020-04-15
tags: [.NET,async]
categories: Developer
---
最近项目中用有用到，就简单整了个，只有几行代码。

<!--more--> 

![预览图](https://fastly.jsdelivr.net/gh/pdone/static@latest/img/article/net-loading/1.gif)

## 调用示例

	public partial class Main : Form
	{
	    public Main()
	    {
	        InitializeComponent();
	    }
	
	    private void button1_Click(object sender, EventArgs e)
	    {
	        //构造函数参数说明：
	        //work: 需要在新线程中执行的任务
	        //msg: 执行完成提示信息（为空时不提示）
	        //openDir: 执行完成后自动打开指定目录（为空时不打开）                
	        Loading loading = new Loading(DoSomething, 执行完成);
	
	        //不show的话 可以当作后台线程执行任务来用
	        loading.ShowDialog();
	    }
	
	    public void DoSomething()
	    {
	        Thread.Sleep(3000);
	    }
	}

## 源代下载
### 百度云
[https://pan.baidu.com/s/1NzrZeNKqjlZxK__iXaGvwQ](https://pan.baidu.com/s/1NzrZeNKqjlZxK__iXaGvwQ)
> 提取码：npkt