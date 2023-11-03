---
date: 2023-09-07
category: ESLint
---

# ESLint

## Set Up

> Reference:
> - [通过脚手架引入](https://eslint.org/docs/latest/use/getting-started#quick-start)
> - [手动引入](https://eslint.org/docs/latest/use/getting-started#manual-set-up)

- 通过脚手架引入 `ESLint`：

```npm
npm init @eslint/config
```

- 手动引入 `ESLint`：

```npm
npm install --save-dev eslint

# create and config .eslintrc.js file
```

## Configuration

> Reference: 
> - [Configuration Basis](https://eslint.org/docs/latest/use/getting-started#configuration)

### 错误级别

```JSON
{
  "rule": {
    "rule-name": ["error-level"]
  }
}
```

- `rule-name`：规则名，例如 `semi`, `quotes`。

- `error-level`：错误级别。
  - `off` / 0：不使用该规则。
  - `warn` / 1：使用该规则，违反该规则时进行警告。
  - `error` / 2：使用该规则，违反该规则时进行报错。

### 扩展规则

> Reference: [Extending Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files)

- `extends`：继承其他配置文件中的规则、插件和语言选项。

- 可以忽略 `eslint-config-` 前缀。例如：`airbnb` 相当于 `eslint-config-airbnb`。

```JSON
{
  "extends": "eslint:recommended"
}
```

- `"extends": "eslint:recommended"`：使用[列表](https://eslint.org/docs/latest/rules)中所有标记为 `recommended` 的规则。

## Concepts

> Reference: [Concepts](https://eslint.org/docs/latest/use/core-concepts)

- ESLint：帮助开发者找出和修复错误的代码。

- 规则（Rule）：代码需要满足的一系列条件。

- 配置文件（Configuration File）：项目中配置 ESLint 的文件。例如：`.eslintrc.json`。

- 可共享的配置（Sharable Configuration）：通过 npm 共享的配置。例如：`eslint-config-airbnb-base`。

- 插件（Plugin）：包含一系列自定义的规则、配置、处理器和环境。例如：`eslint-plugin-vue`。

- 解析器（Parser）：ESLint 使用 Espree 解析器将代码转化为 ESLint 可以识别的抽象语法树，Espree 兼容标准的 JavaScript 运行时和版本。对于插件中的自定义的规则，会使用特定的解析器解析语法。例如：在 `eslint-plugin-vue` 插件中使用 `vue-eslint-parser` 解析语法。

- 自定义处理器（Custom Processor）：在非 JavaScript 文件中提取出 JavaScript 代码供 ESLint 检验。例如：`eslint-plugin-markdown` 将 markdown 文件中的 JavaScript 代码提取出来供 ESLint 检验。

- 格式化器（Formatters）：控制校验结果的格式。

## Configure Language Options

> Reference: [Configure Language Options](https://eslint.org/docs/latest/use/configure/language-options)

- JavaScript 生态有多种运行时、版本、扩展和框架。它们有着不同的语法和全局变量。`.eslintrc.json` 中的 `env` 选项用于配置项目的环境。如下所示：

```json
{
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true
  }
}
```

- 如果将 `env.browser` 设置为 `false`，并在 JS 文件中使用了全局变量 `Window`，那么 ESLint 就会报错：`ESLint: 'Window' is not defined.(no-undef)`。

## Command Line Interface

### --ext

> Reference: [--ext](https://eslint.org/docs/latest/use/command-line-interface#--ext)

- `--ext` 的默认值为 `.js`，即 `npx eslint` 默认只识别 JS 文件。在 `--ext` 后面添加其他文件后缀可以让 ESLint 识别其他文件：

```bash
# 识别 js 和 vue 文件
npx eslint <file or dir> --ext .js,.vue
```
