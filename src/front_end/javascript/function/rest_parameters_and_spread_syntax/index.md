---
date: 2022-04-24
category: JavaScript
tag:
- rest parameter
- spread syntax
---

# Rest Parameters and Spread Syntax

## Rest Parameters

### 定义

- 将剩余的形参收集到一个数组中

### 注意

- 用于函数定义
- 剩余形参必须放到函数参数的最后

### 例子

_代码_

```js
function func(a, b, ...args) {
  console.log(a)
  console.log(b)
  console.log(args)
}

func(1, 2, 3, 4, 5, 6)
```

_结果_

> a: 1
>
> b: 2
>
> args: 3, 4, 5, 6

## Spread Syntax

### 定义

- 将可迭代对象(iterable)展开为多个实参或元素

### 注意

- 用于函数调用

### 例子

_代码_
```js
Math.max(1, 2, 3)
Math.max(...[1, 2, 3])
```
