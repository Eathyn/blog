---
date: 2023-07-09
category: DSA
---

# Counting Sort

## 原理

> Reference:
> - [Counting Sort Algorithm](https://www.programiz.com/dsa/counting-sort)
> - [Counting Sort | GeeksforGeeks](https://youtu.be/7zuGmKfUt7s)
> - [Counting Sort Complexity Analysis](https://en.wikipedia.org/wiki/Counting_sort#Complexity_analysis)

## 实现

```js
function countingSort(arr) {
  // 找到数组中的最大值
  const max = Math.max(...arr)

  // 创建长度为 `max+1` 的新数组，初始值为 0
  const count = Array(max + 1).fill(0)

  // 记录 `arr` 中各项出现的次数
  arr.forEach((value) => count[value]++)

  // 每一项的值修改为当前值加前一项的值
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i - 1] + count[i]
  }

  const output = []
  // 如果从数组的末尾开始执行，那么算法就是稳定的（stable）
  for (let i = arrLen - 1; i >= 0; i--) {
    // 将 `arr` 各项的值作为 `count` 的索引，获取 `count` 对应的值。
    // `count 对应的值 - 1` 作为 output 的索引，把 arr 的项作为这个索引的值。
    const value = arr[i]
    const index = count[value] - 1
    output[index] = value
    // 设置完 output 的值后，对应的 count 值减一。
    count[value]--
  }

  output.forEach((value, index) => arr[index] = value)
}
```

## 时间复杂度

- O(n + k)
  - O(n): 找到 `arr` 数组中的最大值
  - O(k): 将 `count` 数组每一项都设置为 0
  - O(n): 记录 `arr` 中各项出现的次数
  - O(k-1): 每一项的值修改为当前值加前一项的值
  - O(n): 计算 `output` 数组各项的值

::: tip
- n : `arr` 的长度
- k : `count` 的长度
- 最好、最坏和平均的时间复杂度都一样
:::

## 空间复杂度

- O(k + n)
  - O(k + 1): `count` 数组所占的空间
  - O(n): `output` 数组所占的空间

::: tip
- n : `arr` 的长度
- k : `count` 的长度
:::
