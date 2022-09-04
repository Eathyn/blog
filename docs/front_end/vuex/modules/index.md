# Modules

## Module Local State

- Inside module actions, `context.state` will expose the local state, and `context.rootState` will expose the root state.

_store/index.js_

```js
const store = createStore({
  state: () => ({
    rootData: 100,
  }),
  modules: {
    counter,
  },
})
```

_store/module/counter.js_

```js
export const counter = {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment(context) {
      // { count: 0 }       
      console.log(context.state)

      // { counter, rootData: 100 }
      console.log(context.rootState)
    },
  }
}
```

## Namespacing

- By default, getters, mutation and actions are registered under the global namespace. Using `namespaced: true` to avoid conflict.

### Without `namespace: true`

_moduleA.js_

```js
export const moduleA = {
  namespaced: true,
  state: () => ({
    count: 1,
  }),
  mutations: {
    INCREMENT(state) {
      state.count++
    },
  },
  actions: {
    increment(context)  {
      context.commit('INCREMENT')
    },
  },
}
```

_moduleB.js_

```js
export const moduleB = {
  namespaced: true,
  state: () => ({
    count: 1,
  }),
  mutations: {
    INCREMENT(state) {
      state.count++
    },
  },
  actions: {
    increment(context)  {
      context.commit('INCREMENT')
    },
  },
}
```

_Main.vue_

```vue
<script>
export default {
  name: 'Main',
  methods: {
    handleClick() {
      this.$store.dispatch('increment')
      console.log(this.$store.state.moduleA.count) // 3
      console.log(this.$store.state.moduleB.count) // 3
    },
  }
}
</script>
```

### With `namespace: true`

_moduleA.js_

```js
export const moduleA = {
  namespaced: true,
  state: () => ({
    count: 1,
  }),
  mutations: {
    INCREMENT(state) {
      state.count++
    },
  },
  actions: {
    increment(context)  {
      context.commit('INCREMENT')
    },
  },
}
```

_moduleB.js_

```js
export const moduleB = {
  namespaced: true,
  state: () => ({
    count: 1,
  }),
  mutations: {
    INCREMENT(state) {
      state.count++
    },
  },
  actions: {
    increment(context)  {
      context.commit('INCREMENT')
    },
  },
}
```

_Main.vue_

```vue
<script>
export default {
  name: 'Main',
  methods: {
    handleClick() {
      this.$store.dispatch('moduleA/increment')
      console.log(this.$store.state.moduleA.count) // 2
      console.log(this.$store.state.moduleB.count) // 1
    },
  }
}
</script>
```

## Refs

- [Modules](https://vuex.vuejs.org/guide/modules.html)
