---
date: 2023-05-08
category: DSA
tag:
  - sorting
  - selection sort
---

# Selection Sort

## 原理

> reference: _A Common-Sense Guide to DSA_: p63-p71

从左到右进行遍历，获取最小值后与最开始进行遍历的地方交换值。

![4,2,7,1,3](./_image/selection_sort.gif)

## 实现

> reference: _A Common-Sense Guide to DSA_: p63-p71

- `i < arr.length - 1`：最后一项不需要排序

```js
function insertionSort(arr) {
  // `i < arr.length - 1`：最后一项不需要排序
  for (let i = 0; i < arr.length - 1; i++) {
    // `lowestNumberIndex`：每次最开始遍历的地方的索引
    let lowestNumberIndex = i
    // 找出最小项的索引值
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumberIndex]) {
        lowestNumberIndex = j
      }
    }
    // 如果最小项的索引值是每次最开始遍历的地方的索引，则不需要交换
    if (lowestNumberIndex !== i) {
      [arr[lowestNumberIndex], arr[i]] = [arr[i], arr[lowestNumberIndex]]
    }
  }
}
```

## 时间复杂度

> reference: [selection sort in wikipedia](https://en.wikipedia.org/wiki/Selection_sort#Complexity)

- 输入：`[4, 2, 7, 1, 3]`
  - 第一轮：比较 4 次，即 n - 1 次
  - 第二轮：比较 3 次，即 n - 2 次
  - 第三轮：比较 2 次，即 n - 3 次
  - 第四轮：比较 1 次，即 n - 4 次

$$
\begin{aligned}
执行比较的总次数
&= (n - 1) + (n - 2) + ... + 2 + 1 \\
&= ((n - 1) + 1) \times \frac{n - 1}{2} \\
&= n \times \frac{n - 1}{2} \\
&= \frac{n ^ 2 - n}{2} \\
&= \frac{1}{2}n^2 - \frac{1}{2}n \\
\end{aligned}
$$

- 因为最好的情况（升序）和最坏的情况（降序）都执行相同次数的比较操作，所以算法复杂度都为 O($n^2$)。
