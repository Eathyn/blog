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

```js
function mergeSort(arr, sortedArr = [], startIdx = 0, endIdx = arr.length - 1) {
  if (startIdx === endIdx) {
    return
  }

  const middleIdx = Math.floor((startIdx + endIdx) / 2)
  mergeSort(arr, sortedArr, startIdx, middleIdx)
  mergeSort(arr, sortedArr, middleIdx + 1, endIdx)
  merge(arr, sortedArr, startIdx, endIdx, middleIdx)
  return sortedArr
}

function merge(arr, sortedArr, startIdx, endIdx, middleIdx) {
  let arrIdx = startIdx
  let leftIdx = startIdx
  let rightIdx = middleIdx + 1

  // 比较 leftIdx 和 rightIdx 指向的值，把小的值放到 sortedArr 的正确位置
  while (leftIdx <= middleIdx && rightIdx <= endIdx) {
    if (arr[leftIdx] <= arr[rightIdx]) {
      sortedArr[arrIdx] = arr[leftIdx]
      leftIdx++
    } else {
      sortedArr[arrIdx] = arr[rightIdx]
      rightIdx++
    }
    arrIdx++
  }

  // 右边的项都放到正确的位置，左边的项都没有或者一部分没有放到正确位置。
  // 因为左边的项已经排序了，所以按顺序放到数组里就行
  while (leftIdx <= middleIdx) {
    sortedArr[arrIdx] = arr[leftIdx]
    arrIdx++
    leftIdx++
  }

  // 左边的项都放到正确的位置，右边的项都没有或者一部分没有放到正确位置。
  // 因为右边的项已经排序了，所以按顺序放到数组里就行
  while (rightIdx <= endIdx) {
    sortedArr[arrIdx] = arr[rightIdx]
    arrIdx++
    rightIdx++
  }
  
  // 改变原来的数组
  for (const index in sortedArr) {
    arr[index] = sortedArr[index]
  }
}
```
