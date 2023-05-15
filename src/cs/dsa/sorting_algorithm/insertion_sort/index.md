# Insertion Sort

## 原理

> Reference:
> - Book: _A Common-Sense Guide to DSA_: p79-p84
> - Video: [_Learn Insertion Sort in 7 minutes_](https://youtu.be/8mJ-OhcfpYg)

1. 从数组的第二项开始，比较第 `i` 项与第 `i` 项左边的所有项。
2. 如果第 `i` 项比左边的某一项小，则这一项向右移动一位。
3. 如果第 `i` 项比左边的某一项大，则第 `i` 项占用第 `position + 1` 项的位置，然后结束本次比较。
4. `i + 1` 重复执行第一至三步骤，直到 `i` 小于数组的长度。

## 实现

```js
function insertionSort(arr) {
  // `let i = 1`：因为第一项左边没数据，不需要进行比较，所以从第二项开始
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let position = i - 1
    // 第 i 项与左边的数据进行比较
    while (position >= 0) {
      if (temp < arr[position]) {
        // 如果第 i 项比左边的某一项小，则这一项向右移动一位
        arr[position + 1] = arr[position]
      } else {
        // 如果第 i 项比左边的某一项大，则结束本次比较
        break
      }
      position--
    }
    // 处理两种情况：
    // 1. 第 i 项小于左边的所有项，此时 position 等于 -1，第 i 项占用第一项的位置
    // 2. 第 i 项大于左边的某一项，此时 position 大于 -1，第 i 项占用第 position + 1 项的位置
    arr[position + 1] = temp
  }
}
```
