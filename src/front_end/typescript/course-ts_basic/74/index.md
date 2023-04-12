---
date: 2023-01-06
category: TypeScript
tag:
  - Course - TypeScript Basic
---

# 74 为已有的 JS 文件提供类型声明 - 配置

## 配置环境

- 使用 `ts-loader` 处理 `.ts` 文件
- 根目录必须有 `tsconfig.json`

_package.json_

```json
{
  "scripts": {
    "dev": "webpack serve --mode development"
  },
  "devDependencies": {
    "html-webpack-plugin": "^5.5.0",
    "ts-loader": "^9.4.1",
    "typescript": "^4.8.3",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.1"
  }
}
```

_webpack.config.js_

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_moudles/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html')
    }),
  ],
}
```

## Refs

1. [为已有的 JS 文件提供类型声明 - 配置](https://www.bilibili.com/video/BV14Z4y1u7pi?p=74&vd_source=9b4e3dff7609ad29f13d886e715862ba)
