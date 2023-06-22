---
date: 2023-06-22
category: TypeScript
---

# Module

## The History of Module

- `ESM` 没有成为规范之前，TypeScript 最开始使用 `module` 关键字定义模块，后来使用 `namespace` 定义模块。`module` 和 `namespace` 被称为内部模块（internal modules）。`ESM` 成为规范之后，TypeScript 使用 `ESM` 定义模块，`ESM` 被成为外部模块（external module），简称为模块（module）。
- `module` 和 `namespace` 已经过时，最好使用 `ESM`。

```ts
// module keyword
module Calc {
  export function add(n1: number, n2: number) {
    return n1 + n2
  }
}

// namespace keyword
namespace Calc {
  export function add(n1: number, n2: number) {
    return n1 + n2
  }
}

// ESM
export function add(n1: number, n2: number) {
  return n1 + n2
}
```
