---
title: 最常用的 35 个 Git 命令
date: 2021-05-21
tags: [Git]
categories: Developer
---

不管你是新手还是经验丰富的开发人员，都需要使用源代码管理。因此很大几率上你会选择使用Git来管理源代码。

要发挥Git的全部潜力，我们需要了解Git命令。在本文中，你将学到最有用的一些Git命令，掌握这些Git命令将帮助你提升编码水平。

<!--more-->

本Git命令指南共分为三个部分：基础命令，进阶命令和高阶Git命令。

## 基础Git命令

在这个部分中，我们要学习的是一些非常基础的Git命令。这些基础的Git命令是学习其他进阶命令的基础。

下面请看这9个基础的Git命令。

### 1. git config
`git config`命令非常有用。尤其是在你第一次使用Git或刚安装新的Git时。此命令可设置身份——Name和Email地址。并且每次提交时会使用此信息。

```bash
$ git config --global user.name "Your name"  

$ git config --global user.email "Your email"
```

### 2. git version
顾名思义，它会检查你使用的是哪个版本的Git。目前，截至编写本指南时，Git for Windows的最新版本是2.31.1。它发布于2021年3月27日。

```bash
$ git version
```

### 3. git init
这可能是你在Git中启动新项目所使用的第一个命令。此命令将创建一个空白的新存储库，然后你可以将源代码存储在此存储库中。

```bash
$ git init
```

或者，你也可以在`git init`命令中使用存储库名称。

```bash
$ git init <your repository name>
```

### 4. git clone
`git clone`命令将使用现有的存储库进行复制。`git init`和`git clone`之间有一个主要区别。

在你需要在现有的存储库上进行复制时，使用`git clone`。`git clone`命令首先在内部使用`git init`命令，然后检出所有内容。

```bash
git clone <your project URL>
```

### 5. git add
`git add`命令会把所有新的代码文件或修改后的文件添加到存储库中。此命令提供了添加文件和文件夹的不同选项。

**将单个文件添加到暂存区**

```bash
$ git add your_file_name
```

**此选项会将所有修改过的文件和新文件添加到暂存区**

```bash
$ git add *
```

### 6. git commit
这个Git命令是必不可少的。如果不能合理利用此命令，则可能会降低项目质量。

简而言之，`git commit`会将更改添加到本地存储库。

```bash
$ git commit -m "your useful commit message"
```

### 7. git status
使用此Git命令可以方便地查看有多少文件需要得到关注。你可以随时运行此命令。

此命令可以用来在`git add`和`git commit`之间查看状态。

```bash
$ git status
```

### 8. git branch
大多数时候，你的Git存储库中总会有多个分支。我们可以使用`git branch`命令有效地管理分支。Git分支有许多不同的选项和开关。

为简单起见，在这里我将重点介绍如何创建和删除Git分支。

**列出所有分支**
```bash
$ git branch
```
**创建新的分支**
```bash
$ git branch <branch_name>
```
**删除分支**
```bash
$ git branch -d <branch_name>
```

### 9. git checkout
此Git命令用于在分支之间进行切换。这是功能强大的git命令之一，堪称万能的瑞士军刀。

以下是切换到另一个分支的语法。
```bash
$ git checkout <branch_name>
```
此外，你也可以创建和检出到分支。
```bash
$ git checkout -b <your_new_branch_name>
```

## 进阶Git命令
掌握了基础的Git命令之后，我们就该学习进阶Git命令了。

如果你需要与团队合作，与他人共享代码，那么这些Git命令会非常有用。另外，还有一些类似`git log`命令，这些命令可帮助查看以前的提交历史。

### 10. git remote
`git remote`命令就像边界，如果你需要与外界连接，则必须使用`git remote`命令。此命令会将你的本地存储库连接到远程。

```bash
$ git remote add <shortname> <url>
```

**举例**
```bash
$ git remote add origin https://dev.azure.com/aCompiler/_git/DemoProject
```

### 11. git push
（借助`git remote`命令）与远程存储库连接之后，就需要将更改推送到存储库。

```bash
$ git push -u <short_name> <your_branch_name>
```

**举例**
```bash
$ git push -u origin feature_branch
```

### 12. git push --set-upstream
在使用`git push`之前，我们应该先设置好`origin`和`upstream`。下面是设置`upstream`的命令。

```bash
$ git push --set-upstream <short_name> <branch_name>
```

**举例**
```bash
$ git push --set-upstream origin feature_branch
```

### 13. git fetch
当需要下载其他团队成员的更改时，就得使用`git fetch`。

此命令会下载有关提交、引用等的所有信息，因此你可以在将这些更改应用于本地存储库之前对其进行检查。

```bash
$ git fetch
```

### 14. git pull
`git pull`命令下载内容（而不是元数据），并立即用最新的内容更新本地存储库。

```bash
$ git pull <remote_url>
```

### 15. git stash
此git命令会临时存储已修改的文件。你可以使用以下Git命令处理`stash`工作。

```bash
$ git stash
```

