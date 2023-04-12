---
date: 2022-01-03
category: implement
tag: random integer
---

# Random Integer

## Intro

生成给定范围内的随机整数，共有四种情况。

## min <= x < max

```js
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
```

过程：

```js
// step-1: 0 <= Math.random() < 1
// step-2: 0 * (max - min) <= Math.random() < 1 * (max - min)
// step-3: 0 * (max - min) + min <= Math.random() < 1 * (max - min) + min
// example: 0 * (26 - 7) + 7 <= Math.random() < 1 * (26 - 7) + 7
```

## min <= x <= max

`min <= x <= max` 相当于 `min <= x < max + 1`

```js
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
```

## min < x < max

`min < x < max` 相当于 `min + 1 <= x < max`

```js
function generateRandomInteger(min, max) {
  min = min + 1
  return Math.floor(Math.random() * (max - min) + min)
}
```

## min < x <= max

`min < x <= max` 相当于 `min + 1 <= x < max + 1`

```js
function generateRandomInteger(min, max) {
  min = min + 1
  max = max + 1
  return Math.floor(Math.random() * (max - min) + min)
}
```

## Refs

[min <= x < max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values)
