---
date: 2023-06-28
category: TypeScript
---

# Index Signature

> Reference: 
> - [Index Signature](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures)
> - [Index Signatures in TypeScript](https://dmitripavlutin.com/typescript-index-signatures/)

## Definition

- 索引签名（index signature）适用于不知道对象具体的键名，但是知道键的类型和值的类型。

## Basic Usage

- 如下代码所示：
  - `[key: string]: number` 表示所有**字符串类型**的键的值类型都是 `number`。
  - `obj1` 字符串类型的键的值的类型是 `number`，所以不会报错。
  - `obj2` 字符串类型的键的值的类型是 `string`，所以会报错。

```ts {2,5,8}
interface Obj {
  [key: string]: number
}

let obj1: Obj = { a: 1 } // ok

// TS2322: Type 'string' is not assignable to type 'number'.
let obj2: Obj = { b: 'hi' }
```

## Key Type Conflict

- 如下代码所示：
  - `[key: string]: number` 表示所有字符串类型的键的值类型都是 `number`。
  - `a` 属于字符串类型的键，但是 `a` 的值类型是 `string`，和 `[key: string]: number` 冲突，所以会报错。

```ts
interface Obj {
  [key: string]: number
  a: string // TS2411: Property 'a' of type 'string' is not assignable to 'string' index type 'number'.
}
```
