---
date: 2023-06-18
category: JavaScript
---

# 深拷贝

## 定义

- 浅拷贝（shallow copy）：如果属性值是原始值类型，则复制原始值；如果属性值是对象类型，则复制堆内存地址。
- 深拷贝（deep copy）：如果属性值是原始值类型，则复制原始值；如果属性值是对象类型，则在堆中复制对象类型。

## 实现

```js
function deepCopy(original) {
  if (Array.isArray(original)) {
    const copy = []
    for (const [index, val] of original.entries()) {
      copy[index] = deepCopy(val)
    }
    return copy
  }
  if (typeof original === 'object' && original !== null) {
    const copy = {}
    for (const [key, val] of Object.entries(original)) {
      copy[key] = deepCopy(val)
    }
    return copy
  }
  // primitives
  return original
}
```
