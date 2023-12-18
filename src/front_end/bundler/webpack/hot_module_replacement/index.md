---
date: 2023-12-18
category: webpack
---

# Hot Module Replacement

> Reference:
> - [Webpack5 核心原理与应用实践: chapter30](https://juejin.cn/book/7115598540721618944?utm_source=course_list)
> - [Docs: hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/)

- 热模块替换（hot module replacement）出现之前，在开发时更改代码会导致页面重新加载，这会丢失页面执行过的交互和状态，例如清除表单数据。引入热模块替换后可以在应用运行的时候只会替换被更改的模块，不会导致页面重新加载，可以保留页面执行过的交互和状态。

::: code-tabs
@tab webpack.config.js
```js {3}
module.exports = {
  devServer: {
    hot: true,
  },
}
```

@tab index.html
```html
<body>
  <button id="add-greet">add greet</button>
  <div id="box"></div>
</body>
```

@tab main.js
```js {7-9}
import { greet } from '@/js/utils'

const addGreetBtn = document.querySelector('#add-greet')
addGreetBtn.addEventListener('click', () => {
  greet()
})
if (module.hot) {
  module.hot.accept('./js/utils.js', () => {})
}
```

@tab utils.js
```js
export function greet() {
  const box = document.querySelector('#box')
  const greetEle = document.createElement('div')
  greetEle.textContent = 'hi'
  box.append(greetEle)
}
```
:::
