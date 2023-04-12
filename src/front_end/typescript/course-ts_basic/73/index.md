---
date: 2023-01-06
category: TypeScript
tag:
  - Course - TypeScript Basic
---

# 73 在 TS 文件中使用声明文件中的类型

## Content

- 如果多个 `.ts` 文件中使用了同一个类型，那么可以把这个类型提取出来放到 `.d.ts` 文件中
- 通过 ES Modules 导出和导入类型

_types.d.ts_

```ts
export interface Person {
  name: string
  age: number
}
```

_index.ts_

```ts
import { Person } from './types'

let person: Person = {
  name: 'eathyn',
  age: 25,
}

console.log(person)
```

## Refs

1. [在 TS 文件中使用声明文件中的类型](https://www.bilibili.com/video/BV14Z4y1u7pi/?p=73&vd_source=9b4e3dff7609ad29f13d886e715862ba)
