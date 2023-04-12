---
date: 2023-03-07
category: DSA
tag:
- hash table
---

# Hash Table

## Superiority

哈希表访问数据的时间复杂度是 O(1)。

## Concept

哈希化（hashing）：将所有字符串转化为数字的过程。
哈希函数（hash function）：进行哈希化的函数。
根据计算机科学家计算出的规律，保存 7 个数据就需要 10 个存储空间。即负荷系数（load factor）为 0.7。

## Application

### is subarray

> Reference
> 
> Book: A Common-Sense Guide to Data Structures and Algorithms 2nd
> 
> Page: 127

判断数组 A 是否为数组 B 的子数组，即数组 B 是否包含了数组 A 的每一个项。

常见的方法是嵌套 for 循环，这样会导致该算法的时间复杂度为 O(M * N)。M 是数组 A 的长度，N 是数组 B 的长度。代码如下：

```js
function isSubArray(array1, array2) {
  let largerArray
  let smallerArray

  if (array1.length > array2.length) {
    largerArray = array1
    smallerArray = array2
  } else {
    largerArray = array2
    smallerArray = array1
  }

  for (let i = 0; i < smallerArray.length; i++) {
    let isSubArray = false
    for (let j = 0; j < largerArray.length; j++) {
      if (smallerArray[i] === largerArray[j]) {
        isSubArray = true
        break
      }
    }
    // 如果短数组的某一项没有出现在长数组中，就说明短数组不是长数组的子数组
    // 此时直接返回 false，放弃短数组未进行判断的项，减少计算量
    if (!isSubArray) {
      return false
    }
  }
  return true
}
```

利用哈希表，可以将该算法的时间复杂度降为 O(N)。代码如下：

```js
function isSubArray(array1, array2) {
  let largerArray
  let smallerArray
  const hashTable = {}

  if (array1.length > array2.length) {
    largerArray = array1
    smallerArray = array2
  } else {
    largerArray = array2
    smallerArray = array1
  }

  // 建立哈希表
  // { a: true, b: true, c: true, d: true, e: true, f: true }
  for (let i = 0; i < largerArray.length; i++) {
    hashTable[largerArray[i]] = true
  }

  // 如果短数组中有一项不存在于哈希表中，则说明短数组有一项不存在于长数组中
  for (let i = 0; i < smallerArray.length; i++) {
    if (!hashTable[smallerArray[i]]) {
      return false
    }
  }
  return true
}
```
