---
date: 2024-06-14
---

# Extends

> Ref: 
> - [（掘金小册）TypeScript 全面进阶指南：第九章](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1)
> - [The `extends` keyword](https://matiashernandez.dev/blog/post/typescript-the-extends-keyword)

TypeScript 的 `extends` 关键字有两种含义：
- 让类型更复杂；
- 让类型更精确。

## Make the Type More Complex

`extends` 可以扩展接口或类，这会让类型更复杂：

### Extends Interface

使用 `extends` 扩展接口：

```ts
interface Person {
  name: string
  age: number
}

// Student: { name: string, age: number, grade: number }
interface Student extends Person {
  grade: number
}
```

### Extends Class

使用 `extends` 扩展类：

```ts
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

class Student extends Person {
  grade: number
  
  constructor(name: string, age: number, grade: number) {
    super(name, age)
    this.grade = grade
  }
}
```

## Make the Type More Precise

`extends` 可以让类型更精确，用于泛型约束、条件类型等。

### Generic Constraint

下面代码中，使用 `extends` 将泛型参数的类型 T 约束为 `{ name: string }`：

```ts
function logName<T extends { name: string }>(person: T) {
  console.log(person.name)
}
```

下面的代码中，如果没有使用 `extends`，`xVal` 的类型为 `string | number | boolean`；如果使用 `extends`，`xVal` 的类型为 `number`：

::: code-tabs
@tab without `extends`
```ts {1,11}
function getProp<T>(obj: T, key: keyof T) {
  return obj[key]
}

const obj = {
  x: 1,
  y: 'str',
  z: true,
}

// string | number | boolean
const xVal = getProp(obj, 'x')
```

@tab with `extends`
```ts {1,11}
function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const obj = {
  x: 1,
  y: 'str',
  z: true,
}

// number
const xVal = getProp(obj, 'x')
```
:::

### Conditional Type

```ts
type IsString<T> = T extends string ? true : false

// true
type X = IsString<string>
// true
type Y = IsString<'hi'>
// false
type Z = IsString<number>
```
