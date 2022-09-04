# NaN (Not a Number)

## Still Numeric Type

- `NaN` is still a numeric type. `NaN` just means the specific value cannot be represented within the limitations of the
  numeric type.

```js
console.log(typeof NaN) // number
```

## Not equal to itself

- A specific `NaN` is not considered equal to another `NaN` because they may be different values

```js
console.log(NaN === NaN) // false
```

## isNaN vs Number.isNaN

- isNaN 会先进行类型转换，Number.isNaN 不会

```js
const val = {}
console.log(isNaN(val)) // true
console.log(Number.isNaN(val)) // false
```

## Refs

- [Why does typeof NaN returns 'number'](https://stackoverflow.com/a/2801617/9863318)
