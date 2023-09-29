---
date: 2023-02-04
category: 小程序
tag: WXS
---

# WXS

## 为什么需要 WXS

- 小程序的运行环境分为渲染层和逻辑层，它们分别由两个线程管理。渲染层由 `WebView` 渲染，逻辑层由 `JS core` 线程运行 JS。`WXML` 和 `WXSS` 运行在渲染层，`JS` 运行在逻辑层，渲染层与逻辑层的通信通过微信客户端转发

![communication](./images/communication.png =x400)

- 跨线程通信成本较高，不适合频繁通信的场景。`WXS` 可以看作是运行在 `WebView` 中的 `JS`，优点是不需要跨线程通信

## 语法

### 介绍

- WXS: WeiXin Script

### 模块

- wxs 代码可以编写在 wxml 文件的 `wxs` 标签中或以 `wxs` 为后缀的文件内
- 在 wxml 中调用 wxs 里的函数需要使用 `{{ }}`
- 每一个 `.wxs` 文件和 `wxs` 标签都是一个单独的模块，即数据为模块私有，需要使用 `module.exports` 暴露出数据

_module_a.wxs_

```js
var a = 1

function fn() {
  console.log('fn run...')
}

module.exports = {
  a: a,
  fn: fn
}
```

_index.wxml_

```html
<!-- separate wxs file -->
<wxs src="../../wxs/module_a.wxs" module="moduleA" />

<!-- wxs in wxml -->
<wxs module="moduleB">
var b = 2
  
module.exports = {
  b: b
}
</wxs>

<!-- a: 1 -->
<view>a: {{ moduleA.a }}</view>

<!-- fn run... -->
<view bind:tap="{{ moduleA.fn }}">click me</view>

<!-- b: 2 -->
<view>b: {{ moduleB.b }}</view>
```

- `wxs` 使用 `require` 引用其他 `wxs`

_module_a.wxs_

```js
var a = 1

module.exports = {
  a: a
}
```

_module_b.wxs_

```js
var moduleA = require('./module_a.wxs')

var b = 2

module.exports = {
  a: moduleA.a,
  b: b,
}
```

_index.wxml_

```html
<!-- separate wxs file -->
<wxs src="../../wxs/module_b.wxs" module="moduleB" />

<view>a: {{ moduleB.a }}</view>
<view>b: {{ moduleB.b }}</view>
```

### 数据类型

- `wxs` 支持 `number`, `string`, `boolean`, `object`, `function`, `array`, `date`, `regexp`

### 基础类库

- `wxs` 的基础类库[详情](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/07basiclibrary.html)

## Refs

- [Why need WXS](https://www.zhihu.com/question/64322737/answer/223446446)
- [小程序渲染层与逻辑层](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/framework.html)
- [WXS Reference](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/)
