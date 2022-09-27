# Computed Properties

## Basic Example

- The `computed` returns a computed ref.

```vue
<script setup>
import { computed, ref } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])
const odd = computed(() => numbers.value.filter((number) => number % 2 === 1))
console.log(odd.value) // [1, 3, 5]
</script>
```

- The value of `computed` ref is updated when the based data is changed.

```vue
<script setup>
import { computed, ref } from 'vue'

const numbers = ref([1, 2, 3, 4, 5])

const odd = computed(() => numbers.value.filter((number) => number % 2 === 1))
console.log(odd.value) // [1, 3, 5]

numbers.value = [6, 7, 8, 9, 10]
console.log(odd.value) // [7, 9]
</script>
```

## Computed Caching vs Methods

- A computed property will only re-evaluate when some of its reactive dependencies have changed.

## Writable Computed

- By default, computed ref is read-only.
- We can make computed ref writable by passing `setter` function.

```vue
<script setup>
import { computed, ref } from 'vue'

const firstName = ref('Eathyn')
const lastName = ref('Zakas')

const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (name) => [firstName.value, lastName.value] = name.split(' ')
})
console.log(fullName.value) // Eathyn Zakas

fullName.value = 'John Smith'
console.log(fullName.value) // John Smith
</script>
```

## Best Practices

### Getters should be side-effect free

- We should only perform pure computation in getter function of `computed`.
- Don't make async requests or mutate the DOM inside a `computed` getter.

### Avoid mutating computed value

- It's recommended to avoid mutating computed value.

## Refs

- [Computed Properties](https://vuejs.org/guide/essentials/computed.html)
