---
date: 2023-05-31
category: TypeScript
---

# Function

## Typing Function

> Reference: [TypeScript Roadmap](https://roadmap.sh/typescript)

- TypeScript 可以对函数的参数和返回值设置类型。

```ts
// 具有类型的函数声明
function add(a: number, b: number): number {
  return a + b
}

// 具有类型的箭头函数
const multiply = (a: number, b: number): number => {
  return a * b
}

// 定义函数类型
let divide: (a: number, b: number) => number
divide = (a, b) => {
  return a / b
}
```

## Function Overloading

> Reference: [TypeScript Function Overloading](https://dmitripavlutin.com/typescript-function-overloading/)

- 函数重载（function overloading）的特征：
  - 函数名相同
  - 参数个数相同
  - 函数的返回值不同
  - 参数的类型不同

- 使用函数重载需要定义重载签名（overload signature）和实现签名（implementation signature）。

- 不使用函数重载，则需要对函数的参数和返回值进行联合，如下代码所示：

```ts
function greet(person: string | string[]): string | string[] {
  if (typeof person === 'string') {
    return `hi ${person}`
  } else if (Array.isArray(person)) {
    return person.map((name) => `hi ${name}`)
  }
  throw new Error('unable to greet')
}
```

- 使用函数重载，则不需要对函数的参数和返回值进行联合，如下代码所示：

```ts
// 重载签名
function greet(person: string): string
function greet(person: string[]): string[]

// 实现签名
function greet(person: unknown): unknown {
  if (typeof person === 'string') {
    return `hi ${person}`
  } else if (Array.isArray(person)) {
    return person.map((name) => `hi ${name}`)
  }
  throw new Error('unable to greet')
}
```
