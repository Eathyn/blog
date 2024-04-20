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

## Non-null Assertion Operator

> Ref
> - [Document](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)
> - [Example](https://www.geeksforgeeks.org/typescript-non-null-assertion-operator-postfix-type/)

非空断言操作符（non-null assertion operator）表示告诉编译器值不是 `undefined` 或 `null`。

::: code-tabs
@tab 没有使用非空断言操作符
```ts {2-3}
function greet(name: string | null) {
  // TS2322: Type string | null is not assignable to type string
  const formattedName: string = name
  return `hello, ${formattedName}`
}
```

@tab 使用非空断言操作符
```ts {2}
function greet(name: string | null) {
  const formattedName: string = name!
  return `hello, ${formattedName}`
}
```
:::
