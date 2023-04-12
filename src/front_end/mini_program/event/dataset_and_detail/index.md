---
date: 2023-02-10
category: 小程序
tag:
- dataset
- detail
---

# `dataset` vs. `detail`

## dataset

### 概念

- 自定义数据，以 `data-` 开头
- `-` 会被转化为大写字母: data-test-number -> testNumber
- (不推荐) 写字母会被转化为小写字母: data-testString -> teststring

### 代码

```html

<button
  bind:tap="testDataset"
  data-test-number="{{ 2 }}"
  data-testString="hello"
>
  test dataset
</button>
```

```js
Page({
  testDataset(evt) {
    // { testNumber: 2, teststring: 'hello' }
    console.log(evt.currentTarget.dataset)
  }
})
```

## detail

### 概念

- 自定义事件所携带的数据

### 代码

_tabOne.wxml_

```html

<my-component bind:testEvent="handleCustomEvent" />
```

_tabOne.js_

```js
Page({
  handleCustomEvent(evt) {
    console.log(evt.detail) // { a: 1 }
  }
})
```

_my-component.wxml_

```html

<view bind:tap="handleTap">my component</view>
```

_my-component.js_

```js
Component({
  methods: {
    handleTap() {
      this.triggerEvent('testEvent', { a: 1 })
    }
  }
})
```
