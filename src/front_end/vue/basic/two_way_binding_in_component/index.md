---
date: 2023-07-03
category: Vue
---

# Two-way Binding in Component

> Reference: [Component v-model](https://vuejs.org/guide/components/v-model.html)

## 基本用法

- 默认的属性名是 `modelValue`，默认的事件名是 `update:modelValue`。 

::: code-tabs
@tab App.vue
```vue
<template>
  <Main v-model="text" />
</template>

<script setup>
import { ref } from 'vue'
import Main from './components/Main.vue'

const text = ref('')
</script>
```

@tab Main.vue
```vue {9-10,17}
<template>
  <div>child component</div>
  <input type="text" @input="handleInput">
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

watch(props, () => {
  console.log('props.modelValue: ', props.modelValue)
})

function handleInput(evt) {
  emits('update:modelValue', evt.target.value)
}
</script>
```
:::

## 修改默认的属性名和事件名

- 指定 `v-model` 的实参（argument）可以修改默认的属性名和事件名。

::: code-tabs
@tab App.vue
```vue {2,3}
<template>
  <Main v-model:title="text" />
</template>

<script setup>
import { ref } from 'vue'
import Main from './components/Main.vue'

const text = ref('')
</script>
```

@tab Main.vue
```vue {4,13-14,21}
<template>
  <div>child component</div>
  <input
    :value="title"
    type="text"
    @input="handleInput"
  >
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps(['title'])
const emits = defineEmits(['update:title'])

watch(props, () => {
  console.log('props.title: ', props.title)
})

function handleInput(evt) {
  emits('update:title', evt.target.value)
}
</script>
```
:::

## 使用多个 v-model

- 可以在组件上使用多个 `v-model`。

::: code-tabs
@tab App.vue
```vue {3-4}
<template>
  <Main
    v-model:first-name="firstName"
    v-model:last-name="lastName"
  />
</template>

<script setup>
import { ref } from 'vue'
import Main from './components/Main.vue'

const firstName = ref('')
const lastName = ref('')
</script>
```

@tab Main.vue
```vue {7-8,16-17,23-24,27,30}
<template>
  <div>
    <label for="first-name">first name:</label>
    <input
      id="first-name"
      type="text"
      :value="firstName"
      @input="handleFirstNameInput($event)"
    >
  </div>
  <div>
    <label for="last-name">last name:</label>
    <input
      id="last-name"
      type="text"
      :value="lastName"
      @input="handleLastNameInput($event)"
    >
  </div>
</template>

<script setup>
const props = defineProps(['firstName', 'lastName'])
const emits = defineEmits(['update:first-name', 'update:last-name'])

function handleFirstNameInput(evt) {
  emits('update:first-name', evt.target.value)
}
function handleLastNameInput(evt) {
  emits('update:last-name', evt.target.value)
}
</script>
```
:::

## defineModel

### 默认实参

- 使用 `defineModel` 宏默认情况下会自动定义 `modelValue` 和 `update:modelValue`。

::: code-tabs
@tab App.vue
```vue {2}
<template>
  <Main v-model="text"/>
</template>

<script setup>
import { ref } from 'vue'
import Main from './components/Main.vue'

const text = ref('')
</script>
```

@tab Main.vue
```vue {4,9}
<template>
  <input
    type="text"
    v-model="title"
  >
</template>

<script setup lang="ts">
const title = defineModel()
</script>
```
:::

### 自定义实参

- `defineModel` 的第一个参数为 `v-model` 的实参。

::: code-tabs
@tab App.vue
```vue {2}
<template>
  <Main v-model:title="text"/>
</template>

<script setup>
import { ref } from 'vue'
import Main from './components/Main.vue'

const text = ref('')
</script>
```

@tab Main.vue
```vue {9}
<template>
  <input
    type="text"
    v-model="title"
  >
</template>

<script setup>
const title = defineModel('title')
</script>
```
:::

### 多个 v-model

::: code-tabs
@tab App.vue
```vue {3-4}
<template>
  <Main
    v-model:first-name="firstName"
    v-model:last-name="lastName"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Main from './components/Main.vue'

const firstName = ref('')
const lastName = ref('')
</script>
```

@tab Main.vue
```vue {4,9,15-16}
<template>
  <div>
    <label>
      first name: <input type="text" v-model="firstName">
    </label>
  </div>
  <div>
    <label>
      last name: <input type="text" v-model="lastName">
    </label>
  </div>
</template>

<script setup lang="ts">
const firstName = defineModel('firstName')
const lastName = defineModel('lastName')
</script>
```
:::

### 结合 TypeScript

::: code-tabs
@tab App.vue
```vue {2}
<template>
  <Main v-model:title="text" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Main from './components/Main.vue'

const text = ref('')
</script>
```

@tab Main.vue
```vue {2,6}
<template>
  <input type="text" v-model="text">
</template>

<script setup lang="ts">
const text = defineModel<string>('title')
</script>
```
:::

### 参数

- 第一个参数为 `v-model` 的实参。查看[自定义实参](/blog/front_end/vue/basic/two_way_binding_in_component/#自定义实参)。

- 第二个参数为：由三个接口组成的交集。
  - `default`：默认值。
  - `type`：值的类型。
  - `required`：父组件是否必传。
  - `validator`：
  - `local`：defineModel 的返回值可以在子组件中更改，[参考](https://github.com/vuejs/rfcs/discussions/503)。

```ts
export declare function defineModel<T>(name: string, options: {
    default: any;
} & PropOptions<T> & DefineModelOptions): Ref<T>;

interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true | null;
  required?: boolean;
  default?: D | DefaultFactory<D> | null | undefined | object;
  validator?(value: unknown): boolean;
  /* removed internal: skipCheck */
  /* removed internal: skipFactory */
}

interface DefineModelOptions {
  local?: boolean;
}
```
