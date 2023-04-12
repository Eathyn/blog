---
date: 2023-01-06
category: TypeScript
tag:
  - Course - TypeScript Basic
---

# 75 为已有的 JS 文件提供类型声明 - 实现

## Content

- 在 TS 文件中导入 JS 文件时，TS 会自动加载与 JS 文件同名的 `.d.ts` 文件。例如：导入 `utils.js` 同时会加载 `utils.d.ts`
- `declare` 关键字用于类型声明，为其他地方（例如 JS 文件）已存在的变量声明类型，而不是创建一个新的类型
- `interface` / `type` 声明的类型可以省略 `declare`；`let` / `function` 等声明的类型必须用 `declare`

## Code

_utils.d.ts_

```ts
declare function add(n1: number, n2: number): number

interface Person {
  name: string
  age: number
}

type Direction = 'top' | 'left' | 'bottom' | 'right'

declare function changeDirection(direction: Direction): void

interface Point {
  x: number
  y: number
}

type LogPoint = (point: Point) => void
declare const logPoint: LogPoint

export {
  Person,
  Point,
  add,
  changeDirection,
  logPoint,
}
```

_utils.js_

```ts
function add(n1, n2) {
  return n1 + n2
}

function changeDirection(direction) {
  console.log(direction)
}

const logPoint = (point) => {
  console.log(point.x)
  console.log(point.y)
}

export {
  add,
  changeDirection,
  logPoint,
}
```

_index.ts_

```ts
import { add, changeDirection, Person, Point, logPoint } from './utils'

const result = add(1, 2)
console.log(result)

const person: Person = {
  name: 'eathyn',
  age: 25,
}
console.log(person)

changeDirection('top')

let point: Point = {
  x: 1,
  y: 2,
}
logPoint(point)
```

## Refs

1. [为已有的 JS 文件提供类型声明 - 实现](https://www.bilibili.com/video/BV14Z4y1u7pi?p=75&vd_source=9b4e3dff7609ad29f13d886e715862ba)
