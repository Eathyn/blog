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