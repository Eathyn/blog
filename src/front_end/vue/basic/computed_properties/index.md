---
date: 2021-04-30
category: Vue
tag: computed
---

# Computed Properties

## Computed Caching vs Methods

- A computed property will only re-evaluate when some of its reactive dependencies have changed.

## Best Practices

### Getters should be side-effect free

- We should only perform pure computation in getter function of `computed`.
- Don't make async requests or mutate the DOM inside a `computed` getter.

### Avoid mutating computed value

- It's recommended to avoid mutating computed value.

## Refs

- [Computed Properties](https://vuejs.org/guide/essentials/computed.html)
