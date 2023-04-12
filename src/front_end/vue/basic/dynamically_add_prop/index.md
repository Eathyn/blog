---
date: 2022-08-06
category: Vue
tag:
- basic
- add properties
---

# Dynamically Adding Object properties

## Phenomenon

- Dynamically adding object properties does not update the view.

```vue
<template>
  <div>
    <button @click="addItem">add item</button>
    <div
      v-for="(value, index) in items"
      :key="index"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      items: {
        a: 1,
        b: 2,
        c: 3,
      }
    }
  },
  methods: {
    addItem() {
      // The data has been updated but the view has not been updated
      this.items.d = 4
      console.log(this.items) // { a:1, b:2, c:3, d:4 }
    },
  }
}
</script>
```

## Why the view does not update

### Vue 2

- Vue.js 2 creates reactive states via `Object.defineProperty`. Adding properties to object directly doesn't create
  reactive states.

```js
const obj = {
  _a: undefined,
}

// property 'a' is reacitve
Object.defineProperty(obj, 'a', {
  get() {
    return this._a
  },
  set(newVal) {
    this._a = newVal
  },
})

// property 'b' is NOT reacitve
obj.b = 2
```

### Vue 3

- vue 3 uses `proxy` instead of `Object.defineProperty`. 

- `Object.defineProperty` can only listen for properties of an object, while `proxy` can listen for the entire object.
  So properties added or deleted by a reactive object can be captured by `proxy`'s traps.

## Methods to update the view

- `Vue.set` : suitable for adding **a few** properties to an object
- `Object.assign` : suitable for adding **many** properties to an object
- `$forceUpdate` : force update the view (**NOT** recommended)

```vue
<template>
  <div>
    <button @click="addItem">add item</button>
    <div
      v-for="(value, index) in items"
      :key="index"
    >
      {{ value }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: "Main",
  data() {
    return {
      items: {
        a: 1,
        b: 2,
        c: 3,
      }
    }
  },
  methods: {
    addItem() {
      // Vue.set
      Vue.set(this.items, 'd', 4)

      // Object.assign
      this.items = Object.assign({}, this.items, { e: 5 })

      // $forceUpdate
      this.items.f = 6
      this.$forceUpdate()
    },
  }
}
</script>
```


## Refs

- [Adding properties to reactive object](https://vue3js.cn/interview/vue/data_object_add_attrs.html)
- [Using `proxy` instead of `Object.defineProperty`](https://vue3js.cn/interview/vue3/proxy.html)
