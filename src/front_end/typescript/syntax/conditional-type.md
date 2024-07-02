---
date: 2024-06-19
---

# Conditional Type

条件类型中使用 extends 判断类型的兼容性，而非判断类型的全等性。这是因为在类型层面中，对于能够进行赋值操作的两个变量，我们并不需要它们的类型完全相等，只需要具有兼容性，而两个完全相同的类型，其 `extends` 自然也是成立的：

```ts
// syntax error
type Result1 = 'text' === 'text' ? 1 : 2
// 1
type Result2 = 'text' extends string ? 1 : 2
```

条件类型绝大部分场景下会和泛型一起使用：

```ts
type LiteralType<T> = T extends string ? 'text' : false
```

## 简化函数签名

原来的函数为：

```ts
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}
```

使用条件类型可以将代码优化为：

```ts
type NameOrId<T extends string | number> = T extends number ? IdLabel : NameLabel
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented'
}
```

## Conditional Type Constrain

> Ref: [Conditional Type Constrain](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#conditional-type-constraints)

条件类型可以用于类型约束：

```ts
type TypeA<T> = T extends { message: unknown } ? T['message'] : T
// string
type TypeB = TypeA<{ message: string }>
// number
type TypeC = TypeA<number>
```

## Type Inference

### Usage

infer 可以引入泛型类型，这种写法可以简化代码。例如在下面例子中，没使用 infer 时需要在分支中通过索引访问（`T[number]`）才能获取类型，使用 infer 时可以在分支中直接获取类型（`Item`）：

```ts
type Flatten<T> = T extends any[] ? T[number] : T
type TestA = Flatten<number[]> // number
type TestB = Flatten<string> // string

type Flatten2<T> = T extends Array<infer Item> ? Item : T
type TestC = Flatten<number[]> // number
type TestD = Flatten<string> // string
```

infer 在函数返回值上的应用：

```ts
type GetReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never
type TestA = GetReturnType<() => string> // string
type TestB = GetReturnType<() => boolean[]> // boolean[]
```

### Multi Call Signatures

当函数有多个签名时，`infer Return` 返回最后一个签名的类型：

```ts
type GetReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never
function stringOrNum(x: string): number;
function stringOrNum(x: number): string;
function stringOrNum(x: string | number): number | string {
  return x
}
type TestG = GetReturnType<typeof stringOrNum> // number | string
```

## Distributive

### Usage

> Ref: [联合类型在条件类型中的计算过程](https://blog.logrocket.com/guide-conditional-types-typescript/#distributive-conditional-types)

联合类型在条件类型中的计算过程：

```ts
type ToArray<T> = T extends any ? T[] : never

type StrOrNumArray = ToArray<string | number> // string[] | number[]
// 步骤一：ToArray<string | number> 变为 ToArray<string> | ToArray<number>
// 步骤二：ToArray<string> | ToArray<number> 变为 string[] | number[]
```

### NonDistributive

```ts
type ToArrayNonDist<T> = T[] extends any[] ? T[] : never
type ArrOfStrOrNum = ToArrayNonDist<string | number> // (string | number)[]
// 步骤一：ToArrayNonDist<string | number> 变为 (string | number)[]
```
