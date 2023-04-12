---
date: 2021-02-22
category: Browser
tag: load and render
---

# Page Loading and Rendering

## Loading Process

1. DNS 解析 : 域名变为 IP 地址
2. 浏览器根据 IP 地址向服务器发送请求
3. 服务器处理请求，向浏览器发送响应

## Rendering Process

1. 根据 HTML 生成 DOM 树
2. 根据 CSS 生成 CSSOM
3. 将 DOM 树和 CSSOM 整合成 Render 树
4. 根据 Render 树渲染页面
5. 遇到 `<script>` 则暂停渲染，执行完 JS 后再继续渲染

- Reading:
  - [How browser rendering works — behind the scenes](https://blog.logrocket.com/how-browser-rendering-works-behind-scenes/)
  - [How the browser renders a web page? — DOM, CSSOM, and Rendering](https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969)

## Loading API

- `DOMContentLoaded` : HTML 已加载，其他资源未加载
- `load` : HTML 和其他资源都已加载
- `beforeunload` : 用户正要离开页面，可用于检查用户是否保存表单数据并提醒用户是否要离开页面
- `unload` : 用户几乎要离开页面，可用于初始化操作或发送分析数据

## Attentions

### 为什么把 css 放在 head 中

避免重新渲染 Render 树

### 为什么把 js 放在 body 最后

确保 js 可以操作 DOM

_index.html_

```html
<body>
  <script src="index.js"></script>
  <div class="test">hello</div>
</body>
```

_index.js_

```js
const div = document.querySelector('.test')
console.log(div) // null
```

## Refs

- [为什么把 css 放在 head 中](https://stackoverflow.com/a/1642259/9863318)
- [为什么把 js 放在 body 最后](https://qr.ae/pvPlyJ)
- [Page Loading APIs](https://javascript.info/onload-ondomcontentloaded)
