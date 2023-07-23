---
date: 2023-07-20
---

# Style

## CSS

### 安装

```npm
npm i --save-dev css-loader style-loader
```

- `css-loader`：将 CSS 文件编译为 webpack 能识别的模块。
- `style-loader`：创建 style 标签放置样式。

### 配置

::: code-tabs
@tab src/main.js
```js
// 将 CSS 文件导入入口文件（entry）
import './style/css-test.css'
```

@tab webpack.config.js
```js
// 配置规则
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
```
:::

## Less

### 安装

```npm
npm i --save-dev less less-loader

npm i --save-dev css-loader style-loader
```

- `less-loader`：将 less 编译为 CSS。

### 配置

::: code-tabs
@tab main.js
```js
// 将 less 文件导入入口文件（entry）
import './style/less-test.less'
```

@tab webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
}
```
:::
