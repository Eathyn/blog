---
date: 2023-07-13
category: sorting algorithm
---

# Radix Sort

## 原理

> Reference
> - [Radix Sort Algorithm Introduction in 5 Minutes](https://youtu.be/XiuSW_mEn7g)
> - [Radix Sort | GeeksforGeeks](https://youtu.be/nu4gDuFabIM)

1. 获取数组的最大值，计算最大的位数。例如，如果最大值为 788，那么最大位数就是百位。
2. 从个位开始直至最大的位数，使用计数排序。

## 实现

- `for (let place = 1; max / place > 1; place *= 10)`: 从个位开始进行计数排序。

```js
export function radixSort(arr) {
  const arrLen = arr.length

  // 获取数组中的最大值
  const max = getMax(arr)

  // 从个位开始进行计数排序
  for (let place = 1; max / place > 1; place *= 10) {
    countSort(arr, arrLen, place)
  }
}

function getMax(arr) {
  const arrLen = arr.length
  let max = arr[0]
  for (let i = 1; i < arrLen; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

function countSort(arr, arrLen, place) {
  // 初始化 count ，并将每一项都赋值为 0
  const max = getMax(arr)
  const count = Array(max + 1)
  for (let i = 0; i < count.length; i++) {
    count[i] = 0
  }

  // 累计出现的次数
  for (let i = 0; i < arrLen; i++) {
    const number = Math.trunc((arr[i] / place) % 10)
    count[number]++
  }

  // 每一项的值加上前一项的值
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i] + count[i - 1]
  }

  const output = []
  // 必须从数组的末尾开始执行，因为需要确保这个算法是稳定的（stable）
  for (let i = arrLen - 1; i >= 0; i--) {
    const countIdx = Math.trunc((arr[i] / place) % 10)
    const outputIdx = count[countIdx] - 1
    output[outputIdx] = arr[i]
    count[countIdx]--
  }

  // 把 output 各项的值赋给 arr
  for (let i = 0; i < arrLen; i++) {
    arr[i] = output[i]
  }
}
```
