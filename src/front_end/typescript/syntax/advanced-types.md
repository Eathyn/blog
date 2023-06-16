---
date: 2023-06-15
category: TypeScript
---

# Advanced Types

## Mapped Type

> Reference: _Learning TypeScript_: p253-254

### Definition

- 映射类型（mapped type）指的是对某个类型的所有属性进行操作后形成的新类型。

```ts
type Animal = 'panda' | 'monkey' | 'elephant'
type AnimalCount = {
  [k in Animal]: number
} // {panda: number, monkey: number, elephant: number}
```

### Usage

- 映射类型经常与 `keyof` 搭配。`keyof TypeA` 返回 `"a" | "b" | "c"`。

```ts
interface TypeA {
  a: number
  b: string
  c: boolean
}

type TypeB = {
  [K in keyof TypeA]: number
} // {a: number, b: number, c: number}
```

- 使用 `-readonly` 将属性转变为可写属性；使用 `-?` 将属性转变为必需属性。

```ts
interface TypeA {
  a?: number
  readonly b: string
}

type TypeB = {
  -readonly [K in keyof TypeA]: TypeA[K]
} // {a?: number, b: string}

type TypeC = {
  [K in keyof TypeA]-?: TypeA[K]
} // {a: number, readonly b: string}
```

## Conditional Type

### Definition

- 基于条件判断选择类型。

```ts
interface TypeA {}
interface TypeB {}
type TypeC = TypeA extends TypeB ? TypeA : TypeB
```

### Usage

- 可以使用泛型。

```ts
type Type<T, U> = T extends U ? T : U
```

- 结合 `infer` 使用。

> Reference
> - [Understanding `infer` in TypeScript](https://blog.logrocket.com/understanding-infer-typescript/)
> - [Why is the infer keyword needed in Typescript?](https://stackoverflow.com/a/60067851)

```ts
type Type<T> = T extends (infer Item)[] ? Item : T
type TypeA = Type<string> // string
type TypeB = Type<number[]> // number
```

## Literal Type

- 字面量类型（literal type）指的是类型是一个具体的值，无法更改。

```ts
type Type = 1
let a: Type = 2 // TS2322: Type '2' is not assignable to type '1'.
```

## Template Literal Type

```ts
type Name = `Mr. ${string}`
let a: Name = 'Mr. Smith' // ok
let b: Name = 'Mrs. Smith' // TS2322: Type '"Mrs. Smith"' is not assignable to type '`Mr. ${string}`'.
```

## Recursive Type

- 递归类型用于构建复杂的数据结构，例如：链表、树等。

```ts
type LinkedList<T> = {
  value: T,
  next: LinkedList<T> | null,
}
```
