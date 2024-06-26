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

> Ref: [Assertion Functions in TypeScript](https://mariusschulz.com/blog/assertion-functions-in-typescript)

因为 `document.getElementById` 的返回值类型是 HTMLElement | null，所以 `elem.addEventListener` 会报错：

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
      throw new Error(`${value} is not string`)
    }
  }
}

{
  // function expression
  const isString: (value: unknown) => asserts value is string = (value: unknown) => {
    if (typeof value === 'string') {
      throw new Error(`${value} is not string`)
    }
  }
}

{
  // function expression
  type AssertIsString = (value: unknown) => asserts value is string
  const isString: AssertIsString = (value: unknown) => {
    if (typeof value === 'string') {
      throw new Error(`${value} is not string`)
    }
  }
}
```
