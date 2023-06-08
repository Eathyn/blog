---
date: 2023-06-08
category: TypeScript
---

# Generics

## Definition

- 使用泛型（generics）可以让函数、类、接口等结构不需要在定义时指定具体的类型，有利于代码复用。

## Generic Function

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/)

- 可以在函数中使用泛型，定义参数和返回值类型。
- `T` 指的是类型变量（type variable），可以写任意单词。

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

## Multiple Types

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/)

- 泛型可以定义多个类型变量，如下代码中的 `U` 和 `V`。

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

## Generic Constrain

### extends

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)

- 调用 `merge({ name: 'Jeff', age: 18 }, 100)` 不会报错，因为 TypeScript 把 `U` 推断为 `object` 类型，把 `V` 推断为 `number` 类型。

```ts {16}
interface Person {
  name: string
}

interface Teacher {
  subject: string
}

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  }
}

merge({ name: 'Jeff' }, 100) // 不会报错
```

- 上述问题有两种解决方案：
  - 方案一：调用函数时指定类型。
  - 方案二：使用 `extends` 关键字限制泛型类型变量的类型。

_方案一_

```ts {16}
interface Person {
  name: string
}

interface Teacher {
  subject: string
}

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  }
}

merge<Person, Teacher>({ name: 'Jeff' }, 100) // 第二个参数报错
```

_方案二_

```ts {9}
interface Person {
  name: string
}

interface Teacher {
  subject: string
}

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  }
}

merge({ name: 'Jeff' }, 100) // 第二个参数报错
```

### extends + keyof

> Reference: [TypeScript Tutorial](https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-constraints/)

- 因为 `obj` 可能没有 `prop` 这个属性，所以执行 `obj[prop]` 会报错：

```ts {2}
function getVal<T, K>(obj: T, prop: K) {
  return obj[prop] // TS2536: Type 'K' cannot be used to index type 'T'.
}
```

- 上述问题可以使用 `extends` + `keyof` 解决。`K extends keyof T` 表示 `K` 是 `T` 的某个属性：

```ts {1}
function getVal<T, K extends keyof T>(obj: T, prop: K) {
  return obj[prop] // 不会报错
}
```
