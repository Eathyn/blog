# 获取全局数据

- 在 app.js 的 `App` 中定义的数据可全局访问

```js
// app.js
App({
  globalData: 'hi',
})
```

```js
// page/index/index.js
Page({
  data: {
    result: true,
  },

  onLoad() {
    const app = getApp()
    console.log(app.globalData)
  }
})
```

## 参考
- [get global data](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html)
