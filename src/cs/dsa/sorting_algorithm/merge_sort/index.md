---
date: 2023-06-06
category: DSA
---

# Merge Sort

## 原理

> Reference
> - [Learn Merge Sort in 13 minutes](https://youtu.be/3j0SWDX4AtU)
> - [Merge Sort: step-by-step guide](https://youtu.be/e5ik2UGjHBk)
> - [Merge Sort Animation](https://youtube.com/shorts/dZhFmu19N9U?feature=share)

## 实现

> Reference
> - [算法主要实现](https://youtu.be/3j0SWDX4AtU)
> - [算法优化](https://www.programiz.com/dsa/merge-sort)

```js
function mergeSort(arr, startIdx = 0, endIdx = arr.length - 1) {
  if (startIdx === endIdx) {
    return
  }

  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  mergeSort(arr, startIdx, middleIdx)
  mergeSort(arr, middleIdx + 1, endIdx)
  merge(arr, startIdx, endIdx, middleIdx)
  return arr
}

function merge(arr, startIdx, endIdx, middleIdx) {
  let arrIdx = startIdx
  let leftArrIdx = 0
  let rightArrIdx = 0

  const leftArr = arr.slice(startIdx, middleIdx + 1)
  const rightArr = arr.slice(middleIdx + 1, endIdx + 1)

  // 比较 leftArrIdx 和 rightArrIdx 指向的值，把小的值放到 arr 的正确位置中
  while (leftArrIdx < leftArr.length && rightArrIdx < rightArr.length) {
    if (leftArr[leftArrIdx] <= rightArr[rightArrIdx]) {
      arr[arrIdx] = leftArr[leftArrIdx]
      leftArrIdx++
    } else {
      arr[arrIdx] = rightArr[rightArrIdx]
      rightArrIdx++
    }
    arrIdx++
  }

  // 右边的项都放到正确的位置，左边的项都没有或者一部分没有放到正确位置。
  // 因为左边的项已经排序了，所以按顺序放到数组里就行
  while (leftArrIdx < leftArr.length) {
    arr[arrIdx] = leftArr[leftArrIdx]
    arrIdx++
    leftArrIdx++
  }

  // 左边的项都放到正确的位置，右边的项都没有或者一部分没有放到正确位置。
  // 因为右边的项已经排序了，所以按顺序放到数组里就行
  while (rightArrIdx < rightArr.length) {
    arr[arrIdx] = rightArr[rightArrIdx]
    arrIdx++
    rightArrIdx++
  }
}
```

## 时间复杂度

- 最好：O(N * logN)
- 最坏：O(N * logN)
- 平均：O(N * logN)

## 空间复杂度

- O(N)
