---
date: 2023-05-22
category: DSA
tag:
  - sorting
  - quick sort
---

# Quick Sort

## 原理

> Reference: A Common-Sense Guide to DSA: p199-202

1. 分区（partition）：选择一个基准点（pivot），排序后基准点左边（即左分区）的数据都小于它，基准点右边（即右分区）的数据都大于它。
2. 对左分区和右分区递归地执行步骤一，直到左分区和右分区只有一个元素。

::: tip 翻译
- pivot: a fixed point supporting something that turns or balances.
- partition: one of the parts or sections of a whole.
:::

## 分区

### 原理

> Reference: A Common-Sense Guide to DSA: p199-202

1. 如果 leftIndex 指向的值小于 pivotIndex 指向的值，则 leftIndex 指针向右移动一位。
2. 如果 rightIndex 指向的值大于 pivotIndex 指向的值，则 rightIndex 指针向左移动一位。
3. 如果 leftIndex 小于 rightIndex，则交换 leftIndex 指向的值和 rightIndex 指向的值。然后递归执行赋值操作、步骤一、步骤二。
4. 如果 leftIndex 大于或等于 rightIndex，则交换 leftIndex 指向的值和 pivotIndex 指向的值，完成排序，这时候 pivotIndex 指向的值比左分区的所有值大，比右分区的所有值小，即左分区的所有值比右分区的所有值小。

### 图解

> Reference: A Common-Sense Guide to DSA: p199-202

- pivotIndex 指向最后一个值（3），leftIndex 指向第一个值（0），rightIndex 指向 pivotIndex 左边的值（6）。

![](./_image/slide-1.png)

- 因为 leftIndex 指向的值（0）小于 pivotIndex 指向的值（3），所以 leftIndex 向右移动一位。

![](./_image/slide-2.png)

- 因为 leftIndex 指向的值（5）大于 pivotIndex 指向的值（3），所以 leftIndex 暂停移动。

![](./_image/slide-2.png)

- 因为 rightIndex 指向的值（6）大于 pivotIndex 指向的值（3），所以 rightIndex 向左移动一位。

![](./_image/slide-3.png)

- 因为 rightIndex 指向的值（1）小于 pivotIndex 指向的值（3），所以 rightIndex 暂停移动。

![](./_image/slide-3.png)

- 因为 leftIndex（1）小于 rightIndex（3），所以 leftIndex 指向的值（5）与 rightIndex 指向的值（1）交换位置。

![](./_image/slide-4.png)

- 因为 leftIndex 指向的值（1）小于 pivotIndex 指向的值（3），所以 leftIndex 向右移动一位。

![](./_image/slide-5.png)

- 因为 leftIndex 指向的值（2）小于 pivotIndex 指向的值（3），所以 leftIndex 向右移动一位。

![](./_image/slide-6.png)

- 因为 leftIndex 指向的值（5）大于 pivotIndex 指向的值（3），所以 leftIndex 暂停移动。

![](./_image/slide-6.png)

- 因为 rightIndex 指向的值（5）大于 pivotIndex 指向的值（3），所以 rightIndex 向左移动一位。

![](./_image/slide-7.png)

- 因为 rightIndex 指向的值（2）小于 pivotIndex 指向的值（3），所以 rightIndex 暂停移动。

![](./_image/slide-7.png)

- 因为 leftIndex（3）大于 rightIndex（2），所以 leftIndex 指向的值（5）与 pivotIndex 指向的值（3）交换位置。

![](./_image/slide-8.png)

- 算法完成。此时 leftIndex 左边（即左分区）的数据（0,1,2）都小于 leftIndex 指向的值（3）；leftIndex 右边（即右分区）的数据（6,5）都大于 leftIndex 指向的值（3）。

![](./_image/slide-9.png)

### 实现

> Reference: A Common-Sense Guide to DSA: p202-205

```js
function partition(arr, leftIdx = 0, rightIdx = arr.length - 2) {
  // 最后一个值设定为 pivotIndex
  const pivotIndex = arr.length - 1

  // leftIndex 为第一个值的索引
  let leftIndex = leftIdx

  // rightIndex 为倒数第二个值的索引
  let rightIndex = rightIdx

  // 如果 leftIndex 指向的值小于 pivotIndex 指向的值，则 leftIndex 指针向右移动一位
  while (leftIndex < arr.length - 1 && arr[leftIndex] < arr[pivotIndex]) {
    leftIndex++
  }

  // 如果 rightIndex 指向的值大于 pivotIndex 指向的值，则 rightIndex 指针向左移动一位
  while (rightIndex > -1 && arr[rightIndex] > arr[pivotIndex]) {
    rightIndex--
  }

  if (leftIndex < rightIndex) {
    // 如果 leftIndex 小于 rightIndex，则交换 leftIndex 指向的值和 rightIndex 指向的值
    [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]
    // 递归执行赋值操作、左指针的移动操作、右指针的移动操作
    partition(arr, leftIndex, rightIndex)
  } else {
    // 如果 leftIndex 大于或等于 rightIndex，则交换 leftIndex 指向的值和 pivotIndex 指向的值
    // 完成排序，这时候 pivotIndex 指向的值比左分区的所有值大，比右分区的所有值小，即左分区的所有值比右分区的所有值小。 
    [arr[leftIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[leftIndex]]
  }
}
```

## 递归执行分区


