# Passing Props to Route

## Boolean Mode

- The `props` will be the `params` when the `props` is set to `true`.

_router/index.js_

```js
const routes = [
  // Boolean Mode
  {
    path: '/user/:id',
    props: true,
    component: () => import('@/views/UserView'),
  },
]
```

```vue
<!-- options api -->
<script>
export default {
  name: 'UserView',
  props: {
    id: {
      type: [Number, String],
    },
  },
  beforeCreate() {
    console.log('props id: ', this.id)
  },
}
</script>

<!-- composition api -->
<script setup>
import { defineProps } from 'vue'

const props = defineProps(['id'])
console.log('props id: ', props.id)
</script>
```

## Named Views

Q: demo not working -> components

## Object Mode

- Suiting for static props.

_router / index.js_

```js
const routes = [
  {
    path: '/main',
    component: () => import('@/views/MainView'),
    props: { a: 1 },
  },
]
```

_MainView.vue_

```vue
<!-- options api -->
<script>
export default {
  name: 'MainView',
  props: {
    a: {
      type: Number,
    },
  },
  beforeCreate() {
    console.log(this.a) // 1
  },
}
</script>

<!-- composition api -->
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  a: {
    type: Number,
  },
})

console.log(props.a) // 1
</script>
```

## Function Mode

- The argument is the route.

_router / index.js_

```js
const routes = [
  {
    path: '/user/:id',
    component: () => import('@/views/UserView'),
    props: (route) => ({ id: Number(route.params.id) }),
  },
]
```

_UserView.vue_

```vue
<template>
  <div>user</div>
</template>

<!-- options api -->
<script>
export default {
  name: 'UserView',
  props: {
    id: {
      type: Number,
    },
  },
  beforeCreate() {
    console.log(typeof this.id)
    console.log('props.id: ', this.id)
  },
}
</script>

<!-- composition api -->
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  id: {
    type: Number,
  },
})

console.log(typeof props.id)
console.log(props.id)
</script>
```

## Refs

- [Passing Props to Route](https://router.vuejs.org/guide/essentials/passing-props.html)
