---
date: 2023-07-12
category: sorting algorithm
---

# Bucket Sort

## 原理

> Reference
> - [Bucket Sort Algorithm](https://www.programiz.com/dsa/bucket-sort)

1. 将数据放到对应的桶里
2. 对每个桶采取合适的排序算法
3. 将每个桶里的数据整合起来

## 实现

```js
function bucketSort(arr) {
  // 创建所有桶，并将值初始化为空数组
  const arrLen = arr.length
  const buckets = []
  for (let i = 0; i < arrLen; i++) {
    buckets[i] = []
  }

  // `arr` 的每一项乘 `arrLen`，取整数部分并放到对应的桶里
  arr.forEach((value) => {
    const bucketIdx = Math.trunc(value * arrLen)
    buckets[bucketIdx].push(value)
  })

  // 每个桶采用合适这个桶的排序算法
  buckets.forEach((bucket) => bucket.sort((a, b) => a - b))

  // 把每个桶的数据整合回 `arr`
  let arrIdx = 0
  buckets.forEach((bucket) => bucket.forEach((value) => {
    arr[arrIdx] = value
    arrIdx++
  }))
}
```

## 时间复杂度

> Reference
> - [Bucket Sort Algorithm](https://www.programiz.com/dsa/bucket-sort)

### 最好的情况

- 最好的情况：每个桶分配了数量几乎相等的数据项。

- O(n+k)
  - O(n): 创建桶并为各个桶分配数据项
  - O(k): 对桶里的数据项进行排序，该排序算法的时间复杂度是线性的

### 最坏的情况

- 最坏的情况：其中一个桶分配了几乎所有数据项。

- O(n^2)

## 空间复杂度

- O(n+k)
  - n: 数组的数据项的数量
  - k: 桶的数量
