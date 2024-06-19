---
date: 2024-06-17
---

# Type Hierarchy

## 字面量类型与对应的类型

字面量类型是对应的原始类型或对象类型的子类型：

```ts
type Result1 = 'text' extends string ? 1 : 2 // 1
type Result2 = 1 extends number ? 1 : 2 // 1
type Result3 = {} extends object ? 1 : 2 // 1
type Result4 = [] extends object ? 1 : 2 // 1
```

## 联合类型

在 `B extends A` 的结构中，如果 `A` 是联合类型且 `B` 中所有类型都在 `A` 中出现，那么 `B` 就是 `A` 的子类型：

```ts
// 全部出现
type Result1 = '1' extends '1' | '2' ? 1 : 2 // 1
type Result2 = string extends string | number ? 1 : 2 // 1
// 没有全部出现
type Result3 = '1' extends '2' | '3' ? 1 : 2 // 2
type Result4 = '1' | '2' extends '2' | '3' ? 1 : 2 // 2
```

## 字面量联合类型与对应的类型

字面量联合类型是对应类型的子类型：

```ts
type Result1 = 'a' | 'b' | 'c' extends string ? 1 : 2 // 1
type Result2 = {} | [] extends object ? 1 : 2 // 1
```

（总结）字面量类型 < 字面量联合类型 < 对应的类型：

```ts
type StringLiteral = 'a'
type StringLiteralUnion = 'a' | 'b'
type StringType = string

type Result1 = StringLiteral extends StringLiteralUnion ? 1 : 2 // 1
type Result2 = StringLiteralUnion extends StringType ? 1 : 2 // 1
type Result3 = StringLiteral extends StringType ? 1 : 2 // 1
```

## 装箱类型

```ts
type Result1 = string extends String ? 1 : 2 // 1
type Result2 = boolean extends Boolean ? 1 : 2 // 1
```

## (Q) {} 与 object

```ts
type Result1 = {} extends object ? 1 : 2 // 1
type Result2 = object extends {} ? 1 : 2 // 1
```

## (Q) {} 与 Object

```ts
type Result1 = {} extends Object ? 1 : 2 // 1
type Result2 = Object extends {} ? 1 : 2 // 1
```

## Top Type

`any` 和 `unknown` 是顶端类型：

```ts
type Result1 = Object extends any ? 1 : 2 // 1
type Result2 = Object extends unknown ? 1 : 2 // 1
```

在 `B extends A` 中，当 `B` 为 `any` 而 `A` 不为 `any` 时，返回的类型是条件类型结果组成的联合类型，因为 `any` 可能让条件成立，也可能让条件不成立；当 `B` 和 `A` 都为 `any` 时，返回的类型是条件类型成立的部分：

```ts
type Result1 = any extends 'text' ? 1 : 2 // 1 | 2
type Result2 = any extends string ? 1 : 2 // 1 | 2
type Result3 = any extends {} ? 1 : 2 // 1 | 2
type Result4 = any extends Object ? 1 : 2 // 1 | 2
type Result5 = any extends unknown ? 1 : 2 // 1 | 2
type Result6 = any extends any ? 1 : 2 // 1
```

`unknown` 类型只能复制给 `unknown` 或 `any` 类型：

```ts
type Result1 = unknown extends unknown ? 1 : 2 // 1
type Result2 = unknown extends any ? 1 : 2 // 1
```

## never

`never` 是任何类型的子类型：

```ts
type Result1 = never extends 'text' ? 1 : 2 // 1
type Result2 = never extends undefined ? 1 : 2 // 1
```
