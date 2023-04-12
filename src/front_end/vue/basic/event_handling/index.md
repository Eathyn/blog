---
date: 2021-04-07
category: Vue
tag: event handling
---

# Event Handling

## Accessing Event Argument in Inline Handlers

### `$event` variable

```vue
<template>
  <button @click="logName('eathyn', $event)">click me</button>
</template>

<script setup>
function logName(name, event) {
  console.log(name)
  console.log(event)
}
</script>
```

### arrow function

```vue
<template>
  <button @click="(event) => logName('eaven', event)">click me</button>
</template>

<script setup>
function logName(name, event) {
  console.log(name)
  console.log(event)
}
</script>
```

## Event Modifiers

- Vue provides event modifiers for `v-on`:
  - stop
  - prevent
  - self
  - capture
  - once
  - passive

### stop

- `stop` is equal to `stopPropagation()`
- `stopPropagation`: prevents further propagation of the current event in the capturing and bubbling phases.

```vue
<template>
  <div class="outer" @click="handleClickOuter">
    <div class="inner" @click.stop="handleClickInner">click</div>
  </div>
</template>

<script setup>
function handleClickOuter() {
  console.log('outer')
}

function handleClickInner() {
  console.log('inner')
}
</script>
```

### prevent

- `prevent` is equal to `preventDefault`
- `preventDefault`: if the event does not get explicitly handled, its default action should not be taken as it normally would be.

```vue
<template>
  <form>
    <label for="checkbox">checkbox: </label>
    <input type="checkbox" id="checkbox" @click.prevent="handleClick">
  </form>
</template>

<script setup>
function handleClick() {
  console.log('run...')
}
</script>
```

## Refs

- [Event Handling](https://vuejs.org/guide/essentials/event-handling.html)
