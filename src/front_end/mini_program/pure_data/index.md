---
date: 2023-02-14
category: 小程序
tag: 纯数据
---

# 纯数据 Pure Data

## 引入原因

- 提升页面更新性能

## 概念

- 当 data 中的某些字段不需要展示在页面上，也不需要传递给其他组件的时候，可以使用纯数据字段

## 使用

### 基本使用

_custom-comp.wxml_

```html
<view>custom comp</view>

<view>a: {{ a }}</view>
<!-- 纯数据字段在 wxml 中不显示 -->
<view>b: {{ _b }}</view>
```

_custom-comp.js_

```js
Component({
  options: {
    // 定义满足纯数据字段的正则表达式 (推荐在 json 中配置)
    pureDataPattern: /^_/
  },
  data: {
    a: 1,
    _b: 2,  // pure data
  },
  lifetimes: {
    attached() {
      // 通过 `this.data` 可以访问纯数据
      console.log('_b: ', this.data._b) // 2
    },
  },
})
```

_custom-comp.json_

- 定义满足纯数据字段的正则表达式

```json
{
  "component": true,
  "pureDataPattern": "^_"
}
```

### 监听纯数据字段

_custom-comp.wxml_

```html
<button bind:tap="changeB">change b</button>
```

_custom-comp.js_

```js
Component({
  options: {
    pureDataPattern: /^_/
  },
  observers: {
    _b: function(val) {
      console.log(val)
    },
  },
  data: {
    _b: 2,  // pure data
  },
  methods: {
    changeB() {
      this.setData({
        _b: 100,
      })
    }
  },
})
```

## Refs

- [纯数据](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/pure-data.html)
