---
date: 2023-06-17
category: JavaScript
---

# Export and Import

## Export Before Declarations

### Example

```html
<script src="index.js" type="module"></script>
```

_index.js_
```js
import { name, age } from './modules/info.js'
console.log(name, age) // eathyn 25
```

_info.js_

```js
export const name = 'eathyn'
export const age = 25
```

### Attentions

- No semicolons after export class/function.

## Export Apart From Declarations

### Example

```html
<script src="index.js" type="module"></script>
```

_index.js_
```js
import { name, age } from './modules/info.js'
console.log(name, age) // eathyn 25
```

_info.js_

```js
const name = 'eathyn'
const age = 25
export { name, age }
```

## Import *

### Reason

- If there’s a lot to import, we can import everything as an object.

### Example

```html
<script src="index.js" type="module"></script>
```

_index.js_
```js
import * as info from './modules/info.js'
console.log(info.name, info.age) // eathyn 25
```

_info.js_

```js
const name = 'eathyn'
const age = 25
export { name, age }
```

### Disadvantage

- Can not tree-shaking
- Can not use shorter name: `info.name` instead of `name`
- Can not give better overview of the code structure

## Import "as"

### Reason

- Importing under different names.

### Example

```html
<script src="index.js" type="module"></script>
```

_index.js_
```js
import { name as myName, age as myAge } from './modules/info.js'
console.log(myName, myAge) // eathyn 25
```

_info.js_

```js
const name = 'eathyn'
const age = 25
export { name, age }
```

## Export "as"

### Reason

- Exporting under different names.

### Example

```html
<script src="index.js" type="module"></script>
```

_index.js_
```js
import { myName, myAge } from './modules/info.js'
console.log(myName, myAge) // eathyn 25
```

_info.js_

```js
const name = 'eathyn'
const age = 25
export { name as myName, age as myAge }
```
## Export Default

### Reason

- Modules provide a special `export default` (“the default export”) syntax to make the “one thing per module” way look better.

### Example 1

_index.html_

```html
<script src="index.js" type="module"></script>
```

_index.js_

```js
import User from './modules/user.js' // without curly braces.
const user1 = new User('eathyn', 25)
console.log(user1) // User {name: 'eathyn', age: 25}
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

### Example 2

- As there may be at most one default export per file, the exported entity may have no name.

_index.html_

```html
<script src="index.js" type="module"></script>
```

_index.js_

```js
import User from './modules/user.js'
const user1 = new User('eathyn', 25)
console.log(user1) // default {name: 'eathyn', age: 25}
```

_user.js_

```js
export default class {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
```

### Example 3

- In some situations the `default` keyword is used to reference the default export.

_index.html_

```html
<script src="index.js" type="module"></script>
```

_index.js_

```js
import User from './modules/user.js'
const user1 = new User('eathyn', 25)
console.log(user1) // User {name: 'eathyn', age: 25}
```

_user.js_

```js
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
export { User as default }
```

### Example 4

_index.html_

```html
<script src="index.js" type="module"></script>
```

- A module user.js exports one main “default” thing, and a few named ones (rarely the case, but it happens)

_user.js_

```js
export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export const info = {
  name: 'eathyn',
  age: 25,
}
```

_index.js_

```js
import { default as User, info } from './modules/user.js'

const user1 = new User('eathyn', 25)
console.log(user1) // User {name: 'eathyn', age: 25}

console.log(info) // {name: 'eathyn', age: 25}
```

_user.js_

```js
export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export const info = {
  name: 'eathyn',
  age: 25,
}
```

### Example 5

_index.html_

```html
<script src="index.js" type="module"></script>
```

_index.js_

```js
import * as user from './modules/user.js'

const User = user.default
const user1 = new User('eathyn', 25)
console.log(user1) // User {name: 'eathyn', age: 25}

console.log(user.info) // {name: 'eathyn', age: 25}
```

_user.js_

```js
export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export const info = {
  name: 'eathyn',
  age: 25,
}
```

### Example 6

_index.html_

```html
<script src="index.js" type="module"></script>
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

_index.js_

```js
import User from './modules/user.js'

// works too
import MyUser from './modules/user.js'
```

### Attention

- There may be only one export default per file.
- Technically, we may have both default and named exports in a single module, but in practice people usually don’t mix them. A module has either named exports or the default one.

## Re-export

### Reason

- It is a shorter notation for importing things and immediately export them.

### Example 1

Without bringing useful modules together in on module.

_src/index.html_

```html
<script src="index.js" type="module"></script>
```

_src/index.js_

```js {1,2}
import { User } from './auth/user.js'
import { login, logout } from './auth/operations.js'

console.log(new User('eathyn', 25))
login()
logout()
```

_user.js_

```js
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export { User }
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

### Example 2

Bringing useful modules together in one module but without using `export...from` syntax.

_src/index.html_

```html
<script src="index.js" type="module"></script>
```

_src/index.js_

```js {1}
import { User, login, logout } from './auth/index.js'

console.log(new User('eathyn', 25))
login()
logout()
```

_auth/index.js_

```js {1,2,4}
import { User } from './user.js'
import { login, logout } from './operations.js'

export { User, login, logout }
```

_user.js_

```js
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export { User }
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

### Example 3

Bringing useful modules together in one module with using `export...from` syntax.

_src/index.html_

```html
<script src="index.js" type="module"></script>
```

_src/index.js_

```js {1}
import { User, login, logout } from './auth/index.js'

console.log(new User('eathyn', 25))
login()
logout()
```

_auth/index.js_

```js {1,2}
export { User } from './user.js'
export { login, logout } from './operations.js'
```

_user.js_

```js
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export { User }
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

### Example 4

The default export needs separate handling when re-exporting.

_src/index.html_

```html
<script src="index.js" type="module"></script>
```

_src/index.js_

```js
import { Default, User, login, logout } from './auth/index.js'

console.log(new Default())
console.log(new User('eathyn', 25))
login()
logout()
```

_auth/index.js_

```js {1-4}
// to re-export the default export
export { default as Default } from './user.js'
// to re-export the named exports
export { User } from './user.js'
export { login, logout } from './operations.js'
```

_user.js_

```js {1-5,7-12}
export default class {
  constructor() {
    console.log('default')
  }
}

export class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
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

### Attentions

- The notable difference of `export...from` compared to `import/export` is that re-exported modules aren’t available in the current file.

## Refs

- [Export and Import](https://javascript.info/import-export)
