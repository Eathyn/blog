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

## Typing `ref()`

- Using `Ref` type to specify complex types for a ref's inner value.

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const year: Ref<string | number> = ref('2022')

// ok
year.value = 2019
</script>
```

- Passing a generic argument when calling `ref()`

```vue
<script setup lang="ts">
import { ref } from 'vue'
// type of year: Ref<string | number>
const year = ref<string | number>('2022')
</script>
```

- If you specify a generic type argument but omit the initial value, the resulting type will be a union type that includes `undefined`.

```vue
<script setup lang="ts">
import { ref } from 'vue'
// type of 'year': Ref<number | undefined>
const year = ref<number>()
</script>
```

## Typing `reactive()`

- Using interfaces to type a `reactive`

```vue
<script setup lang="ts">
import { reactive } from 'vue'

interface Person {
  name: string,
  age: number,
}

// ok
const person1: Person = reactive({
  name: 'eathyn',
  age: 25,
})

// TS2741: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.
const person2: Person = reactive({
  name: 'eaven',
})
</script>
```

- (Q) It's not recommended to use the generic argument of `reactive()` because the returned type, which handles nested ref unwrapping, is different from the generic argument type.

## Typing `computed()`

- `computed()` infers its type based on the getter's return value.

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref<number>(0)
// type of 'doubleCount': ComputedRef<number>
const doubleCount = computed(() => count.value * 2)
</script>
```

- Specifying an explicit type via a generic argument.

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

const count = ref<number>(0)
// type of 'doubleCount': ComputedRef<number>
const doubleCount = computed<number>(() => count.value * 2)
</script>
```

## Refs

- [TypeScript with Composition API](https://vuejs.org/guide/typescript/composition-api.html)
