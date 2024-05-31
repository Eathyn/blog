---
date: 2024-05-31
---

# Code Splitting

## CSS Code Splitting

> Ref: 
> - [深入浅出 Vite：第 14 章](https://juejin.cn/book/7050063811973218341?scrollMenuIndex=1)
> - [官方文档](https://vitejs.dev/guide/features.html#css-code-splitting)

Vite 在构建阶段默认将 CSS 从异步 chunk 中抽离出来作为单独的文件。

如下代码所示，`Main` 组件通过 `defineAsyncComponent` 引入，所以它是一个异步组件，即一个异步 chunk。所以 Vite 在构建阶段会把 `Main` 组件中的 CSS 抽离出来作为单独的文件：

::: code-tabs
@tab vite.config.ts
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true, // 默认为 true
  },
})
```

@tab main.ts
```ts
import { createApp } from 'vue'

import App from './App.vue'
createApp(App).mount('#app')
```

@tab App.vue
```vue
<template>
  <div class="app-test">app</div>
  <AsyncMainComp />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
// 异步 chunk
const AsyncMainComp = defineAsyncComponent(() => import('./view/Main.vue'))
</script>

<style scoped>
.app-test {
  color: darkred;
}
</style>
```

@tab Main.vue
```vue
<template>
  <div class="main-test">main</div>
</template>

<style scoped>
.main-test {
  color: darkblue;
}
</style>
```
:::

![css 代码分割](./_image/css-splitting.png =x180)

> Ref: [build.cssCodeSplit 配置项](https://vitejs.dev/config/build-options#build-csscodesplit)

Vite 在构建阶段的 CSS 代码分割由 `build.cssCodeSplit` 控制。
