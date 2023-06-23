---
date: 2022-06-08
category: Vue
tag:
- basic
- lifecycle hooks
---

# Lifecycle Hooks

## What is lifecycle hooks

- Lifecycle hooks are pre-defined methods that get executed in a certain order, starting from the initialization of the
  Vue instance to its destruction.

![lifecycle](./images/lifecycle.png =x600)

## beforeCreate

- Called immediately when the instance is initialized.
- The `props` option is accessible.
- Other options such as `data` and `computed` are not accessible.

_MainView.vue_

```vue
<template>
  <ChildComp text="hello" />
</template>

<script setup>
import ChildComp from '@/components/ChildComp'
</script>
```

_ChildComp.vue_

```vue
<template>
  <div>child</div>
</template>

<script>
export default {
  name: 'ChildComp',
  props: {
    text: String,
  },
  data() {
    return {
      num: 1,
    }
  },
  computed: {
    doubleNum() {
      return this.num * 2
    },
  },

  beforeCreate() {
    console.log(this.text) // hello
    console.log(this.num) // undefined
    console.log(this.doubleNum) // undefined
  }
}
</script>
```

## created

- Called after the instance has finished processing all state-related options.
- Most options such as `data` / `computed` / `methods` / `watch` are accessible.
- Data can be obtained from server in this hook.

_MainView.vue_

```vue
<template>
  <ChildComp text="hello" />
</template>

<script setup>
import ChildComp from '@/components/ChildComp'
</script>
```

_ChildComp.vue_

```vue
<template>
  <div>child</div>
</template>

<script>
export default {
  name: 'ChildComp',
  props: {
    text: String,
  },
  data() {
    return {
      num: 1,
    }
  },
  computed: {
    doubleNum() {
      return this.num * 2
    },
  },

  created() {
    console.log(this.text) // hello
    console.log(this.num) // 1
    console.log(this.doubleNum) // 2
  }
}
</script>
```

## beforeMount

- The Vue renderer generates the virtual DOM.

## mounted

- Completed DOM rendering, we can access DOM from now on.
- All of its synchronous child components have been mounted (does not include async components or components
  inside `<Suspense>` trees).
- Its own DOM tree has been created and inserted into the parent container.

```vue
<template>
  <div ref="div">child</div>
</template>

<script>
export default {
  name: 'ChildComp',
  beforeMount() {
    console.log(this.$refs.div) // undefined
  },
  mounted() {
    console.log(this.$refs.div) // <div>child</div>
  },
}
</script>
```

## beforeUpdate

- Called right before the component is about to update its DOM tree due to a reactive state change.
- Reactive states changed but the DOM of reactive states binding is not re-rendered.

```vue
<template>
  <button @click="++num">increment</button>
  <div id="ele">num: {{ num }}</div>
</template>

<script>
export default {
  name: 'ChildComp',
  data() {
    return {
      num: 1,
    }
  },
  beforeUpdate() {
    console.log('--- beforeUpdate ---')
    console.log('num: ', this.num) // num:  2
    console.log(document.querySelector('#ele').innerHTML) // num: 1
  },
  updated() {
    console.log('--- updated ---')
    console.log('num: ', this.num) // num:  2
    console.log(document.querySelector('#ele').innerHTML) // num: 2
  }
}
</script>
```

## updated

- Reactive states are changed and the DOM of reactive states binding was also re-rendered.

## beforeUnmounted

- Called before a component is unmounted.

## unmounted

- Called after a component is unmounted.
- All of its child components have been unmounted.
- All of its associated reactive effects (render effect and computed / watchers created during setup()) have been
  stopped.
- Use this hook to clean up manually created side effects such as timers, DOM event listeners or server connections.

## activated

- When a component instance is inserted into the DOM as part of a cached tree, it is **activated**.
- [Example](../keep-alive/index.md)

## deactivated

- When a component instance is removed from the DOM but is part of a component tree cached by `<KeepAlive>`, it goes into a **deactivated** state instead of being unmounted.

## Attention

### Composition API

- Vue.js doesn't have `beforeCreate` and `created` in composition API
- Code in `setup` is executed before all lifecycle hooks.

### Order

- children components are mounted or updated before a parent component is mounted or update.

_the process of creating and mounting parent and children components:_

1. Parent component executes `beforeCreate`, `created` and `beforeMount` hooks.
2. Children components execute `beforeCreate`, `created` and `beforeMount` hooks.
3. Children components execute `mounted` hooks.
4. Parent component execute the `mounted` hook.

_the process of updating parent and children components:_

1. Parent component executes `beforeUpdate` hook.
2. Children component execute `beforeUpdate` and `updated` hooks.
3. Parent component executes `updated` hook.

## Refs

- [What is lifecycle hooks](https://www.educative.io/answers/what-are-lifecycle-hooks-in-vue-js)
- [Why do we need lifecycle hooks](https://vuejs.org/guide/essentials/lifecycle.html)
- [Options lifecycle](https://vuejs.org/api/options-lifecycle.html)
- [Access DOM in beforeUpdate hook](https://segmentfault.com/q/1010000011521681)
