---
date: 2023-09-11
category: Prettier
---

# Prettier

## Prettier vs. Linter

> Reference: [Prettier vs. Linters](https://prettier.io/docs/en/comparison)

- Linter 有两类规则，一类是代码质量的规则，用于发现代码中的错误，这是 Linter 的核心。另一类是代码格式化规则，这部分可以使用 Prettier 替代。

## 安装与配置 

### Prettier

> Reference:
> - [prettier install](https://prettier.io/docs/en/install)
> - [--save-exact](https://stackoverflow.com/a/64507176)

- 安装 Prettier。注意要使用 `--save-exact`：

```npm
npm i --save-dev --save-exact prettier
```

- 创建并配置 `.prettierrc.json` 文件：

```json
{
  "semi": false,
  "singleQuote": true,
  "singleAttributePerLine": true
}
```

- 创建并配置 `.prettierignore` 文件：
  - 使用 [gitignore 语法](https://git-scm.com/docs/gitignore#_pattern_format)。
  - 默认忽略 .git 文件夹和 node_modules 文件夹。
  - 使用 `prettier-ignore` 忽略一部分文件。

### ESLint

> Reference: [Getting Started with ESLint](https://eslint.org/docs/latest/use/getting-started)

- 安装 ESLint：

```npm
npm init @eslint/config
```

### eslint-config-prettier

> Reference: [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

- `eslint-config-prettier` 的作用是关闭 ESLint 中不必要的和与 Prettier 冲突的规则。

- 安装 `eslint-config-prettier`：

```npm
npm install --save-dev eslint-config-prettier
```

- 配置 `.eslintrc.json`，注意要将 `prettier` 放在最后：

```json {4}
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```

### eslint-plugin-prettier

> Reference: [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

- `eslint-plugin-prettier` 的作用是将 Prettier 作为 ESLint 的规则，开发者可以在 IDE 上实时看到 Prettier 抛出的错误。

- 安装 `eslint-plugin-prettier`：

```npm
npm install --save-dev eslint-plugin-prettier
```

- 配置 `.eslintrc.json`：

```json
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### Git Hooks

> Reference: [Git Hooks](https://prettier.io/docs/en/install#git-hooks)

- 提交之前对暂存区中的文件执行 ESLint 和 Prettier。

- 安装 `husky` 和 `lint-staged`：

```npm
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

- 配置 `pre-commit` 钩子。注意 `ESLint` 必须放在 `Prettier` 之前：

```json
{
  "lint-staged": {
    "src/**/*.js": [
      "eslint --fix",
      "prettier --write"
    ],
    "src/**/*.{css,less,scss}": [
      "prettier --write" 
    ]
  }
}
```
