---
date: 2024-05-04
---

# Type Tools - Type Safe

## typeof type guard

> Ref: 
> - [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第八章
> - [Effective TypeScript](https://a.co/d/d5Q4NAz): p38

在逻辑代码中，TypeScript 的 `typeof` 相当于 JavaScript 的 `typeof`，返回值为[固定的几个值](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description)。在类型代码（如类型标注、类型别名等）中 `typeof` 返回 TypeScript 推断出来的类型：

```ts
const a = 'text'

/* 逻辑代码 */
// string
const b = typeof a

/* 类型代码 */
// "text"
type c = typeof a
// "text"
let d: typeof a = 'text'
```

## Equality Narrowing

> Ref: [equality narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing)

`switch` 语句、相等操作符（`==` / `===`）和不相等操作符（`!=` / `!==`）可以窄化类型：

```ts
function fn(x: string | number, y: string | boolean) {
  if (x === y) {
    // x type: string
    x.toUpperCase()
    // y type: string
    y.toUpperCase()
  } else {
    // x type: string | number
    // y type: string | number
  }
}
```

## `in` Operator Narrowing

> Ref: [the `in` operator narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing)

`x in y` 表示 `x` 属性是否存在于 `y` 对象中。可以利用 `in` 操作符窄化类型：

```ts
type Teacher = {
  teach: () => void
}

type Student = {
  learn: () => void
}

function action(role: Teacher | Student) {
  if ('teach' in role) {
    return role.teach()
  }
  return role.learn()
}
```

## `instanceof` Narrowing

> Ref: [`instanceof` narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)

```ts
function fn(x: String | Number) {
  if (x instanceof String) {
    // x type: string
    x.toUpperCase()
  } else {
    // x type: number
    x.toFixed()
  }
}
```

## Control Flow Analysis

> Ref: [control flow analysis](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#control-flow-analysis)

如下代码所示，如果 `return padding + input` 是不可达的（reachable），说明 padding 的类型是 number。这种基于可达性（reachability）的代码分析方式成为控制流分析（control flow analysis）：

```ts
function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input
  }
  return padding + input
}
```

如下代码所示，因为 x 最终重新被赋值为 string 或 number 类型的值，所以原先的 boolean 类型被移除：

```ts
function fn(x: string | number | boolean) {
  x = Math.random() > 0.5
  // x type: boolean
  console.log(x)

  if (Math.random() > 0.5) {
    x = 'text'
    // x type: string
    console.log(x)
  } else {
    x = 1
    // x type: number
    console.log(x)
  }

  // x type: string | number
  return x
}
```

## Type Guard

> Ref: [TypeScript 全面进阶指南](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1): 第八章

## Type Predicate

> Ref: [type predicate definition](https://www.geeksforgeeks.org/what-is-type-predicates-in-typescript/)

当函数的返回值类型为布尔值，那么就可以使用类型断言（type predicate）窄化实参的类型。类型断言用于条件判断。

> Ref: [why is type predicate need](https://fettblog.eu/typescript-type-predicates/)

以下函数的作用是将参数类型为字符串的变量大写：

```ts
function fn(x: unknown) {
  if (typeof x === 'string') {
    // x: string
    x.toUpperCase()
  }
}
```

如果我们把中间的判断条件抽离为函数 `isString`，然后在 `fn` 中调用 `isString`，这时 TypeScript 会报错，因为 TypeScript 依然认为 `x` 的类型是 `unknown`：

```ts
function fn(x: unknown) {
  if (isString(x)) {
    // TS18046: x is of type unknown
    x.toUpperCase()
  }
}

function isString(x: unknown) {
  return typeof x === 'string'
}
```

使用类型断言（`x is string`）可以解决这个问题：

```ts
function fn(x: unknown) {
  if (isString(x)) {
    // x: string
    x.toUpperCase()
  }
}

function isString(x: unknown): x is string {
  return typeof x === 'string'
}
```

> Ref: [build-in Array methods with type predicates](https://effectivetypescript.com/2024/02/27/type-guards/#:~:text=But%20in%20this%20post%20we%27re%20more%20interested%20in%20the%20latter.%20Here%27s%20the%20motivating%20scenario%3A)

类型断言可以应用在很多内置的数组方法（如：filter, find, every）。这些内置的数组方法接受的参数类型是函数，如果这些函数没有使用类型断言，那么将无法窄化内置数组方法的返回值类型：

```ts
// (string | number)[]
let strAndNum = [1, 'a', 2, 'b']

function isString(item: string | number) {
  return typeof item === 'string'
}

// strings: (string | number)[]
let strings = strAndNum.filter(isString)

for (const text of strings) {
  // text: string | number
  // TS2339: Property toUpperCase does not exist on type string | number
  text.toUpperCase()
}
```

使用类型断言（`item is string`）窄化返回值：

```ts
// (string | number)[]
let strAndNum = [1, 'a', 2, 'b']

function isString(item: string | number): item is string {
  return typeof item === 'string'
}

// strings: string[]
let strings = strAndNum.filter(isString)

for (const text of strings) {
  // text: string
  text.toUpperCase()
}
```

> Ref: [类型断言的函数最好不要使用 && 作为判断条件](https://effectivetypescript.com/2024/02/27/type-guards/#:~:text=What%20if%20you%20return%20false%3F)

如果类型断言的函数使用 `&&` 作为判断条件，那么可能会导致运行时错误：

```ts
function isSmallNumber(x: string | number): x is number {
  return typeof x === 'number' && Math.abs(x) < 10
}

function fn(x: string | number) {
  if (isSmallNumber(x)) {
    x.toFixed()
  } else {
    x.toUpperCase()
  }
}

fn(11)
```

以上代码在 TypeScript 编译时没有报错，但是在 JavaScript 运行时报错：`TypeError: x.toUpperCase is not a function`。

## Assertion Function

> Ref: [assertion function](/blog/front_end/typescript/syntax/type-assertion/#assertion-function)
