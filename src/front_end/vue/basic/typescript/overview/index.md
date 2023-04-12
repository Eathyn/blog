---
date: 2021-05-20
category:
- Vue
- TypeScript
tag: TypeScript in Vue
---

# TS OverView

- A type system like TypeScript can detect many common errors via static analysis at build time.
- Vue is written in TypeScript itself and provides first-class TypeScript support.

## General Usage Notes

### `defineComponent()`

- To let TypeScript properly infer types inside component options, we need to define components with `defineComponent()`.

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    console.log(this.count)
  },
})
</script>
```

- `defineComponent()` also supports inferring the props passed to `setup()`.

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    count: Number,
  },
  setup(props) {
    // type of 'count': number | undefined
    let count = props.count
  }
})
</script>
```

### Usage in Single-File Components

- When `lang="ts"` is present, all template expressions also enjoy stricter type checking.

```vue
<template>
  <!-- type checking and auto-completion enabled -->
  <div>count: {{ count.toFixed(2) }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(1)
</script>
```

### TypeScript in Templates

- The `<template>` also supports TypeScript in binding expressions when `<script lang="ts">` or `<script setup lang="ts">` is used.

```vue
<template>
  <div>count: {{ (count as number).toFixed(2) }}</div>
</template>

<script setup lang="ts">
let count: string | number = 1
</script>
```

## Refs

- [OverView](https://vuejs.org/guide/typescript/overview.html)
