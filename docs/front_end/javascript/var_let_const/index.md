# `var` vs `let` vs `const`

## var

- variables declared in global environment will be properties of global object (eg: window in browser, global in Node).

```js
var a = 1
console.log(window.a) // 1
```

- variables will be hoisting.

```js
console.log(a) // undefined
var a = 1
console.log(a) // 1

// equal to:
var a
console.log(a) // undefined
a = 1
console.log(a) // 1
```

- can't form the block scope

```js
{
  var a = 1
}
console.log(a) // 1
```

- we can declare a variable multiple times.

```js
var a = 1
var a = 2
console.log(a) // 2
```

## let

- variable will create code block.

```js
{
  let a = 1
}
console.log(a) // error: a is not defined
```

## const

- The variable must be assigned a value.

```js
// no
const a // Missing initializer in const declaration

// yes
const b = 1
```

- The value of variable can not be changed after initialized.

```js
const a = 1
a = 2 // Assignment to constant variable.

const b = { c: 1 }
b = {} // Assignment to constant variable.

b.c = 2 // work
```

## Summary

|                     | var | let | const |
|---------------------|-----|-----|-------|
| variable hoisting   | yes | no  | no    |
| temporary dead zone | no  | yes | yes   |
| block scope         | no  | yes | yes   |
| declare repeatedly  | yes | no  | no    |
| change value        | yes | yes | no    |

