---
date: 2023-05-29
category: TypeScript
---

# Types

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

## Primitive Types

### boolean

```ts
let isValid: boolean = true
```

### number

```ts
let age: number = 18
```

### string

```ts
let greet: string = 'hi'
```

### void

- 当函数没有 `return` 语句或者没有显示地返回一个值时，函数的返回值的类型为 `void`。

```ts
// 没有 `return` 语句
function fn1() {
  console.log('hi')
}

// 没有显示地返回一个值
function fn2() {
  return
}
```

### undefined

```ts
let age: undefined
```

### null

```ts
let name: null
```

## Object Types

### interface

[详细](./interface)

### class

```ts
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`Hi, I am ${this.name}`)
  }
}

const person = new Person('Jeff', 18)
```

### enum

- 使用枚举可以避免硬编码。
- 枚举的第一项的默认值为 `0`，后面的值会自动递增。

```ts
enum Direction {
  UP = 1,
  RIGHT,
  DOWN,
  LEFT,
}

let direction = 1
if (direction === Direction.UP) {
  console.log('go forward')
}
```

### Array

```ts
let ages: number[] = [18, 29, 12, 30]
```

### Tuple

- 元组与数组的不同点：
  - 限制项的数量。
  - 指定每一项的数据类型。

```ts
type nameAgePair = [string, number]
let pair: nameAgePair = ['Jeff', 18]
console.log(pair[0])
console.log(pair[1])
```

## Other Types

### any

- `any` 可以跳过编译器的类型检测，以下的语句 TypeScript 编译器都不会报错或警告：

```ts
let obj: any = { x: 0 }

// 以下的语句 TypeScript 编译器都不会报错或警告
obj.foo()
obj()
obj.bar = 1
obj = 'hi'
let n: number = obj
```

### object

```ts
function log(person: { name: string, age: number }) {
  console.log(person.name)
  console.log(person.age)
}
```

### unknown

> Reference: [The unknown Type in TypeScript](https://mariusschulz.com/blog/the-unknown-type-in-typescript)

- `unkonwn` 表示不知道值类型，所以会禁止访问所有属性和调用所有方法。与 `unknown` 相反的是 `any`。

```ts
let value1: any
console.log(value1.name)
value1.fn()

let value2: unknown
console.log(value2.name) // error
value2.fn() // error
```

- 通过窄化（narrowing）可以 unknown 类型的值不报错。

```ts
function fn(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase())
  }
}
```

- 所有类型的值都能赋值给 `unknown` 类型的变量；`unknown` 类型的值只能赋值给 `unknown` 或 `any` 类型的变量。

### never

- `never` 表示函数永远不会返回一个值。例如：抛出错误、无限循环。

```ts
// 抛出错误
function error(message: string):never {
  throw new Error(message)
}

// 无限循环
function InfiniteLoop():never {
  while (true) {}
}
```
