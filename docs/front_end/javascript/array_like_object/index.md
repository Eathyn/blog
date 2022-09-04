# Array-like Object

## Definition

- It is an object with a `length` property, and other properties of it are indices(e.g. 0, 1, 2).

## Convert To Array

- Array.from

```js
const arrayLike = {
  0: 'a',
  1: 'b',
  length: 2,
}

const array = Array.from(arrayLike)
console.log(Array.isArray(array)) // true
```
