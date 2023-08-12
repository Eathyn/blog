---
date: 2023-08-07
category: tool-common
---

# Tree Directory

> Reference
> - [GitHub: PSTree](https://github.com/santisq/PSTree)
> - [PowerShell Gallery: PSTree](https://www.powershellgallery.com/packages/PSTree)

## Introduction

- Windows terminal 可以通过 `tree` 命令打印目录结构，但是无法忽略某些目录，例如 `node_modules`、`dist` 等。
- 为 Windows terminal 安装 PSTree 模块代替 `tree` 命令，它可以提供很多 `tree` 命令没有的功能。

## Installation

```cmd
Install-Module -Name PSTree
```

## Usage

- 打印当前文件夹下的所有文件，排除 `node_modules`、`.idea` 和 `dist` 目录。

```cmd
Get-PSTree -Exclude *node_modules, *.idea, *dist
```
