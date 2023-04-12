---
date: 2021-03-27
category: Vue
tag: keep alive
---

# Keep Alive

## Why do we need KeepAlive component

- `KeepAlive` component allows us to conditionally cache component instances when dynamically switching between multiple components.

## Example

_MainView.vue_

```vue
<template>
  <button @click="changeTab('componentA')">change a</button>
  <button @click="changeTab('componentB')">change b</button>
  <button @click="changeTab('componentC')">change c</button>
  <KeepAlive>
    <component :is="tabs[currentTab]"></component>
  </KeepAlive>
</template>

<script setup>
import { ref } from 'vue'
import componentA from '@/components/componentA'
import componentB from '@/components/componentB'
import componentC from '@/components/componentC'

const currentTab = ref('componentA')
const tabs = {
  componentA,
  componentB,
  componentC
}

function changeTab(compName) {
  currentTab.value = compName
}
</script>
```

## Include / Exclude

- By default, `KeepAlive` will cache any component instance inside.
- We can customize this behavior via the `include` and `exclude` props. Both props can be a comma-delimited string, a RegExp, or an array containing either types
- The match is checked against the component's `name` option, so components that need to be conditionally cached by KeepAlive must explicitly declare a `name` option.

_MainView.vue_

```vue
<template>
  <button @click="changeTab('componentA')">change a</button>
  <button @click="changeTab('componentB')">change b</button>
  <button @click="changeTab('componentC')">change c</button>
  <KeepAlive :include="['componentA', 'componentB']">
    <component :is="tabs[currentTab]"></component>
  </KeepAlive>
</template>

<script setup>
import { ref } from 'vue'
import componentA from '@/components/componentA'
import componentB from '@/components/componentB'
import componentC from '@/components/componentC'

const currentTab = ref('componentA')
const tabs = {
  componentA,
  componentB,
  componentC
}

function changeTab(compName) {
  currentTab.value = compName
}
</script>
```

## Max Cached Instances

- We can limit the maximum number of component instances that can be cached via the max prop.
- When max is specified, `<KeepAlive>` behaves like an LRU cache: if the number of cached instances is about to exceed the specified max count, the **least** recently accessed cached instance will be destroyed to make room for the new one.

_MainView.vue_

```vue
<template>
  <button @click="changeTab('componentA')">change a</button>
  <button @click="changeTab('componentB')">change b</button>
  <button @click="changeTab('componentC')">change c</button>
  <KeepAlive :max="2">
    <component :is="tabs[currentTab]"></component>
  </KeepAlive>
</template>

<script setup>
import { ref } from 'vue'
import componentA from '@/components/componentA'
import componentB from '@/components/componentB'
import componentC from '@/components/componentC'

const currentTab = ref('componentA')
const tabs = {
  componentA,
  componentB,
  componentC
}

function changeTab(compName) {
  currentTab.value = compName
}
</script>
```

## Lifecycle Hooks

- When a component instance is removed from the DOM but is part of a component tree cached by `<KeepAlive>`, it goes into a deactivated state instead of being unmounted.
- When a component instance is inserted into the DOM as part of a cached tree, it is activated.

_MainView.vue_

```vue
<template>
  <button @click="changeTab('componentA')">change a</button>
  <button @click="changeTab('componentB')">change b</button>
  <button @click="changeTab('componentC')">change c</button>
  <KeepAlive>
    <component :is="tabs[currentTab]"></component>
  </KeepAlive>
</template>

<script setup>
import { ref } from 'vue'
import componentA from '@/components/componentA'
import componentB from '@/components/componentB'
import componentC from '@/components/componentC'

const currentTab = ref('componentA')
const tabs = {
  componentA,
  componentB,
  componentC
}

function changeTab(compName) {
  currentTab.value = compName
}
</script>
```

_componentA.vue_

```vue
<template>
  <div>A</div>
  <input
    v-model="text"
    type="text"
  >
</template>

<script setup>
import { onActivated, onDeactivated, ref } from 'vue'

const text = ref('')

onActivated(() => {
  console.log('A is activated.')
})

onDeactivated(() => {
  console.log('A is deactivated.')
})
</script>
```

_componentB.vue_

```vue
<template>
  <div>B</div>
  <input
    v-model="text"
    type="text"
  >
</template>

<script setup>
import { ref, onActivated, onDeactivated } from 'vue'

const text = ref('')

onActivated(() => {
  console.log('B is activated.')
})

onDeactivated(() => {
  console.log('B is deactivated.')
})
</script>
```

_componentC.vue_

```vue
<template>
  <div>C</div>
  <input
    v-model="text"
    type="text"
  >
</template>

<script setup>
import { ref, onActivated, onDeactivated } from 'vue'

const text = ref('')

onActivated(() => {
  console.log('C is activated.')
})

onDeactivated(() => {
  console.log('C is deactivated.')
})
</script>
```

## Refs

- [KeepAlive](https://vuejs.org/guide/built-ins/keep-alive.html)
