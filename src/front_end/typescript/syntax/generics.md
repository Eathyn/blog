---
date: 2023-06-08
category: TypeScript
---

# Generics

## Definition

使用泛型（generics）可以让函数、类和接口等结构不需要在定义时指定具体的类型，有利于代码复用。

## Generic Type

### Usage

泛型可以与类型结合使用：

```ts
type Person<T> = {
  id: number
  metadata: T
}

const personOne: Person<string> = {
  id: 1,
  metadata: 'string type'
}

const personTwo: Person<number> = {
  id: 2,
  metadata: 100
}
```

## Generic Interface

### Usage

泛型可以与接口结合使用：

```ts
interface Person<T> {
  id: number
  metadata: T
}

const personOne: Person<string> = {
  id: 1,
  metadata: 'string type'
}

const personTwo: Person<number> = {
  id: 2,
  metadata: 100
}
```

## Generic Function

### Usage

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/)

可以在函数中使用泛型，定义参数和返回值类型。

`T` 指的是类型变量（type variable），可以写成任意字母或单词。

```ts {1,7,11}
function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

const items1 = [1, 2, 3, 4, 5]
const result1 = getRandomElement<number>(items1)
console.log(result1)

const item2 = ['a', 'b', 'c', 'd', 'e']
const result2 = getRandomElement<string>(item2)
console.log(result2)
```

### Arrow Function

箭头函数也可以使用泛型：

```ts
// 在函数上使用泛型
function foo<T>(input: T): T {
  return input
}

// 在箭头函数上使用泛型
const bar = <T>(input: T): T => input
```

### 简化函数实现并窄化返回值类型

> Ref: [TypeScript 全面进阶指南：第九章](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1)

如果函数的参数是多种类型的并集，那么使用泛型可以简化函数的实现，也可以窄化返回值的类型：

::: code-tabs
@tab 未使用泛型
```ts
function foo(input: number | string) {
  // 函数的实现冗余
  if (typeof input === 'number') {
    return input
  } else {
    return input
  }
}

let input = 'hello'
// 函数的返回值类型不够具体
// string | number
const val = foo(input)
```

@tab 使用泛型
```ts
function foo<T>(input: T): T {
  // 函数的实现精简
  return input
}

let input = 'hello'
// 函数的返回值类型具体
// string
const val2 = foo(input)
```
:::

### 精确的类型信息推断

> Ref: [TypeScript 全面进阶指南：第九章](https://juejin.cn/book/7086408430491172901?scrollMenuIndex=1)

在基于参数类型进行填充泛型时，其类型信息会被推断到尽可能精确的程度：

```ts
function foo<T>(input: T): T {
  return input
}

// input1: string
let input1 = 'hello'
// val1: string
const val1 = foo(input1)

// input2: "hello"
const input2 = 'hello'
// val2: "hello"
const val2 = foo(input2)
```

## Generic Class

### Usage

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-classes/)

类中可以使用泛型。

```ts
class Stack<T> {
  private data: T[]

  constructor() {
    this.data = []
  }

  public push(item: T) {
    this.data.push(item)
  }

  public pop() {
    return this.data.length === 0 ? -1 : this.data.pop()
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack)

stack.pop()
console.log(stack)
```

### 类泛型的消费对象

实例方法可以使用类定义的泛型；静态方法不可以使用类定义的泛型：

```ts
class MyClass<T> {
  // ok
  generateData(data: T) {
    return data
  }

  // TS2302: Static members cannot reference class type parameters.
  static generateData(data: T) {
    return data
  }
}
```

## Multiple Types

### Usage

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/)

可以定义多个泛型变量：

::: code-tabs
@tab demo-1
```ts
function foo<T, U>(x: T, y: U) {
  console.log(x)
  console.log(y)
}

foo<string, number>('a', 1)
foo<number, boolean>(2, true)
```

@tab demo-2
```ts
type Conditional<X, Y, TruthyResult, FalsyResult> =
  X extends Y ? TruthyResult : FalsyResult

// Type: "passed" 
type Type = Conditional<'text', string, 'passed', 'rejected'>
```
:::

```ts
interface Person {
  name: string
  age: number
}

interface Teacher {
  name: string
  subject: string
}

interface Student {
  name: string
  grade: number
}

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  }
}

const person1: Person = { name: 'Jeff', age: 18 }
const teacher1: Teacher = { name: 'Eaven', subject: 'Math' }
const result1 = merge<Person, Teacher>(person1, teacher1)
console.log(result1) // { name: 'Eaven', age: 18, subject: 'Math' }

const person2: Person = { name: 'Jeff', age: 18 }
const student1: Student = { name: 'Eaven', grade: 4 }
const result2 = merge<Person, Student>(person2, student1)
console.log(result2) // { name: 'Eaven', age: 18, grade: 4 }
```

## Default Value

泛型可以有默认值：

```ts
// Type 的泛型的默认值为 boolean
type Type<T = boolean> = T

// TypeB: string
type TypeB = Type<string>

// TypeC: boolean
type TypeC = Type
```

## Generic Constrain

### extends

通过 `extends` 将泛型参数的类型约束为 `WithLength`：

```ts
interface WithLength {
  length: number
}

function logLength<T extends WithLength>(arg: T) {
  return arg.length
}

// ok
logLength('hello')

// ok
logLength(['a', 'b'])

// TS2345: Argument of type number is not assignable to parameter of type WithLength
logLength(100)
```

### extends + keyof

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)

- 因为 `obj` 可能没有 `prop` 这个属性，所以执行 `obj[prop]` 会报错：

```ts {2}
function getProp<T, K>(obj: T, prop: K) {
  return obj[prop] // TS2536: Type 'K' cannot be used to index type 'T'.
}
```

- 上述问题可以使用 `extends` + `keyof` 解决。`K extends keyof T` 表示 `K` 是 `T` 的某个属性：

```ts {1}
function getProp<T, K extends keyof T>(obj: T, prop: K) {
  return obj[prop] // 不会报错
}
```
