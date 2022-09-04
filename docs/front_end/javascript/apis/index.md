# JavaScript APIs

## Object.is

- determines whether two values are the same value

```js
console.log(+0 === -0) // true
console.log(Object.is(+0, -0)) // false

console.log(NaN === NaN) // false
console.log(Object.is(NaN, NaN)) // true
```
