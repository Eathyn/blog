---
date: 2022-09-21
category: CS others
---

# 副作用 Side Effect

## Content

- 当函数访问一个不属于该函数作用域的变量时，就可能会产生副作用

```js
const arr = [1, 2, 3]

function log(arr) {
  console.log(arr)
}

function sort(arr) {
  // 修改了不属于这个作用域的变量 arr，导致了 log 函数的结果不一致，即 sort 函数产生了副作用
  arr.sort((a, b) => b - a)
}

log(arr) // 1,2,3
sort(arr)
log(arr) // 3,2,1
```

## Refs

- [side effect](https://www.thisdot.co/blog/understanding-side-effects-in-vuejs)
