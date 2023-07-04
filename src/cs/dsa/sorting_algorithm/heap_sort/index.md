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

- [使用数组实现堆](/blog/cs/dsa/non-linear_structure/tree/heap/priority_queue/#使用数组实现堆)

### 将二叉堆转化为大根堆

```js {16-17,24-27}
function heapify(arr, arrLen, index) {
  let largestIdx = index
  const leftIdx = 2 * index + 1
  const rightIdx = 2 * index + 2

  // 左子节点存在且左子节点的值大于其父节点的值
  if (leftIdx < arrLen && arr[leftIdx] > arr[largestIdx]) {
    largestIdx = leftIdx
  }
  // 右子节点存在且右子节点的值大于其父节点的值
  if (rightIdx < arrLen && arr[rightIdx] > arr[largestIdx]) {
    largestIdx = rightIdx
  }
  if (index !== largestIdx) {
    [arr[index], arr[largestIdx]] = [arr[largestIdx], arr[index]]
    // 因为交换位置后原来的大根堆可能变成了非大根堆，所以需要把它变为大根堆
    heapify(arr, arrLen, largestIdx)
  }
}

export function heapSort(arr) {
  // 构建大根堆
  const arrLen = arr.length
  // `Math.floor(arr.length / 2) - 1` 是最后一个非叶子节点的索引
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arrLen, i)
  }
}
```

- `heapify(arr, arrLen, largestIdx)` 代码解释：
  - 1 和 6 执行交换之前，6 | 3 | 2 已经形成大根堆。
  ```mermaid
  flowchart TB
    node-12(12) --> node-1(1)
    node-12(12) --> node-10(10)
    node-1(1) --> node-6(6)
    node-1(1) --> node-5(5)
    node-10(10) --> node-9(9)
    node-10(10) --> node-8(8)
    node-6(6) --> node-3(3)
    node-6(6) --> node-2(2)
    
    style node-1 fill:red, stroke:black
    style node-6 fill:pink, stroke:black
    style node-3 fill:pink, stroke:black
    style node-2 fill:pink, stroke:black
  ```
  - 1 和 6 执行交换之后，因为之前由 6 | 3 | 2 形成的大根堆现在变成了 1 | 3 | 2 非大根堆，所以需要执行 `heapify(arr, arrLen, largestIdx)` 把它们重新变成大根堆。
  ```mermaid
  flowchart TB
    node-12(12) --> node-6(6)
    node-12(12) --> node-10(10)
    node-6(6) --> node-1(1)
    node-6(6) --> node-5(5)
    node-10(10) --> node-9(9)
    node-10(10) --> node-8(8)
    node-1(1) --> node-3(3)
    node-1(1) --> node-2(2)
    
    style node-1 fill:red, stroke:black
    style node-6 fill:pink, stroke:black
    style node-3 fill:pink, stroke:black
    style node-2 fill:pink, stroke:black
  ```
  - 1 | 3 | 2 执行 `heapify(arr, arrLen, largestIdx)` 之后。
  ```mermaid
  flowchart TB
  node-12(12) --> node-6(6)
  node-12(12) --> node-10(10)
  node-6(6) --> node-3(3)
  node-6(6) --> node-5(5)
  node-10(10) --> node-9(9)
  node-10(10) --> node-8(8)
  node-3(3) --> node-1(1)
  node-3(3) --> node-2(2)
  
  style node-1 fill:red, stroke:black
  style node-6 fill:pink, stroke:black
  style node-3 fill:pink, stroke:black
  style node-2 fill:pink, stroke:black
  ```

### 将大根堆进行堆排序
