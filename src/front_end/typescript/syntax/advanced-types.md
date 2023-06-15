---
date: 2023-06-15
category: TypeScript
---

# Advanced Types

## Mapped Type

### Definition

> _Learning TypeScript_: p253-254

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
