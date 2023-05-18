---
date: 2023-05-17
category: Git
tag: log
---

# Log

## --oneline

以一行的格式显示提交历史

## --graph

以图的方式显示提交历史

## --all

显示所有的分支的提交历史

## --since & --until

- `git log --since="yesterday"`：显示今天的 commit

- `git log --since="2023-05-17" --until="2023-05-18"`：显示 2023-05-18 的 commit

## --author

- `git log --author='<name>'`：显示指定成员的 commit
