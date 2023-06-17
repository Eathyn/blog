---
date: 2023-06-17
category: JavaScript
---

# Dynamic Imports

## Reason

- The module path must be a primitive string, can’t be a function call.
- We can’t import conditionally or at run-time.

## Example 1

- The `import(module)` expression loads the module and returns a promise that resolves into a module object that contains all its exports.

_src/index.html_

```html
<script src="index.js" type="module"></script>
```

_src/index.js_

```js
const result = true

// use dynamic import conditionally
if (result) {
  // import() returns a promise
  const { login, logout } = await import('./auth/operations.js')
  login()
  logout()
}
```

_operations.js_

```js
function login() {
  console.log('login')
}

function logout() {
  console.log('logout')
}

export { login, logout }
```

## Example 2

- Handle default export.

_src/index.html_

```html
<script src="index.js" type="module"></script>
```

_src/index.js_

```js {1}
const { default: User } = await import('./auth/user.js')
console.log(new User('eathyn', 25))
```

_user.js_

```js
export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
```

## Example 3

Dynamic imports work in regular scripts, they don’t require `script type="module"`.

_src/index.html_

```html {2}
<!-- regular script, not module -->
<script defer>
  import('./auth/operations.js').then(({ login, logout }) => {
    login()
    logout()
  })
</script>
```

_auth/operations.js_

```js
function login() {
  console.log('login')
}

function logout() {
  console.log('logout')
}

export { login, logout }
```

## Example 4

Although `import()` looks like a function call, it’s a special syntax that just happens to use parentheses (similar to `super()`). So we can’t copy `import` to a variable or use `call/apply` with it. It’s not a function.
