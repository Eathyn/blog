# TypeScript with Composition API

## Typing Component Props

### Using `<script setup>`

- When using `<script setup>`, the `defineProps()` macro supports inferring the props types based on its argument.

```vue
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  age: Number,
})

// type of 'name': string
const name = props.name

// type of 'age': number | undefined
const age = props.age
</script>
```

- runtime declaration: the argument passed to `defineProps()` will be used as the runtime props option
- type-based declaration: define props with pure types via a generic type argument

```vue
<script setup lang="ts">
// runtime declaration
defineProps({
  name: {
    type: String,
    required: true,
  },
  age: Number,
})

// type-based declaration
interface Props {
  name: string,
  age?: number,
}
defineProps<Props>()
</script>
```

#### Syntax Limitations

- In order to generate the correct runtime code, the generic argument for `defineProps()` must be one of the following:
  - An object literal type
  - A reference to an interface or object literal type in the same file
 
- The generic argument itself passed to defineProps cannot be an imported type because Vue components are compiled in isolation and the compiler currently does not crawl imported files in order to analyze the source type.

```vue
import { Props } from './other-file'

// NOT supported
defineProps<Props>()
```

#### Props Default Values

- When using type-based declaration, we lose the ability to declare default values for the props. This can be resolved by the `withDefaults` compiler macro.
- `withDefaults` helper provides type checks for the default values, and ensures the returned `props` type has the optional flags removed for properties that do have default values declared.

```vue
<script setup lang="ts">
interface Props {
  name: string,
  age?: number,
}

const props = withDefaults(defineProps<Props>(), {
  name: 'eathyn',
  age: 18,
})

console.log(props.name) // eathyn
console.log(props.age) // 18
</script>
```

### Without `<script setup>`

- If not using `<script setup>`, it is necessary to use `defineComponent()` to enable props type inference.

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    age: Number,
  },
  setup(props) {
    // type of 'name': string
    const name = props.name
    // type of 'age': number | undefined
    const age = props.age
  }
})
</script>
```

## Typing Component Emits

_App.vue_

```vue
<template>
  <Main @change="handleChange" @update="handleUpdate" />
</template>
```

_Main.vue_

```vue
<template>
  <button @click="handleChange">change</button> |
  <button @click="handleUpdate">update</button>
</template>

<script setup lang="ts">
// runtime declaration
// const emit = defineEmits(['change', 'update'])

interface Emit {
  (e: 'change', value: number): void
  (e: 'update', name: string): void
}
const emit = defineEmits<Emit>()

function handleChange() {
  emit('change', 1)
}

function handleUpdate() {
  emit('update', 'eathyn')
}
</script>
```

## Refs

- [TypeScript with Composition API](https://vuejs.org/guide/typescript/composition-api.html)
