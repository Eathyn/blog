---
date: 2023-05-30
category: TypeScript
---

# Type Compatibility

## 定义

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 当两种类型名称不同但结构相同，则可以说这两种类型是兼容的。

- 如下代码所示，`Person` 和 `People` 名称不同但结构相同，因此它们是兼容的。

```ts
interface Person {
  name: string,
  age: number,
}

interface People {
  name: string,
  age: number,
}

let person1: Person = {
  name: 'Jeff',
  age: 18,
}

let person2: People = person1
```
