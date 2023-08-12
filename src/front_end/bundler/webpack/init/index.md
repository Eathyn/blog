---
date: 2023-08-07
category: webpack
---

# Init

## @types/node

- 安装 `@types/node` 获取代码提示和校验。

```cmd
npm i --save-dev @types/node
```

## webpack

- 安装 `webpack` 和 `webpack-cli`

```cmd
npm i --save-dev webpack webpack-cli
```

## webpack config

- 创建 `/src/main.js` 文件。
- 创建 `/webpack.config.js` 文件。

```javascript
const { resolve } = require('path')
const isProductionMode = process.env.NODE_ENV === 'production'

module.exports = {
  entry: resolve(__dirname, 'src/main.js'),
  output: {
    path: resolve(__dirname, 'dist/js'),
    filename: 'main.js',
    clean: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  module: {},
  plugins: [],
  mode: isProductionMode ? 'production' : 'development',
}
```

- directory tree

```pre
├── .gitignore
├── package-lock.json
├── package.json
├── webpack.config.js
├── src
│   ├── main.js
│   └── js
│       └── index.js
└── dist
    └── js
        └── main.js
```