可以使用以下命令查看所有`stash`
```bash
$ git stash list
```

如果你需要应用`stash`到分支，那就使用`apply`
```bash
$ git stash apply
```

### 16. git log
在`git log`的帮助下，你可以看到所有之前的提交，并且最近的提交出现在最前面。

```bash
$ git log
```

默认情况下，它将显示当前已检出分支的所有提交，但是你可以强制通过所有选项来查看所有分支的所有提交。
```bash
$ git log --all
```

### 17. git shortlog
`git shortlog`命令会显示来自`git log`命令的摘要。如果你只对简短的摘要感兴趣，那么此命令就非常有用了。

这个命令有助于查看谁处理了什么，因为它对作者及其提交进行了分组。
```bash
$ git shortlog
```

### 18. git show
与`git log`相比，此命令将显示有关特定提交的详细信息。

```bash
$ git show <your_commit_hash>
```

### 19. git rm
有时你需要从代码库中删除文件，在这种情况下，可以使用`git rm`命令。

它可以从索引和工作目录中删除跟踪的文件。

```bash
$ git rm <your_file_name>
```

### 20. git merge
`git merge`可帮助将来自两个分支的更改集成到单个分支中。

```bash
$ git merge <branch_name>
```
此命令会将`<branch_name>`合并到当前你选择的分支中。

## 高阶Git命令
现在是时候再上一个层次了。在这个部分中，我们要学习的是高阶的Git命令。这些命令就需要花时间去练习了。

但是一旦掌握了这些命令的基础知识，使用起来不要太轻松哦。

### 21. git rebase
`git rebase`类似于`git merge`命令。它把两个分支集成到一个分支中，但有一个不一样的地方：`git rebase`命令将会重写提交记录。

当你有多个私有分支合并到单个分支时，应使用`git rebase`命令。它将使得提交历史成为线性的。

```bash
$ git rebase <base>
```

### 22. git bisect
`git bisect`命令可帮助查找糟糕的提交。

**启动git bisect**
```bash
$ git bisect start
```
**让git bisect知道什么是好的提交**
```bash
$ git bisect good a123
```
**让git bisect知道什么是糟糕的提交**
```bash
$ git bisect bad z123
```
通过`git bisect`，只要几分钟你就可以缩小问题代码的范围。

### 23. git cherry-pick
`git cherry-pick`是一个蛮有用的命令，允许你从任意分支中选择任意提交并将其应用于其他任意分支。

```bash
$ git cherry-pick <commit-hash>
```

`git cherry-pick`不会修改存储库的历史记录；相反，它会添加到历史记录。

### 24. git archive
`git archive`命令会把多个文件合并为单个文件。就好像`zip`实用程序一样，所以你可以提取存档文件以获取单个文件。

```bash
$ git archive --format zip HEAD > archive-HEAD.zip
```
它将创建当前修订的`zip`存档。

### 25. git pull --rebase
在大多数情况下，当你使用`git pull`时，你需要重新设置基准（并且不进行合并）。

此时，你就可以使用此选项。

```bash
$ git pull --rebase
```
这将帮助保持干净的历史记录。另外，还可以避免多次合并。

### 26. git blame
如果你需要逐行检查任意文件的内容，则需要使用`git blame`命令。它可以帮助确定是谁对文件进行了更改。

```bash
$ git blame <your_file_name>
```

### 27. git tag
在Git中，标签很有用，你可以使用它们来管理发布。你可以将`git tag`视为不会改变的分支。尤其是要公开发布的时候，则更为重要了。

```bash
$ git tag -a v1.0.0
```

### 28. git verify-commit
`git verify-commit`命令将检查`gpg`签名。GPG，GNU Privacy Guard，是sign文件中使用的工具，包含签名。

```bash
$ git verify-commit <commit>
```

### 29. git verify-tag
可以以同样的方式确认标签。

```bash
$ git verify-tag <tag>
```

### 30. git diff
大多数情况下，在提交或推送之前，你需要比较两个git文件或分支。用这个命令就方便多了。

**将工作目录与本地存储库进行比较**
```bash
$ git diff HEAD <filename>
```

**比较两个分支**
```bash
$ git diff <source branch> <target branch>
```

### 31. git citool
`git citool`是Git提交的图形化替代。

```bash
$ git citool
```

### 32. git mv
重命名git文件。接受两个参数，源文件名和目标文件名。

```bash
$ git mv <old-file-name> <new-file-name>
```

### 33. git clean
你可以使用`git clean`命令处理未跟踪的文件。可以使用此命令从工作目录中删除所有未跟踪的文件。如果要处理跟踪的文件，则需要使用`git reset`命令。

```bash
$ git clean
```

### 34. git help
Git中有许多命令，如果你需要其他命令的帮助，则可以随时在终端上使用`git help`。

```bash
$ git help <git_command>
```

### 35. git whatchanged
此命令的作用与`git log`相同，但为原始格式。并且由于历史原因，它也是git的一份子。

```bash
$ git whatchanged
```