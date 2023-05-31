---
date: 2023-05-31
category: TypeScript
---

# Operator

## keyof

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 定义：`keyof` 返回对象类型的所有键（key）的联合类型。

- 如下代码所示，`keyof User` 返回 `User` 对象类型的所有键（`name`, `age`, `habit`）的联合类型（`"name" | "age" | "habit"`）。

```ts
interface User {
  name: string,
  age: number,
  habit: string,
}

type UserKey = keyof User // "name" | "age" | "habit"
let key: UserKey = 'name'
```
