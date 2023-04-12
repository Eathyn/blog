---
date: 2023-02-12
category: 小程序
tag: 阻止事件冒泡
---

# 阻止事件冒泡

## 概念
- `catch` 绑定的事件可以阻止事件冒泡

## 代码
```html
<view bind:tap="handleTapOuter">
  outer <text catch:tap="handleTapInner">inner</text>
</view>
```

```js
Page({
  handleTapOuter() {
    console.log('outer')
  },

  handleTapInner() {
    console.log('inner')
  }
})
```

## 总结

- bind:event : 冒泡
- catch:event : 阻止冒泡
- capture-bind : 捕获
- capture-catch : 阻止捕获和冒泡
