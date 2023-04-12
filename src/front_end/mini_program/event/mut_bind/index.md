---
date: 2023-02-13
category: 小程序
tag: 互斥事件
---

# 互斥事件 

## 概念

- mutually exclusive event
- 一个 mut-bind 触发后，如果事件冒泡到其他节点上，其他节点上的 mut-bind 绑定函数不会被触发
- bind 绑定函数和 catch 绑定函数依旧会被触发

## 代码

```html
<view mut-bind:tap="handleTapOuter">
  outer
  <view mut-bind:tap="handleTapInner">inner</view>
</view>
```

```js
Page({
  handleTapOuter() {
    console.log('outer')
  },

  handleTapInner() {
    console.log('inner')
  },
})
```

## Refs

- [互斥事件绑定](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html#%E4%BA%92%E6%96%A5%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A)
