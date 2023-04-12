---
date: 2021-05-09
category: Vue
tag: list rendering
---

# List Rendering

## `v-for`

- `v-for` supports destructuring.

```vue
<template>
  <div
    v-for="({ firstName }, index) in info"
    :key="index"
  >
    {{ firstName }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const info = ref([
  {
    id: 1,
    firstName: 'Eathyn',
    lastName: 'Zakas',
  },
  {
    id: 2,
    firstName: 'Eaven',
    lastName: 'Smith',
  },
])
</script>
```

- `v-for` supports `of` delimiter.

```vue
<template>
  <div
    v-for="(number, index) of numbers"
    :key="index"
  >
    {{ number }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])
</script>
```

## `v-for` on `template`

- Using `v-for` on `template` to render a block of multiple elements.

```vue
<template>
  <template
    v-for="info in infos"
    :key="info.id"
  >
    <div>{{ info.name }} - {{ info.age }}</div>
  </template>
</template>

<script setup>
import { ref } from 'vue'

const infos = ref([
  {
    id: 1,
    name: 'Eathyn',
    age: 25
  },
  {
    id: 2,
    name: 'Eaven',
    age: 26
  }
])
</script>
```

## Maintaining State with `key`

- When Vue is updating a list of elements rendered with `v-for`, by default it uses an "in-place patch" strategy. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index.
- This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state.
- Providing `key` attribute to give Vue a hint so that can track each node's identity, and thus **reuse** and **reorder** existing elements.
- It is recommended to provide a `key` attribute with v-for whenever possible, unless the iterated DOM content is simple or or you are intentionally relying on the default behavior for performance gains.
- The `key` binding expects primitive values.

- See [`key` Attribute](../key/) for details.

## Refs

- [List Rendering](https://vuejs.org/guide/essentials/list.html)
