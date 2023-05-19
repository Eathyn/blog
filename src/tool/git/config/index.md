---
date: 2023-05-09
category: Git
tag: configuraton
---

# Configuration

## Configuration Files

> reference:
> - Pro Git: p20-p21
> - Pro Git: p336
> - [git config](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-config)

`git config --list --show-origin` 命令可以找到所有 Git 配置文件。

### System

- 定义：配置文件适用于本系统下的所有用户和仓库。
- 命令：`git config --system`
- 配置文件的路径：`<Git的安装目录>/etc/gitconfig`

### Global

- 定义：配置文件适用于某个用户和他的所有仓库。
- 命令：`git config --global`
- 配置文件的路径：`C:/User/<username>/.gitconfig`

### Local

- 定义：配置文件适用于某个仓库。
- 命令：`git config --local`（--local 是默认参数）
- 配置文件的路径：`<仓库路径>/.git/config`

## Get a Config

`git config --get <name>` 可以获取某一个配置。例如：

```git
git config --get user.name
```

## Set a Config

`git config <name> <value>` 可以设置某一个配置。例如：

```git
git config user.name Eaven
```

## Get all Config

`git config --list` 可以获取所有配置。

## Delete a Config

`git config --unset <name>` 删除指定的配置。

## LF and CRLF

> Reference: [blog](http://kuanghy.github.io/2017/03/19/git-lf-or-crlf)

### 配置

- Unix 和 Linux 的换行符是 `0x0A(LF)`，Windows 的换行符是 `0x0D0A(CRLF)`。

- 配置 Git 的 `core.autocrlf` 和 `core.safecrlf` 可以解决上述问题：

```git
# 统一为 LF
git config --global core.autocrlf input
git config --global core.safecrlf false
```

- `core.autocrlf` 有三个值：
  - true: 提交时转换为 LF，检出时转换为 CRLF。
  - false: 提交和检出时均不转换。
  - input: 提交时转换为 LF，检出时不转换。

### 转换

- 在 Git Bash 中，使用 `dos2unix <file-path>` 可以将指定的文件的换行符全部转为 `LF`。
- 在 Git Bash 中，使用 `unix2dos <file-path>` 可以将指定的文件的换行符全部转为 `CRLF`。

## SafeCRLF

> Reference: [blog](http://kuanghy.github.io/2017/03/19/git-lf-or-crlf)

`core.safecrlf` 有三个值：
- true: 不允许提交包含混合换行符的文件。
- false: 允许提交包含混合换行符的文件
- warn: 提交包含混合换行符的文件时给出警告。

## Multiple SSH Keys

> Reference: [Using Multiple SSH Keys](https://gist.github.com/aprilmintacpineda/f101bf5fd34f1e6664497cf4b9b9345f)
