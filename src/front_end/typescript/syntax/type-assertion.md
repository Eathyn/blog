---
date: 2023-05-30
category: TypeScript
---

# Type Assertion

## 定义

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 开发者可能比 TypeScript 编译器更清楚某个值的类型（例如编译器推断出的值类型是 `any`，但开发者清楚值类型应该是 `string`），那么可以使用类型断言（type assertion）告诉编译器正确的值类型。

- 例子如下，编译器推断出 `JSON.parse` 返回的值类型是 `any`，但是开发者知道 `rawData` 经过 `JSON.parse` 转换后的值类型应该是 `string[]`，那么就可以使用断言告诉 TypeScript 编译器正确的值类型。

```ts
let rawData = `['Jeff', 'Grace']`

let result1 = JSON.parse(rawData) // any
let result2 = JSON.parse(rawData) as string[] // string[]
```

## 用法

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 尖括号语法

```ts
let rawData = `['Jeff', 'Grace']`
let result1 = JSON.parse(rawData) // any
let result2 = <string[]>JSON.parse(rawData) // string[]
```

- `as` 语法

```ts
let rawData = `['Jeff', 'Grace']`
let result1 = JSON.parse(rawData) // any
let result2 = JSON.parse(rawData) as string[] // string[]
```

## as const

> Reference: [TypeScript Docs: const assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

- `const` 断言的效果：
  - 类型变成字面量类型。
  - 对象的属性变成 `readonly`。
  - 数组变成 `readonly` 元组。

- 类型变成字面量类型：

```ts
let str1 = 'hello' // string
let str2 = 'hello' as const // 'hello'
```

- 对象的属性变成 `readonly`：

```ts
let obj1 = { name: 'Jeff' } // {name: string}
let obj2 = { name: 'Jeff' } as const // {readonly name: 'Jeff'}
```

- 数组变成 `readonly` 元组：

```ts
let person1 = [18, 'Jeff'] // (string | number)[]
let person2 = [18, 'Jeff'] as const // [18, 'Jeff']
```

## as [type]

```ts
let age1 = 18
let age2 = 18 as string
```

## as any

```ts
let age = 21 as any // any
```

## non-null assertion

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- 非空断言（non-null assertion）操作符（!）告诉编译器值类型不是 `null` 或 `undefined`。

- 如下面代码所示，使用非空断言操作符之后，编译器不会将 `firstname` 的类型推断为 `null`，所以调用 `toUpperCase` 不会报错。

```ts
let firstname: string | null = null
firstname!.toUpperCase()
```
