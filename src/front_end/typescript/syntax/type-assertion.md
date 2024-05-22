---
date: 2023-05-30
category: TypeScript
---

# Type Assertion

## Why

> Ref: [Learning TypeScript](https://a.co/d/6gbVpKT) : p132

开发者可能比 TypeScript 编译器更清楚某个值的类型（例如编译器推断出的值类型是 `any`，但开发者清楚值类型应该是 `string`），那么可以使用类型断言（type assertion）告诉编译器正确的值类型。

例子如下，使用 `JSON.parse` 方法后 TS 推断出 `b` 的类型是 `any`，所以 `b.name.toFixed` 在编译阶段不会提示错误，但是在运行阶段会抛出错误（因为字符串没有 `toFixed` 方法）。使用类型断言后将 `any` 类型转变为 `{ name: string, age: number }` 类型，所以在编译阶段 `c.name.toFixed()` 会报错：

```ts
let a = `{
  name: 'john',
  age: 25
}`

// let b: any
let b = JSON.parse(a)
// no error at compile time, but throw error at runtime
b.name.toFixed()

// let c: { name: string, age: number }
let c = JSON.parse(a) as { name: string, age: number }
// TS2551: Property toFixed does not exist on type string
c.name.toFixed()
```

## Syntax

> Ref: [类型断言的两种语法](https://github.com/kamranahmedse/developer-roadmap/blob/master/src/data/roadmaps/typescript/content/101-typescript-types/115-type-assertions/index.md)

`as` 语法：

```ts
let rawData = `['Jeff', 'Grace']`
let result1 = JSON.parse(rawData) // any
let result2 = JSON.parse(rawData) as string[] // string[]
```

尖括号语法：

```ts
let rawData = `['Jeff', 'Grace']`
let result1 = JSON.parse(rawData) // any
let result2 = <string[]>JSON.parse(rawData) // string[]
```

## Const Assertion

> Ref: [Const Assertion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

`const` 断言的影响：

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

- 数组变成 `readonly` 字面量元组：
  ```ts
  let person1 = [18, 'Jeff'] // (string | number)[]
  let person2 = [18, 'Jeff'] as const // [18, 'Jeff']
  ```

## Double Type Assertion

> Ref: [TypeScript 全面进阶指南: 第六章](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1)

如果原类型和要断言的类型之前差距太大（例如要把 `string` 断言为 `number`），那么需要先把原类型断言为 `unknown`，再把 `unknown` 断言为想要的类型：

```ts
let a: string = 'text'
// TS2352: Conversion of type string to type number may be a mistake
// because neither type sufficiently overlaps with the other.
;(a as number).toFixed()
// no error
;(a as unknown as number).toFixed()
```

判断断言是否成立，即差异是否能接受时，实际上判断的即是这两个类型是否能够在类型层级上找到一个公共的父类型。

## Non-null Assertion

> Ref: [Non-null Assertion](https://github.com/kamranahmedse/developer-roadmap/blob/master/src/data/roadmaps/typescript/content/101-typescript-types/115-type-assertions/103-non-null-assertion.md)

非空断言（non-null assertion）操作符（!）告诉编译器值类型不是 `null` 也不是 `undefined`。

如下面代码所示，使用非空断言操作符之后，编译器不会将 `firstname` 的类型推断为 `null`，所以调用 `toUpperCase` 不会报错：

```ts
let firstname: string | null = null
firstname!.toUpperCase()
```

## Definite Assignment Assertions

> Ref: [Programming TypeScript](https://a.co/d/ehAPfhC): p151

在 JavaScript 中，假设变量 a 的值为 undefined，访问变量 a 的属性或调用变量 a 的方法会在运行时报错：

```js
let a
// TypeError: Cannot read properties of undefined (reading 'toUpperCase')
a.toUpperCase()
```

同样，在 TypeScript 中这种用法也会在编译时报错：

```ts
let a: string
// TS2454: Variable a is used before being assigned
a.toUpperCase()
```

但是有时候我们需要这种写法：

```ts
let data: string
getData()
// TS2454: Variable data is used before being assigned
data.toUpperCase()

function getData() {
  data = 'text'
}
```

为了使代码不报错，我们需要使用确定断言赋值（Definite Assignment Assertions）：

```ts {1}
let data!: string
getData()
// TS2454: Variable data is used before being assigned
data.toUpperCase()

function getData() {
  data = 'text'
}
```

## Application

> Ref: [TypeScript 全面进阶指南: 第六章](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1)

类型断言可以让你不用实现所有接口定义的属性，还能提供代码提示：

```ts
interface TypeA {
  a: string
  b: {
    c: number
    d: boolean
  }
}

// TS2741: Property b is missing in type { a: string; } but required in type TypeA
let obj1: TypeA = {
  a: 'hello'
}

// no error
let obj2 = <TypeA>{
  a: 'hello'
}
```

## Assertion Function

### Why

> Ref: [TypeScript 引入断言签名的原因](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)

Node.js 中的 assert 断言函数：

```js
const assert = require('assert')

const a = 1
// AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:
//  assert(a === 2)
assert(a === 2)
```

但是调用 Node.js 的 assert 函数并不能让 TypeScript 编译器窄化变量的类型：

```ts
const assert = require('assert')

function fn(str: unknown) {
  // Node.js assert function
  assert(typeof str === 'string')
  // TS18046: str is of type unknown
  str.toUpperCase()
}
```

于是 TypeScript 3.7 提出断言签名（assertion signature）的概念来并解决类型窄化的问题，使用断言签名的函数称为断言函数（assertion function）：

```ts
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg)
  }
}

function yell(x: unknown) {
  // TS18046: x is of type unknown
  x.toUpperCase()

  assert(typeof x === 'string')

  // x: string
  x.toUpperCase()
}
```

### Two Forms

> Ref: [断言签名的两种格式](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions)

断言函数有两种格式，一种是断言**整个条件**，另一种是断言**变量或对象属性**。

断言整个条件的格式源于模仿 Node.js 的 assert 函数，这种方式直接断言整个条件（asserts condition）：

```ts
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new TypeError(msg)
  }
}

function yell(x: unknown) {
  // TS18046: x is of type unknown
  x.toUpperCase()

  assert(typeof x === 'string')

  // x: string
  x.toUpperCase()
}
```

断言变量或对象属性的格式：

```ts
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new TypeError(`${value} is not string type`)
  }
}

function test(value: unknown) {
  // TS18046: value is of type unknown
  // value.toUpperCase()

  assertIsString(value)

  // value: string
  value.toUpperCase()
}
```

### Type Predicate vs Assertion Function

> Ref: 
> - [类型断言 vs 断言函数](https://blog.logrocket.com/assertion-functions-typescript/#:~:text=number%27\)%0A%7D-,Assertion%20functions%20and%20type%20guards,-Assertion%20functions%20in)
> - [类型断言 vs 断言函数](https://exploringjs.com/tackling-ts/ch_type-guards-assertion-functions.html#quick-reference-user-defined-type-guards-and-assertion-functions)

类型断言（type predicate）与断言函数（assertion function）的区别：
- 类型断言的返回值的类型是布尔值；
- 断言函数的返回值的类型是 void 或抛出错误：

```ts
// 类型断言签名
function assertIsString(value: unknown): value is string {
  return typeof value === 'string'
}

// 断言签名
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new TypeError(`${value} is not string type`)
  }
}

// 类型断言签名的错误使用
// TS2355: A function whose declared type is neither undefined, void, nor any must return a value.
function assertIsString(value: unknown): value is string {
  if (typeof value !== 'string') {
    throw new TypeError(`${value} is not string type`)
  }
}
```

### Definition

> Ref: [definition of assertion function](https://typescript.tv/best-practices/type-checking-with-assertion-functions-in-typescript/#disadvantages:~:text=An%20assertion%20function%20is%20the%20implementation%20of%20a%20runtime%20check%20that%20is%20able%20to%20identify%20the%20type%20of%20unknown%20input.%20When%20the%20conditions%20of%20the%20assertion%20functions%20are%20passed%2C%20TypeScript%27s%20compiler%20will%20then%20assume%20that%20the%20input%20is%20of%20the%20type%20claimed%20by%20the%20signature%20of%20the%20assertion%20function.)

断言函数（assertion function）的定义：如果函数抛出错误，TS 编译器就认为函数的断言是错误的；如果函数没有抛出错误，TS 编译器就认为函数断言是正确的。

用以下代码解释断言函数的定义，当不满足这两个条件（`!Array.isArray(value) || value.some((item) => typeof item !== 'number')`）时，函数会抛出错误（throw new Error(\`${value} is not the array number type)\`），那么 TS 编译器就认为函数的断言（`value is number[]`）是错误的。反之，如果满足这两个条件时，函数不会抛出错误，那么 TS 编译器就认为函数断言是正确的，那么 value 的类型就被 TS 编译器推断为 `number[]`：

```ts
function assertNumberArr(value: unknown): asserts value is number[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'number')) {
    throw new TypeError(`${value} is not the array number type`)
  }
}

const data: unknown = [1, 2, 3] // data: unknown
assertNumberArr(data)
data.reduce((acc, curr) => acc + curr, 0) // data: number[]
```

### Application

> Ref: [Assertion Functions in TypeScript](https://mariusschulz.com/blog/assertion-functions-in-typescript)

因为 `document.getElementById` 的返回值类型是 `HTMLElement | null`，所以 `elem.addEventListener` 会报错：

```ts
let elem = document.getElementById('#test')
// TS18047: elem is possibly null
// let elem: HTMLElement | null
elem.addEventListener('click', () => {})
```

常用的两种解决方式是非空断言和内联控制检测：

::: code-tabs
@tab 非空断言
```ts
let elem = document.getElementById('#test')!
// let elem: HTMLElement
elem.addEventListener('click', () => {})
```

@tab 内联控制检测
```ts
let elem = document.getElementById('#test')
if (elem == null) {
  throw new Error('#test element does not exist')
}
// let elem: HTMLElement
elem.addEventListener('click', () => {})
```
:::

有时候我们不想使用非空断言，而是想将内联控制检测封装为一个函数，以便后续复用。但是单纯封装成函数编译器会报错，因为编译器不知道当值为 null 时函数会抛出错误，所以它仍然把 elem 的类型推断为 `HTMLElement | null`：

```ts
function assertNonNullish(value: unknown, message: string) {
  if (value === null || value === undefined) {
    throw new Error(message)
  }
}

let elem = document.getElementById('#test')
assertNonNullish(elem, '#test element does not exist')
// TS18047: elem is possibly null
// let elem: HTMLElement | null
elem.addEventListener('click', () => {})
```

要解决这个问题，我们需要使用断言函数（assertion function）：

```ts
function assertNonNullish<T>(value: T, message: string): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw new Error(message)
  }
}

let elem = document.getElementById('#test')
assertNonNullish(elem, '#test element does not exist')
// let elem: HTMLElement
elem.addEventListener('click', () => {})
```

> Ref: [Assertion functions in TypeScript](https://blog.logrocket.com/assertion-functions-typescript/#:~:text=Learn%20more%20%E2%86%92-,Function%20declarations%20and%20expressions,-At%20the%20time)

断言函数可以在函数声明或函数表达式中使用：

```ts
{
  // function declaration
  function isString(value: unknown): asserts value is string {
    if (typeof value === 'string') {
      throw new TypeError(`${value} is not string`)
    }
  }
}

{
  // function expression
  const isString: (value: unknown) => asserts value is string = (value: unknown) => {
    if (typeof value === 'string') {
      throw new TypeError(`${value} is not string`)
    }
  }
}

{
  // function expression
  type AssertIsString = (value: unknown) => asserts value is string
  const isString: AssertIsString = (value: unknown) => {
    if (typeof value === 'string') {
      throw new TypeError(`${value} is not string`)
    }
  }
}
```
