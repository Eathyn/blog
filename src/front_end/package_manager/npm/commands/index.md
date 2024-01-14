---
date: 2023-07-15
category: npm
---

# Commands

## init

- `npm init` 生成 `package.json` 文件
- 别名: `create`

## install

- `npm install`：安装所有包
- `npm install <package>`：安装某一个包

### 描述

- `--global` / `-g`：全局安装
- `--save-dev` / `-D`：开发的时候需要的依赖包，出现在 `devDependencies`。

## uninstall

- `npm uninstall <package>`：卸载包

## update

> Reference
> - [update command](https://docs.npmjs.com/cli/v10/commands/npm-update)
> - [update both package-lock.json and package.json](https://stackoverflow.com/a/71734595/9863318)
> - [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

- 更新包和 `package-lock.json`，不更新 `package.json`：

```bash
npm update <package_name>
```

- 官方说 `npm update --save` 可以更新包、`package-lock.json` 和 `package.json`，但我测试之后发现 `package.json` 并没有更新。

- 如果想同时更新 `package-lock.json` 和 `package.json`，可以使用 `npm-check-updates` 包：

```bash
# 全局安装 npm-check-updates
npm i -g npm-check-updates

# 查看可以更新的包
ncu

# 更新指定包至最新版本
ncu - <package_name> -u
```
