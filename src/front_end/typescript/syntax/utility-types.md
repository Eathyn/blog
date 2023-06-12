---
date: 2023-06-12
category: TypeScript
---

# Utility Types

## Partial Type

> Reference: [How the TypeScript Partial Type Works](https://dev.to/smpnjn/how-the-typescript-partial-type-works-2klj)

- 将一个类型的所有属性都转变为可选（optional）属性并生成一个新类型。

```ts
interface User {
  name: string
  age: number
}

type PartialUser = Partial<User> // {name?: string, age?: number}
```
