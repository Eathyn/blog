---
date: 2023-07-06
category: 微信小程序
---

# 模板

> Reference: [模板](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/template.html)

- 通过 `name` 属性指定模板（template）的名字。通过 `import` 和 `is` 属性引用模板。通过 `data` 属性传递模板需要的值。

::: code-tabs
@tab message.wxml
```wxml
<template name="message">
  <view>name: {{ name }}</view>
  <view>age: {{ age }}</view>
</template>
```

@tab index.wxml
```wxml
<import src="/pages/message/message.wxml"></import>

<template is="message" data="{{ ...person }}" />
```

@tab index.js
```js
Page({
  data: {
    person: {
      name: 'Eathyn',
      age: 26,
    }
  },
})
```
:::
