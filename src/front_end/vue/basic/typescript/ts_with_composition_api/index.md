---
date: 2021-05-13
category:
- Vue
- TypeScript
tag: TypeScript in Vue
---

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

## Typing Event Handlers

- Without type annotation, the `event` argument will implicitly have a type of `any`.

```vue
<template>
  <input @click="handleChange" />
</template>

<script setup lang="ts">
// TS7006: Parameter 'event' implicitly has an 'any' type.
function handleChange(event) {
  console.log(event.target.value)
}
</script>
```

- It is therefore recommended to explicitly annotate the argument of event handlers. In addition, you may need to explicitly cast properties on event.

```vue
<template>
  <input @change="handleChange" />
</template>

<script setup lang="ts">
function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
</script>
```

## Typing Provide / Inject

- To properly type injected values, Vue provides an `InjectionKey` interface, which is a generic type that extends `Symbol`.

_keys.d.ts_

```ts
import type { InjectionKey } from 'vue'
export declare const countKey: Symbol
```

_keys.ts_

```ts
import type { InjectionKey } from 'vue'
export const countKey = Symbol() as InjectionKey<number>
```

_Main.vue_

```vue
<template>
  <Child />
</template>

<script setup lang="ts">
import { provide, Ref, ref } from 'vue'
import { countKey } from '../utils/keys'
import Child from './Child.vue'

const count = ref(1)
provide<Ref>(countKey, count)
</script>
```

_Child.vue_

```vue
<template>
  <div>count: {{ count }}</div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { countKey } from '../utils/keys'

const count = inject(countKey)
</script>
```

- When using string injection keys, the type of the injected value will be `unknown` [count1], and needs to be explicitly declared via a generic type argument [count2].
- Notice the injected value can still be `undefined`, because there is no guarantee that a provider will provide this value at runtime. The `undefined` type can be removed by providing a default value [count3]. If you are sure that the value is always provided, you can also force cast the value [count4].

_Main.vue_

```vue
<script setup lang="ts">
import { provide, Ref, ref } from 'vue'

const count = ref(1)
provide<Ref>('count', count)
</script>
```

_Child.vue_

```vue
<script setup lang="ts">
import { inject } from 'vue'

// type of 'count1': unknown
const count1 = inject('count')

// type of 'count2': number | undefined
const count2 = inject<number>('count')

// type of 'count3': number
const count3 = inject<number>('count', 0)

// type of 'count4': number
const count4 = inject('count') as number
</script>
```

## Typing Template Refs

- Template refs should be created with an explicit generic type argument and an initial value of `null`.

```vue
<script setup lang="ts">
import { ref } from 'vue'

const el = ref<HTMLInputElement | null>(null)

function handleClick() {
  console.log(el.value?.value)
}
</script>
```

## Typing Component Template Refs

- In order to get the instance type of `MyModal`, we need to first get its type via `typeof`, then use TypeScript's built-in `InstanceType` utility to extract its instance type.

_Main.vue_

```vue
<template>
  <button @click="toggleModal">toggle modal</button>
  <MyModal ref="modal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyModal from './MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

function toggleModal() {
  modal.value.toggleModal()
}
</script>
```

_MyModal.vue_

```vue
<template>
  <div v-show="showModal">my modal</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineExpose({ toggleModal })

const showModal = ref(true)

function toggleModal() {
  showModal.value = !showModal.value
}
</script>
```

## Refs

- [TypeScript with Composition API](https://vuejs.org/guide/typescript/composition-api.html)
