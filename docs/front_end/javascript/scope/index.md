# Scope

## Block Level Scope

### Examples

- 声明在 `{}` 中的 `const` / `let` 变量

```js
{
  const a = 1
}
console.log(a) // error: a is not defined
```

- if / for / while 等语句

```js
if (true) {
  const a = 1
}
console.log(a) // a is not defined
```

## Function Level Scope

### Examples

```js
function func() {
  const a = 1
}
console.log(a) // a is not defined
```

## Global Level Scope

- 不在函数和大括号中声明的变量，都属于全局作用域

### Examples

```js
const a = 1
console.log(a) // 1
```

## Refs

- [Scope](https://vue3js.cn/interview/JavaScript/scope.html)
