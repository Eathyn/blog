---
date: 2023-05-30
category: TypeScript
---

# Combining Types

- 组合已有的类型形成新的类型。

## Union Type

> Reference:
> - [TypeScript Roadmap](https://roadmap.sh/typescript)
> - [TypeScript Docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

- 联合类型（union type）是指使用联合操作符 `|` 组合已有类型形成新类型，新类型为任意一个已有类型。

- 如下代码所示，`stringOrNumber` 由 `string` 和 `number` 联合组成，所以值类型为 `string` 或 `number` 的值可以赋值给类型为 `stringOrNumber` 的变量。

```ts
type stringOrNumber = string | number
let firstname: stringOrNumber = 'Jeff'
let age: stringOrNumber = 18
```

## Intersection Type

> Reference:
> - [TypeScript Roadmap](https://roadmap.sh/typescript)
> - [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/)

- 交集类型（intersection type）是指使用交集操作符 `&` 组合已有类型形成新类型，新类型包含所有已有类型的所有属性。

- 如下代码所示，`Employee` 由 `Identity` 和 `Contact` 交集组成，所以 `Employee` 拥有 `Identity` 和 `Contact` 的所有属性。

```ts
interface Identity {
  id: number,
  name: string,
}

interface Contact {
  email: string,
  phone: number,
}

type Employee = Identity & Contact

let employee: Employee = {
  id: 1,
  name: 'Jeff',
  email: 'jeff@gmail.com',
  phone: 123456,
}
```
