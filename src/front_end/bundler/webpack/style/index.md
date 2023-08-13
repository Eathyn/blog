---
date: 2023-07-20
category: webpack
---

# Style

## Introduction

- HTML 模板：使用 `html-webpack-plugin` 生成 html 文件，并自动引入打包文件和样式文件。
- 识别：使用 `style-loader`、`css-loader`、`less-loader`、`sass-loader` 识别和处理样式文件。
- PostCSS：使用 `postcss-loader` 解决浏览器兼容性等。参考 [文章](/blog/front_end/engineering/postcss/)
- Stylelint：使用 `stylelint` 发现样式中的错误。参考 [文章](/blog/front_end/engineering/stylelint/)。
- 提取：使用 `mini-css-extract-plugin` 将样式提取到单独的 CSS 文件。
- 优化和压缩：使用 `css-minimizer-webpack-plugin` 优化和压缩 CSS 文件。

## Configuration

- [源码](https://github.com/Eathyn/webpack-config/tree/style)

```javascript
/* wepack.config.js */

// 获取 webpack 的 mode
const index = process.argv.findIndex((arg) => arg === '--mode=development' || arg === '--mode=production')
if (index === -1) {
  throw new Error('package.json 中的 webpack 参数设置错误')
}
const mode = process.argv[index].split('=')[1]
// 将对应 mode 文件中的变量添加到 process.env 中
require('dotenv').config({ path: `.env.${mode}` })

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  entry: resolve(__dirname, 'src/main.js'),

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // development 模式下使用 'style-loader' 可以提高构建速度
          // https://webpack.js.org/plugins/mini-css-extract-plugin/#recommended
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: generatePlugins(devMode),

  optimization: {
    minimizer: [
      // 使用 cssnano 优化和压缩 CSS。默认只有在 production 模式下才运行
      new CssMinimizerPlugin(),
    ],
  },

  mode: devMode ? 'development' : 'production',
}

function generatePlugins(devMode) {
  const basePlugins = [
    // 依照指定的 html 模板生成 html 文件，并自动引入 CSS 和 JavaScript 文件
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html')
    }),
  ]

  const prodModePlugin = [
    // 将 CSS 提取到单独的 CSS 文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    })
  ]

  return devMode ? basePlugins : basePlugins.concat(prodModePlugin)
}
```

::: warning
使用 PostCSS 和 Stylelint 除了 `webpack.config.js`，还需要创建和配置其他文件。具体参见 [源码](https://github.com/Eathyn/webpack-config/tree/style)。
:::
