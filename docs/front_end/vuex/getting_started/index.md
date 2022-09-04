# Getting Started

## The Simplest Store

_src/main.js_

```js
import { createApp } from 'vue'
import store from './store/index.js'
import App from './App.vue'

createApp(App).use(store).mount('#app')
```

_src/store/index.js_

```js
import { createStore } from 'vuex'

const store = createStore({
  // ...
})

export default store
```

## Refs

- [Getting Started](https://vuex.vuejs.org/guide/)
