---
date: 2024-04-23
---

# pnpm Workspace

## Usage

> Ref: [demo repo](https://github.com/Eathyn/pnpm-workspace-example)

创建文件夹 monorepo-pnpm-workspace，并用 pnpm init 进行初始化。

在 monorepo-pnpm-workspace 文件夹下创建文件夹 apps 和 libs。

根目录下创建 pnpm-workspace.yaml 文件，将 apps 和 libs 配置为 packages：

```yaml
# pnpm-workspace.yaml
packages:
  - "apps/*"
  - "libs/*"
```

在 apps 文件夹中创建 calculator 文件夹，在 libs 文件夹中创建 math 文件夹，并用 pnpm init 初始化这两个文件夹。

因为我在项目中使用 CommonJS，为了有代码提示，我需要安装 @types/node。因为 calculator 和 math 都需要 @types/node，所以我把 @types/node 安装到 monorepo-pnpm-workspace（即项目根目录）下，这样 calculator 和 math 就可以共享 @types/node，不必各自安装：

```text
// -w 表示将包安装到项目根目录
pnpm add -D -w @types/node
```

在 math 文件夹下创建 index.js 并编写代码：

```js
function add(n1, n2) {
  return n1 + n2
}

module.exports = {
  add,
}
```

calculator 将 math 作为依赖包引入到项目中：

```text
pnpm --filter calculator add math --workspace
```

引入后 math 作为依赖包出现在 calculator 的 node_modules 中。

在 calculator 文件夹下创建 index.js 并使用 math：

```js
// calculator/index.js
const { add } = require('math')

console.log(add(1, 2))
```

配置 calculator 和根目录的 package.json：

::: code-tabs
@tab calculator/package.json
```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

@tab root/package.json
```json
{
  "scripts": {
    "calculator:start": "pnpm --filter calculator run start"
  }
}
```
:::

运行 calculator:start 就会运行 calculator/package.json 中的 start。
