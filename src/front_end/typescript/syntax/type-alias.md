---
date: 2023-05-31
category: TypeScript
---

# Type Alias

## 定义

> [TypeScript Roadmap](https://roadmap.sh/typescript)

- 为类型定义别名。

```ts
type Name = string
type Age = number

interface Person {
  name: Name,
  age: Age,
}

let person: Person = {
  name: 'Jeff',
  age: 18,
}
```
