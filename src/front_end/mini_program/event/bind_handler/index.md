---
date: 2023-02-12
category: 小程序
tag: 绑定事件
---

# 绑定事件

- 事件绑定函数可以是一个数据绑定
- 页面的 this.data.handlerName 必须是一个字符串，指定事件处理函数名；如果它是个空字符串，则这个绑定会失效

```html
<button bind:tap="handleTapOne">button 1</button>
<button bind:tap="{{ handleTapTwo }}">button 2</button>
```

```js
Page({
  data: {
    handleTapTwo: 'funcA',
  },
  
  handleTapOne() {
    console.log('one')
  },

  funcA() {
    console.log('A')
  },

  funcB() {
    console.log('B')
  },
})
```
