---
date: 2022-02-10
category: implement
tag: concurrency control
---

# Concurrency Control

## 代码解析

### 函数参数

- `poolLimit`：最大并发值
- `iterable`：数据集
- `iteratorFn`：数据处理函数

```js
async function asyncPool(poolLimit, iterable, iteratorFn) {}
```

### 数值存储

`ret` 变量作为返回值，方便调用 `asyncPool` 之后通过 `then` 获取所有数据。`executing` 变量表示正在执行的 `Promise`。代码如下：

```js
async function asyncPool(poolLimit, iterable, iteratorFn) {
  const ret = []
  const executing = new Set()
  // ...
  return ret
}
```

### 核心代码

- [1] 使用 `for...of` 遍历数据集。

- [2] 定义一个 `promise`，在 `then` 中执行 `iteratorFn`，参数是 `item` 和 `iterable`。

- [3] `ret` 和 `executing` 把刚才定义的 `promise` 保存起来。

- [4] 定义 `clean` 函数，无论 `promise` 成功或失败都调用 `clean` 函数将 `executing` 中的这个 `promise` 删除。

- [5] 当正在执行的 `promise` 的数量（`executing.size`）大于最大并发值（`poolLimit`）时，使用 `await Promise.race(executing)` 确保 `executing` 中有一个 `promise` 的状态不是 `pending` 后才继续下一次 `for...of` 遍历，这是并发控制的核心语句。

```js
async function asyncPool(poolLimit, iterable, iteratorFn) {
  const ret = []
  const executing = new Set()
  // [1]
  for (const item of iterable) {
    
    // [2]
    const p = Promise.resolve().then(() => iteratorFn(item, iterable))
    
    // [3]
    ret.push(p)
    executing.add(p)
    
    // [4]
    const clean = () => executing.delete(p)
    p.then(clean).catch(clean)
    
    // [5]
    if (executing.size >= poolLimit) {
      await Promise.race(executing)
    }
  }
  return Promise.all(ret)
}
```

## Refs

- [async-pool library](https://github.com/rxaviers/async-pool/tree/1.x)
