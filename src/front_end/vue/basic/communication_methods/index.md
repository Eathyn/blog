---
date: 2022-05-21
category: Vue
tag: 
- basic
- component communication methods
---

# Vue Component Communication Methods

## Why components need communication

- 传递数据

## Props and Emit

- 适合父子组件通信
- 父组件向子组件传递数据使用 `props`
- 子组件向父组件传递数据使用 `emit`

_MainView.vue_

```vue
<template>
  <ChildComponent
    :number="number"
    @increment="handleIncrement"
  />
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent'

const number = ref(1)

function handleIncrement(value) {
  number.value += value
}
</script>
```

_ChildComponent.vue_

```vue
<template>
  <button @click="handleClick(1)">+1</button>
  <button @click="handleClick(100)">+100</button>
  <div>number: {{ number }}</div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

defineProps({
  number: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['increment'])

function handleClick(value) {
  emit('increment', value)
}
</script>
```

## Ref

- 适合父组件访问子组件
- 子组件需要通过 `defineExpose` 指定其他组件能访问的数据

_MainView.vue_

```vue
<template>
  <ChildComponent ref="childCompRef" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ChildComponent from '@/components/ChildComponent'

const childCompRef = ref(null)

onMounted(() => {
  console.log(childCompRef.value.a) // 1
  console.log(childCompRef.value.b) // undefined
})
</script>
```

_ChildComponent.vue_

```vue
<template>
  <div>a: {{ a }}</div>
</template>

<script setup>
import { defineExpose, ref } from 'vue'

const a = ref(1)
// eslint-disable-next-line no-unused-vars
const b = ref(2)

defineExpose({
  a,
})
</script>
```

## Provide and Inject

- 适用于
  - 父组件向子组件提供数据
  - 祖先组件向后代组件提供数据

_MainView.vue_

```vue
<template>
  <ChildComponent />
</template>

<script setup>
import { provide } from 'vue'
import ChildComponent from '@/components/ChildComponent'

provide('number', 1)
</script>
```

_ChildComponent.vue_

```vue
<template>
  <DescendantComponent />
</template>

<script setup>
import DescendantComponent from '@/components/DescendantComponent'
</script>
```

_DescendantComponent.vue_

```vue
<template>
  <div>number in descendant: {{ number }}</div>
</template>

<script setup>
import { inject } from 'vue'

const number = inject('number')
</script>
```

## $attrs and $listeners

- 适用于:
  - 父组件向子组件提供数据
  - 祖先组件向后代组件提供数据

### Vue 2

_Main.vue_

```vue
<template>
  <div>
    <ChildComp
      :a="a"
      @click="handleClick"
    />
  </div>
</template>

<script>
import ChildComp from '../components/ChildComp'

export default {
  components: { ChildComp },
  data() {
    return {
      a: 1,
    }
  },
  methods: {
    handleClick() {
      console.log('click')
    },
  },
}
</script>
```

_ChildComp.vue_

```vue
<template>
  <div>
    <h1>child component</h1>
    <div v-bind="$attrs" v-on="$listeners"></div>
  </div>
</template>

<script>
export default {
  name: 'ChildComp',
  inheritAttrs: false,
  created() {
    console.log(this.$attrs) // {a: 1}
    console.log(this.$listeners) // {click: ƒ}
  }
}
</script>
```

### Vue 3

- 注意 : [Vue 3 将 `$listeners` 合并到 `$attrs`](https://v3-migration.vuejs.org/breaking-changes/listeners-removed.html)

_MainView.vue_

```vue
<template>
  <ChildComponent
    :a="a"
    :b="b"
    @click="handleClick"
    @dblclick="handleDoubleClick"
  />
</template>

<script setup>
import { ref } from 'vue'
import ChildComponent from '@/components/ChildComponent'

const a = ref(1)
const b = ref(2)

function handleClick() {}
function handleDoubleClick() {}
</script>
```

_ChildComponent.vue_

```vue
<template>
  <div>child</div>
</template>

<script setup>
import { defineEmits, defineProps, useAttrs } from 'vue'

defineProps({
  a: {
    type: Number,
    default: 0,
  },
})

defineEmits(['click'])

const attrs = useAttrs()
console.log(attrs) // b, onDoubleClick

// attrs.b = 100 // Error: attrs is readonly
</script>
```

## $parent and $root

- 适用于 : 兄弟组件

_Main.vue_

```vue
<template>
  <div>
    <Sender />
    <Receiver />
  </div>
</template>

<script>
import Sender from '../components/Sender'
import Receiver from '../components/Receiver'

export default {
  name: 'Main',
  components: {
    Receiver,
    Sender,
  },
}
</script>
```

_Sender.vue_

```vue
<template>
  <div>
    <div>sender</div>
    <button @click="send">send</button>
  </div>
</template>

<script>
export default {
  name: 'Sender',
  methods: {
    send() {
      this.$parent.$emit('message', {
        name: 'eathyn',
        age: 25,
      })
    }
  }
}
</script>
```

_Receiver.vue_

```vue
<template>
  <div>receiver</div>
</template>

<script>
export default {
  name: 'Receiver',
  created() {
    this.$parent.$on('message', (info) => {
      console.log(info)
    })
  },
}
</script>
```

## Vuex / Pinia

- 适用于 :
  - 兄弟组件
  - 父子组件
  - 祖先后代组件

## EventBus (vue 3 不支持)

- 适用于 :
  - 兄弟组件
  - 父子组件
  - 祖先后代组件

_main.js_ : 定义 event bus

```js
// ...
const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $eventBus: {
    get() {
      return EventBus
    }
  }
})
// ...
```

_Main.vue_

```vue
<template>
  <div>
    <SenderComp />
    <ReceiverComp />
  </div>
</template>

<script>
import SenderComp from '../components/SenderComp'
import ReceiverComp from '../components/ReceiverComp'

export default {
  components: {
    ReceiverComp,
    SenderComp,
  },
}
</script>
```

_SenderComp.vue_ : 发送事件

```vue
<template>
  <div>
    <h1>Sender</h1>
    <button @click="handleClick">send</button>
  </div>
</template>

<script>
export default {
  name: 'SenderComp',
  methods: {
    handleClick() {
      // 发送事件
      this.$eventBus.$emit('message', {
        name: 'eathyn',
        age: 25,
      })
    },
  }
}
</script>
```

_ReceiverComp.vue_ : 接收事件

```vue
<template>
  <div>receiver</div>
</template>

<script>
export default {
  name: 'ReceiverComp',
  created() {
    // 接收事件
    this.$eventBus.$on('message', (info) => {
      console.log(info)
    })
  }
}
</script>
```

## Summary

- 父组件与子组件 : Props & Emit / Ref / Provide & Inject / $attrs & $listeners
- 兄弟组件 : $parent / Event Bus
- 祖先组件与后代组件 : Provide & Inject
- 通用 : Vuex / Pinia / Event Bus
