---
date: 2022-06-25
category: Vue
tag:
- basic
- plugin
---

# Plugins

- 插件（plugin）用于添加应用级别的（app-level）功能，例如 Vue Router。

- 插件是一个拥有 install 方法的对象（或者就是一个 install 方法），在插件中可以定义一些全局组件、指令、属性等。

- Vue 通过 `app.use()` 引入插件：

::: code-tabs
@tab define plugin
```javascript
export const myPlugin = {
  install(app, options) {
    // configure the app
  }
}
```

@tab use plugin
```javascript
import { createApp } from 'vue'

const app = createApp({})

app.use(myPlugin, {
  // options
})
```
:::

## Resources

- [Docs: Plugin in Vue-2](https://v2.vuejs.org/v2/guide/plugins.html)
- [Docs: Plugin in Vue-3](https://vuejs.org/guide/reusability/plugins.html)
- [Vue School: Custom Vue.js 3 Plugins](https://vueschool.io/courses/custom-vue-js-3-plugins)
