---
date: 2023-11-06
category: webpack
---

# Clean Cache

> Ref
> - [webpack default cache directory](https://webpack.js.org/configuration/cache/#cachecachedirectory)
> - [clean webpack cache](https://stackoverflow.com/a/70599560/9863318)

当 `cache.type` 设置为 `filesystem` 时，webpack 默认会将缓存文件存储到 `node_modules/.cache/webpack`。删除 `node_modules/.cache/webpack` 就可以清空缓存
