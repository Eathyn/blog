---
date: 2023-11-29
category: webpack
---

# filename and chunkFilename

> Reference
> - [filename](https://webpack.js.org/configuration/output/#outputfilename)
> - [chunk filename](https://webpack.js.org/configuration/output/#outputchunkfilename)

- `filename`: 为 initial chunk 设置输出后的文件名。
- `chunkFilename`: 为 non-initial chunk 设置输出后的文件名。

```js
// webpack.config.js
module.exports = {
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    chunkFilename: 'js/[name].[contenthash].chunk.js',
  },
}
```
