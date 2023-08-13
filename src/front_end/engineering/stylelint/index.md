---
date: 2023-08-13
category: engineering
---

# Stylelint

> Reference:
> - [Docs](https://stylelint.io/user-guide/get-started)
> - [Migrating to 15.0.0](https://stylelint.io/migration-guide/to-15)

## Init

- 安装 `stylelint` 和 `stylelint-config-standard`。

```npm
npm i --save-dev stylelint stylelint-config-standard
```

- 创建并配置 `.stylelintrc.json`。

```json
{
  "extends": ["stylelint-config-standard"]
}
```

- 创建并配置 `.stylelintignore` 文件。

```.stylelintignore
# Editor
.idea

# Node
node_modules
.env.development
.env.production
package.json
package-lock.json

# Bundler
dist

# Git
.gitignore

# Browser
.browserslistrc

# CSS
postcss.config.js

# Webpack
webpack.config.js

# other
public
```

- 编写 npm 脚本。

```json
{
  "scripts": {
    "stylelint": "stylelint src/**/*.{css,scss,less}"
  }
}
```

## SCSS

- 安装 `postcss-scss` 处理 `scss` 文件。

```npm
npm i --save-dev postcss-scss
```

- 配置 `.stylelintrc.json`。

```json
{
  "overrides": [
    {
      "files": ["src/**/*.scss"],
      "customSyntax": "postcss-scss"
    }
  ]
}
```

## Less

- 安装 `postcss-less` 处理 `less` 文件。

```npm
npm i --save-dev postcss-less
```

- 配置 `.stylelintrc.json`。

```json
{
  "overrides": [
    {
      "files": ["src/**/*.less"],
      "customSyntax": "postcss-less"
    }
  ]
}
```

## Order

- 安装 `stylelint-order` 使 CSS 属性排序。

```npm
npm i --save-dev stylelint-order
```

- 配置 `.stylelintrc.json`。

```json
{
  "plugins": ["stylelint-order"],
  "rules": {
    "order/properties-order": [
      "width",
      "height"
    ]
  }
}
```

## Configuration Summary

:::code-tabs
@tab .stylelintrc.json
```json
{
  "extends": ["stylelint-config-standard"],
  "overrides": [
    {
      "files": ["src/**/*.scss"],
      "customSyntax": "postcss-scss"
    },
    {
      "files": ["src/**/*.less"],
      "customSyntax": "postcss-less"
    }
  ],
  "plugins": ["stylelint-order"],
  "rules": {
    "order/properties-order": [
      "width",
      "height"
    ]
  }
}
```

@tab .stylelintignore
```ignore
# Editor
.idea

# Node
node_modules
.env.development
.env.production
package.json
package-lock.json

# Bundler
dist

# Git
.gitignore

# Browser
.browserslistrc

# CSS
postcss.config.js

# Webpack
webpack.config.js

# other
public
```
:::
