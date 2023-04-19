---
date: 2023-03-03
category: Git
---

# Diff

## --stage 参数

> [git diff --stage](https://www.learnenough.com/git-tutorial/getting_started/viewing_the_diff)

对比 last commit 和 **unstaged** changes。命令如下：

```git
git diff
```

对比 last commit 和 **staged** changes。命令如下：

```git 
git diff --staged
```

## 输出结果

> [output of diff command](https://www.atlassian.com/git/tutorials/saving-changes/git-diff)

输出结果如下：

```git
$ git diff --staged

[1]
diff --git a/bar.txt b/bar.txt

[2]
index 3b18e51..2c0b785 100644

[3]
--- a/bar.txt
+++ b/bar.txt

[4]
@@ -1 +1 @@

[5]
-hello world
+hi world
```

- [1] a/bar.txt: 最近 commit 的 bar.txt; b/bar.txt: 暂存区中的 bar.txt。
- [2] 元数据，一般不需要使用到。
- [3] 使用 `---` 标记 a/bar.txt；使用 `+++` 标记 b/bar.txt。
- [4] `-1`：a/bar.txt 从第一行开始修改，修改了一行；`+1`：b/bar.txt 从第一行开始修改，修改了一行。
- [5] 显示具体修改了哪些数据。

## Delta

- 使用 [delta](https://github.com/dandavison/delta) 工具可以让 diff 命令的输出更加直观。

- 在 `.gitconfig` 文件配置：

```.gitconfig
[core]
  pager = G:/delta-0.15.0-x86_64-pc-windows-msvc/delta.exe
[interactive]
  diffFilter = G:/delta-0.15.0-x86_64-pc-windows-msvc/delta.exe --color-only
[include]
	path = G:/delta/themes.gitconfig
[delta]
	features = mantis-shrimp
	side-by-side = true
[safe]
	directory = G:/blog
```

## Refs

- [beginner](https://www.atlassian.com/git/tutorials/saving-changes/git-diff)
- [beginner](https://www.freecodecamp.org/news/git-diff-command/)
- [Delta](https://github.com/dandavison/delta)
