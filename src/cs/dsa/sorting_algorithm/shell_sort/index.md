---
date: 2023-06-01
category: DSA
tag: sorting
---

# Shell Sort

## 原理

> Reference: [shell sort step-by-step guide](https://youtu.be/SCBf7aqKQEY)

## 代码实现

```js
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2)
  while (gap > 0) {
    for (let i = 0, end = i + gap; end < arr.length; i++, end++) {
      if (arr[i] > arr[end]) {
        [arr[i], arr[end]] = [arr[end], arr[i]]
        if (end % gap === 0) {
          // 比较当前值与距离前面 gap * i 的值
          for (let j = i; j > 0 && j - gap >= 0; j -= gap) {
            if (arr[j] < arr[j - gap]) {
              [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]]
            } else {
              // arr[j] 比 arr[j-gap] 大，则不需要比较更前面的值，因为 arr[j-gap] 比 arr[j-gap*2]、arr[j-gap*3] 大
              break
            }
          }
        }
      }
    }
    gap = Math.floor(gap / 2)
  }
}
```
