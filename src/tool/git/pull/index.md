---
date: 2023-05-19
category: Git
tag: pull
---

# Pull

## 不指定 remote-shortname 和 branch

> Reference: Pro Git: p52

`[dev] git pull` 命令不指定 remote-shortname 和 branch 时，会进行以下操作：
1. fetch 远程仓库的所有分支。
2. 把远程仓库的 `dev` 分支合并到本地仓库的 `dev` 分支（假设本地分支的 `dev` 分支已经配置了追踪远程仓库的 `dev` 分支）。
