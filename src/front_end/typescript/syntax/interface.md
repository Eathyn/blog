---
date: 2023-06-01
category: interface
---

# Interface

## Reason

- 通过接口（interface）定义对象类型，以便在多个地方使用。

```ts {1-3}
interface Person {
  name: string
  age: number
}

let person: Person = {
  name: 'Jeff',
  age: 18,
}

function log(person: Person) {
  console.log(person.name)
  console.log(person.age)
}
```

## Optional Property

- 接口可以有可选属性，用 `?` 表示。

```ts {3}
interface Person {
  name: string,
  work?: string,
}
```

## Read-Only Property

- 接口可以有只读属性，用 `read-only` 表示。

```ts {2}
interface Person {
  readonly id: number,
  name: string,
}
```

## Function Property

- 接口中可以定义方法属性，有两种方式定义。

```ts
interface Person {
  name: string,
  getName: () => string,
  // getName(): string,
}
```

## Extend

- 通过 `extends` 关键字可以扩展接口。

```ts {6}
interface Person {
  name: string
  age: number
}

interface Student extends Person {
  grade: number
}

let student: Student = {
  name: 'Jeff',
  age: 18,
  grade: 4,
}
```

- 扩展接口可以覆盖（override）原接口的属性，但是扩展接口的覆盖属性必须可以赋值给原接口的被覆盖属性。

```ts {6}
interface WithNullableName {
  name: string | null
}

interface WithoutNullableName extends WithNullableName {
  name: string,
  // name: number, -> Error
}
```

- 接口可以扩展多个接口。

```ts {9-11}
interface Animal {
  move: () => void
}

interface Person {
  name: string,
  age: number,
}

interface Student extends Animal, Person {
  grade: number
}

let student: Student = {
  name: 'Jeff',
  age: 18,
  grade: 4,
  move() {
    console.log('move...')
  },
}
```

## Nest

- 接口可以嵌套。

```ts {2}
interface Course {
  info: CourseInfo,
  evaluation: string,
}

interface CourseInfo {
  name: string,
  description: string,
  instructors: string[],
}
```

## Merge

- 接口合并（merge）指的是在同一个作用域有多个相同名称的接口，这些接口会自动合并为一个接口。

```ts
interface Person {
  name: string
}

interface Person {
  age: number
}

let person: Person = {
  name: 'Jeff',
  age: 18,
}
```
