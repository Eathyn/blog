---
date: 2021-04-13
category: Vue
tag: data option
---

# Why the `data` Option is A Function

- That allows separate components to have separate internal state without needing to fully re-instantiate the entire
  component.
- Methods, computed property definitions, and lifecycle hooks are created and stored only once, and run against every instance of a component.

## When the `data` option is an object

- Different component instances point to the same object, that is, different component instances share the same data.

- Making data an object will result in an error: `data` property in component must be a function.

```vue
<template>
  <button>button {{ identifier }}</button>
  <div>number: {{ number }}</div>
</template>

<script>
export default {
  name: 'ChildComp',
  props: {
    identifier: String,
  },
  data: {
    number: 1,
  }
}
</script>
```

## When the `data` option is a function

- Different component instances point to different objects, that is, different component instances don't share the same
  data.

```vue
<template>
  <button>button {{ identifier }}</button>
  <div>number: {{ number }}</div>
</template>

<script>
export default {
  name: 'ChildComp',
  props: {
    identifier: String,
  },
  data() {
    return {
      number: 1,
    }
  }
}
</script>
```

## Refs

- [Why must vue component data be a function](https://stackoverflow.com/a/46826903/9863318)
