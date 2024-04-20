---
date: 2024-04-20
---

# Ignore

## include

> Ref
> - [.gitignore exclude folder but include specific sub folder](https://stackoverflow.com/q/5533050/9863318)

有时候我们不想将一个文件夹添加到 Git，但又想将该文件夹下的子文件夹或子文件添加到 Git。

那么可以在 .gitignore 中这样配置：

```.gitignore
node_modules/*
!node_modules/webpack
```

这个配置表示不要将 node_modules 文件夹添加到 Git，但是把 node_modules 的子文件夹 webpack 添加到 Git。

我一般将这种配置用于分析库的源码，这种方式的好处有：
- 库和使用库的代码在同一个项目中，方便 debug；
- 库加入到 Git 中可以记录阅读源码的笔记。
