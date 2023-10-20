---
date: 2023-10-20
category: Git
---

# Switch

## create and switch to new branch

```bash
git switch -c <new_branch>
```

## create local branch and point to remote branch

> Ref: [create local branch and point to remote branch](https://stackoverflow.com/a/10317152)

- 查看源端的所有分支：

```bash
git branch --all
```

- 创建本地分支，并将本地分支指向远端分支：

```bash
git switch -c <local_branch> origin/<remote_branch>
# or
git checkout -b <local_branch> origin/<remote_branch>
```
