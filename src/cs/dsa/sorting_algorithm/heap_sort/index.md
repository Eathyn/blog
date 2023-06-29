---
date: 2023-06-24
category: DSA
---

# Heap Sort

## 原理

> Reference:
> - [heap sort in 4 minutes](https://youtu.be/2DmK_H7IdTo)
> - [heap sort | GeeksForGeeks](https://youtu.be/MtQL_ll5KhQ)
> - [heap sort algorithm](https://www.programiz.com/dsa/heap-sort)

## 实现

### 将数组想象为二叉堆

### 将二叉堆转化为大根堆

```js
function heapify(arr, rootIdx = 0) {
  const leftChildIdx = 2 * rootIdx + 1
  const rightChildIdx = 2 * rootIdx + 2
  const root = arr[rootIdx]
  const leftChild = arr[leftChildIdx]
  const rightChild = arr[rightChildIdx]

  // 过滤空的左右子节点
  const nonUndefinedData = [
    { idx: rootIdx, value: root },
    { idx: leftChildIdx, value: leftChild },
    { idx: rightChildIdx, value: rightChild },
  ].filter((item) => item.value !== undefined)

  // 从当前节点、左子节点、右子节点中找到最大值
  const largestValue = Math.max(...(nonUndefinedData.map((item) => item.value)))
  // 如果当前节点不是最大值，则交换当前节点和最大值节点
  if (largestValue !== root) {
    const largest = nonUndefinedData.find((item) => item.value === largestValue)
    const largestIdx = largest.idx
    ;[arr[rootIdx], arr[largestIdx]] = [arr[largestIdx], arr[rootIdx]]
  }

  // 如果左子节点或右子节点为空，则到达基线条件（base case）
  if (leftChild === undefined || rightChild === undefined) {
    return
  }
  // 如果左子节点和右子节点都不为空，则对左子节点和右子节点进行递归操作
  heapify(arr, leftChildIdx)
  heapify(arr, rightChildIdx)
}
```

### 将大根堆进行堆排序
