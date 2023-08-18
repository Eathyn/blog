---
date: 2023-08-14
category: webpack
---

# Image

## Handle Images

> Reference
> - [处理图片资源](https://yk2012.github.io/sgg_webpack5/base/image.html)
> - [将图片打包到单独的文件夹](https://stackoverflow.com/a/65139595/9863318)

- `type` 设置为 `asset` 即可处理图片资源。
- `parser.dataUrlCondition.maxSize`：小于 10kB 的图片被 Base64 处理，打包到输出文件中，这样可以减少 HTTP 的请求数量。
- `generator.filename`：大于 10kB 的图片会被打包到单独的 image 文件夹中。

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 小于 10kB 的图片会被 Base64 处理
            maxSize: 10 * 1024,
          },
        },
        generator: {
          // 将图片打包到 image 文件夹
          filename: 'image/[hash][ext][query]',
        },
      },
    ],
  },
}
```

## Compress Images

> Reference
> - [ImageMinimizerWebpackPlugin](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/)

### imagemin - lossless

::: warning
imagemin 和相关的插件[作者已经停止维护](https://github.com/imagemin/imagemin/issues/385)。
:::

- install packages:

```npm
npm i --save-dev image-minimizer-webpack-plugin imagemin imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo
```

- configuration:

```javascript
// webpack.config.js
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { optimizationLevel: 3 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },
}
```

### imagemin - lossy

- install packages:

```npm
npm i --save-dev image-minimizer-webpack-plugin imagemin imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo
```

- configuration:

```javascript
// webpack.config.js
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { optimizationLevel: 3 }],
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
              ['mozjpeg', { quality: 20 }],
              ['pngquant'],
            ],
          },
        },
      }),
    ],
  },
}
```

### sharp - lossless

::: tip
`sharp` 目前还有维护，并且压缩速度是最快的，优先将 `sharp` 作为图片压缩方案。
:::

- install packages:

```npm
npm i --save-dev sharp
```

- configuration:

```javascript
module.exports = {
  optimization: {
    minimizer: [
      // extend default minimizer, i.e. `terser-webpack-plugin` for JS
      '...',
      // 压缩图片
      new ImageMinimizerPlugin({
        minimizer: [
          {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {
                jpeg: {
                  quality: 100,
                },
                webp: {
                  lossless: true,
                },
                avif: {
                  lossless: true,
                },
                png: {},
                gif: {},
              },
            },
          },
          {
            implementation: ImageMinimizerPlugin.svgoMinify,
            options: {
              encodeOptions: {
                multipass: true,
                plugins: ['preset-default'],
              },
            },
          },
        ]
      }),
    ],
  },
}
```

### sharp - lossy

- install packages:

```npm
npm i --save-dev sharp
```

- configuration:

```javascript
module.exports = {
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: [
          {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {},
            },
          },
          {
            implementation: ImageMinimizerPlugin.svgoMinify,
            options: {
              encodeOptions: {
                multipass: true,
                plugins: ['preset-default'],
              },
            },
          },
        ],
      }),
    ],
  },
}
```
