---
date: 2023-07-05
category: Vue
---

# Slot

## Options API

::: code-tabs
@tab App.vue
```vue
<template>
  <Main>
    <template v-slot:header="slotProps">
      <div>header</div>
      <div>a: {{ slotProps.a }}</div>
      <div>b: {{ slotProps.b }}</div>
    </template>
    <template v-slot:default>
      <div>default</div>
    </template>
    <template v-slot:footer>
      <div>footer</div>
    </template>
  </Main>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App.vue',
  components: {
    Main,
  },
}
</script>
```

@tab Main.vue
```vue
<template>
  <header>
    <slot name="header" :a="a" :b="b">header default content</slot>
  </header>
  <main>
    <slot name="default">main default content</slot>
  </main>
  <footer>
    <slot name="footer">footer default content</slot>
  </footer>
</template>

<script>
export default {
  name: 'Main.vue',
  data() {
    return {
      a: 1,
      b: 2,
    }
  }
}
</script>
```
:::

## Composition API

::: code-tabs
@tab App.vue
```vue
<template>
  <Main>
    <template v-slot:header="slotProps">
      <div>header</div>
      <div>a: {{ slotProps.a }}</div>
      <div>b: {{ slotProps.b }}</div>
    </template>
    <template v-slot:default>
      <div>default</div>
    </template>
    <template v-slot:footer>
      <div>footer</div>
    </template>
  </Main>
</template>

<script setup>
import Main from './components/Main.vue'
</script>
```

@tab Main.vue
```vue
<template>
  <header>
    <slot name="header" :a="a" :b="b">header default content</slot>
  </header>
  <main>
    <slot name="default">main default content</slot>
  </main>
  <footer>
    <slot name="footer">footer default content</slot>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const a = ref(1)
const b = ref(2)
</script>
```
:::

## Render Function

> Reference: [Passing Slot](https://vuejs.org/guide/extras/render-function.html#passing-slots)

::: code-tabs
@tab App.vue
```vue
<template>
  <render />
</template>

<script setup>
import Main from './components/Main.vue'
import { h } from 'vue'

function render() {
  return h(Main, null, {
    header: (slotProps) => [
      h('div', null, 'header'),
      h('div', null, `a: ${slotProps.a}`),
      h('div', null, `b: ${slotProps.b}`),
    ],
    default: () => h('div', null, 'default'),
    footer: () => h('div', null, 'footer'),
  })
}
</script>
```

@tab Main.vue
```vue
<template>
  <render />
</template>

<script setup>
import { h, ref, useSlots } from 'vue'

const slots = useSlots()
const a = ref(1)
const b = ref(2)

function render() {
  return [
    h('header', null, [
      h('div', null, slots.header({a: a.value, b: b.value})),
    ]),
    h('main', null, slots.default()),
    h('footer', null, slots.footer()),
  ]
}
</script>
```
:::

## TypeScript

> Reference: [Typed Slots with `defineSlots`](https://blog.vuejs.org/posts/vue-3-3#typed-slots-with-defineslots)

- [Using Slot in Render Function with TypeScript](/blog/front_end/vue/release/3.3/#使用-defineslots-规定类型)

## Access Slot Value

通过 `slots.<插槽名>?.()[0].children` 可以在子组件获取父组件传递过来的插槽值：

::: code-tabs
@tab ParentComponent
```vue
<script setup>
import ChildComponent from './components/ChildComponent.vue'
</script>

<template>
  <ChildComponent>
    <template v-slot:header>this is the header</template>
    <template v-slot:default>this is the content</template>
    <template v-slot:footer>this is the footer</template>
  </ChildComponent>
</template>

```

@tab ChildComponent
```vue
<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
const headerSlot = slots.header?.()[0].children
console.log('headerSlot: ', headerSlot) // this is the header

const defaultSlot = slots.default?.()[0].children
console.log('defaultSlot: ', defaultSlot) // this is the content

const footerSlot = slots.footer?.()[0].children
console.log('footerSlot: ', footerSlot) // this is the footer
</script>

<template>
  <div class="main">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="default"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
```
:::

如果插槽中传入多个元素，那么 `slots.<插槽名>?.()[0].children` 就会变为数组：

::: code-tabs
@tab ParentComp
```vue
<script setup>
import ChildComp from './ChildComp.vue'
</script>

<template>
  <ChildComp>
    <template v-slot:default>
      <div>
        <span>x</span>
        <span>y</span>
      </div>
    </template>
  </ChildComp>
</template>
```

@tab ChildComp
```vue
<script setup>
  import { useSlots } from 'vue'

  const slots = useSlots()
  const defaultSlot = slots.default?.()[0].children
  for (const VNode of defaultSlot) {
    console.log(VNode.children) // x,y
  }
</script>

<template>
  <div class="child-comp">
    <slot name="default"></slot>
  </div>
</template>
```
:::
