---
date: 2023-05-31
category: TypeScript
---

# Narrowing

## 定义

- 窄化（narrowing）指的是将一个类型缩小为更具体的类型。例如将 `any` 缩小为 `number`。

- 有很多种方式可以实现窄化，例如 `instanceof`，`typeof`，`truthiness`，`equality` 等。

## typeof

```ts
function print(message: string | number) {
  if (typeof message === 'string') {
    console.log(message.toUpperCase()) // message: string
  } else {
    console.log(message) // message: number
  }
}
```

## instanceof

```ts
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString()) // x: Date
  } else {
    console.log(x.toUpperCase()) // x: string
  }
}
```

## Equality Narrowing

```ts
function fn(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase()) // x: string
    console.log(y.toUpperCase()) // y: string
  } else {
    console.log(x) // x: string | number
    console.log(y) // y: string | boolean
  }
}
```

## Truthiness Narrowing

```ts
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`; // numUsersOnline: number
  }
  return "Nobody's here. :(";
}
```

## Type Predicate

- 定义：`type predicate` 是返回布尔值的函数，该函数有特殊的返回类型语法。

- 在 `reverseString` 中，`x` 的类型被识别为 `unknown`，所以调用 `split` 方法 TypeScript 编译器会报错。

```ts
function isString(x: unknown) {
  return typeof x === 'string'
}

function reverseString(x: unknown) {
  if (isString(x)) {
    return x.split('').reverse().join('') // x: unknown
  } else {
    return null
  }
}
```

- `x is string` 表示如果 `isString` 函数返回 `true`，则 `x` 的类型为 `string`，所以在 `reverseString` 函数 TypeScript 编译器才能识别出 `x` 的类型是 `string`。

```ts
function isString(x: unknown): x is string {
  return typeof x === 'string'
}

function reverseString(x: unknown) {
  if (isString(x)) {
    return x.split('').reverse().join('') // x: string
  } else {
    return null
  }
}
```
