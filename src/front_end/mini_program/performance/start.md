---
date: 2023-06-06
category: 微信小程序
---

# 启动性能

- 启动性能：让用户可以更快地打开并看到小程序。
- 小程序启动指的是用户打开小程序到首页渲染完成，首页渲染完成的标志是首个页面的 `onReady` 事件被触发。

## 代码包体积优化

> Reference: 
> - [代码包体积优化](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start_optimizeA.html)
> - [分包](/blog/front_end/mini_program/subpackage/)

- 拆分主包、分包预下载、分包异步化。
- 如果自定义组件和插件只是在少数页面中使用，则应该在页面的 json 文件中配置，而不是在 app.json 中配置。在 app.json 中配置的自定义组件和插件会随着主包一起下载和注入 JS 代码。
- 项目中的多媒体文件会占用包体积，最后通过 URL 的方式引入。
- 利用打包工具的 tree-shaking 特性去除无依赖代码。

## 代码注入优化

### 按需注入

> Reference: 
> - [按需注入](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start_optimizeB.html#_1-%E4%BD%BF%E7%94%A8%E6%8C%89%E9%9C%80%E6%B3%A8%E5%85%A5)
> - [配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#lazyCodeLoading)

- 默认情况下，未被访问的页面和未使用的组件会随着启动页面的开始而注入。使用按需注入可以避免不必要的代码注入。

- 在 `app.json` 中配置 `"lazyCodeLoading": "requiredComponents"`。

```json
{
  "lazyCodeLoading": "requiredComponents"
}
```

### 用时注入

> Reference:
> - [用时注入](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html#%E7%94%A8%E6%97%B6%E6%B3%A8%E5%85%A5)
> - [占位组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/placeholder.html)

- 用时注入：可以指定一些组件不在小程序启动的时候注入，而是在真正渲染的时候注入。
- 将 `lazyCodeLoading` 设置为 `requiredComponents` 之后，为自定义组件配置占位组件，组件就会自动被视为用时注入组件。

### 同步 API

> Reference: [启动过程中减少同步 API 的调用](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start_optimizeB.html#_3-%E5%90%AF%E5%8A%A8%E8%BF%87%E7%A8%8B%E4%B8%AD%E5%87%8F%E5%B0%91%E5%90%8C%E6%AD%A5-API-%E7%9A%84%E8%B0%83%E7%94%A8)

- 在小程序启动过程中尽量避免调用同步 API（大部分以 Sync 结尾），因为同步 API 会阻塞当前的 JS 线程。

### 复杂运算

> Reference: [避免启动过程进行复杂运算](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start_optimizeB.html#_4-%E9%81%BF%E5%85%8D%E5%90%AF%E5%8A%A8%E8%BF%87%E7%A8%8B%E8%BF%9B%E8%A1%8C%E5%A4%8D%E6%9D%82%E8%BF%90%E7%AE%97)

- 尽量不要把复杂的逻辑运算放到 `App.onLaunch`、`App.onShow`, `Page.onLoad`, `Page.onShow`，将复杂的运算延迟到启动完成后进行。

## 首屏渲染优化

### 初始渲染缓存

> Reference:
> - [启动初始渲染缓存](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start_optimizeC.html#_2-%E5%90%AF%E7%94%A8%E3%80%8C%E5%88%9D%E5%A7%8B%E6%B8%B2%E6%9F%93%E7%BC%93%E5%AD%98%E3%80%8D)
> - [初始渲染缓存](https://developers.weixin.qq.com/miniprogram/dev/framework/view/initial-rendering-cache.html)
> - [视图层和逻辑层的交互过程](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page-life-cycle.html)

- 初始渲染缓存：页面第一次被打开后，将页面初始渲染的结果写入缓存中，第二次打开时视图层不需要等待逻辑层的初始化计算和返回的数据，而是直接从缓存中获取缓存结果并渲染出来。

![视图层和逻辑层的交互过程](./_image/view_and_appservice_threads.png =x320)

- 初始渲染缓存可用于：
  - 快速展示出页面中永远不会变的部分
  - 预先展示一个骨架页，提升用户体验
  - 展示自定义的加载提示
  - 提前展示广告

- 初始渲染缓存仅支持一部分内置组件。
