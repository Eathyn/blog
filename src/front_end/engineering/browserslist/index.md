---
date: 2023-08-03
---

# Browserslist

> Reference
> - [Docs](https://github.com/browserslist/browserslist)
> - [Online Query](https://browsersl.ist/)
> - [Article](https://juejin.cn/post/7033765500228206622)
> - [Article](https://modernjs.dev/builder/en/guide/advanced/browserslist.html)

## Introduction

HTML、CSS 和 JavaScript 一直在不断发展和加入新特性，浏览器供应商可能会在新发布的浏览器版本中支持新特性，但是在老版本的浏览器中使用这些新特性会报错。为了解决这个问题，我们可以利用 PostCSS 和 Babel.js 等工具添加 polyfill。但是添加过多的 polyfill 会让最后的包体积变得很大，所以我们需要确认用户使用的浏览器版本，然后使用 browserslist 生成可以覆盖大部分用户的浏览器版本列表，将这个列表交给 PostCSS 和 Babel.js 等工具就可以将 polyfill 的数量最小化，最终的打包体积也可以最小化。

## Installation

```npm
npm i --save-dev browserslist
```

## Usage

- 创建 `.browserslistrc` 文件，写入查询语句。具体的配置要根据目标用户制定。

```.browserslist
> 0.1% in CN or last 2 versions or not dead
```

## Tool

- `npx browserslist` 查看查询语句返回的浏览器和浏览器版本。
- `npx update-browserslist-db@latest` 更新 `caniuse-lite` 的版本。

## Query Composition

- `or` / `,`：并集。
- `and`：交集。
- `not`：相对补。
