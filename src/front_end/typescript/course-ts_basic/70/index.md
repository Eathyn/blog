---
date: 2023-01-05
category: TypeScript
tag:
  - Course - TypeScript Basic
---

# 70 TS 中的两种文件类型

## .ts

- 可以包含类型信息和可执行代码
- 可以被 ts 编译器编译为 js 文件

```ts
interface Person {
  name: string
  age: number
}

function fn() {}
```

## .d.ts

- 只能包含类型信息，不能包含可执行代码
- 不可以被 ts 编译器编译为 js 文件

```ts
interface Person {
  name: string
  age: number
}

// TS1046: Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.
function fn() {}
```

## Refs

- [TS 中的两种文件类型](https://www.bilibili.com/video/BV14Z4y1u7pi?p=70&vd_source=9b4e3dff7609ad29f13d886e715862ba)
