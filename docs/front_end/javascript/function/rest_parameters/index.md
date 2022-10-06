# Rest Parameters

## 定义

- 将剩余的形参收集到一个数组中

## 注意

- 用于函数定义
- 剩余形参必须放到函数参数的最后

## 例子

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
