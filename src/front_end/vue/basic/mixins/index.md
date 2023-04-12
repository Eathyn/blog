---
date: 2022-08-15
category: Vue
tag:
- basic
- mixin
---

# Mixins

## Usage
- `mixin` is an object for storing and reusing options of a vue instance.

```js
const mixinObj = {
  data() {
    return {
      a: 1,
    }
  },
  methods: {
    showA() {
      console.log(this.a)
    },
  },
}

export default mixinObj
```

_MainView.vue_

```vue
<template>
  <div>a: {{ a }}</div>
</template>

<script>
import mixinObj from '@/mixins/main'

export default {
  name: 'MainView',
  mixins: [mixinObj],
  created() {
    this.showA()
  },
}
</script>
```

- mixin's lifecycle hooks are called before component's.

```js
const mixinObj = {
  mounted() {
    console.log('mixin mounted')
  },
  created() {
    console.log('mixin created')
  },
}

export default mixinObj
```

```vue
<script>
import mixinObj from '@/mixins/main'

export default {
  name: 'MainView',
  mixins: [mixinObj],
  created() {
    console.log('main created')
  },
  mounted() {
    console.log('main mounted')
  },
}
</script>
```

```markdown
// result:
1. mixin created
2. main created
3. mixin mounted
4. main mounted
```

- Expect for lifecycle hooks, mixin's options will be ignored when that conflict with options in component.

```js
const mixinObj = {
  data() {
    return {
      a: 1,
    }
  },
}

export default mixinObj
```

```vue
<script>
import mixinObj from '@/mixins/main'

export default {
  name: 'MainView',
  mixins: [mixinObj],
  data() {
    return {
      a: 100,
    }
  },
  created() {
    console.log(this.a) // 100
  }
}
</script>
```

## Compare to Composables

- [Details](../composables/index.md#why-do-we-need-composable)

## Refs

- [Mixins in Vue.js 2](https://v2.vuejs.org/v2/guide/mixins.html)
- [Mixins api](https://vuejs.org/api/options-composition.html#mixins)
- [Compare to Composables](https://vuejs.org/guide/reusability/composables.html#vs-mixins)
