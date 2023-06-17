---
date: 2023-06-17
category: JavaScript
---

# Module Introduction

## Reason

- As our application grows bigger, we want to split it into multiple files, so-called “modules”. A module may contain a class or a library of functions for a specific purpose. For a long time, JavaScript existed without a language-level module syntax. That was not a problem, because initially scripts were small and simple, so there was no need.But eventually scripts became more and more complex, so the community invented a variety of ways to organize code into modules, special libraries to load modules on demand.

## Definition

- A module is just a file. One script is one module.

## Features

### strict mode

- Modules always work in strict mode.

### scope

- Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.

```html
<script type="module">
  const a = 1
</script>

<script type="module">
  console.log(a) // Error: a is not defined
</script>
```

### executed only once

- If the same module is imported into multiple other modules, its code is executed only once, upon the first import.

```html
<script type="module">
  import './module/test.js' // print run
</script>

<script type="module">
  import './module/test.js' // no print
</script>
```

_module/test.js_

```js
console.log('run')
```

- If we need to make something callable multiple times we should export it as a function.

- A module can provide a generic functionality that needs a setup.

_index.html_

```html
<script src="index.js" type="module"></script>
```

_index.js_

```js {1}
import './module/init.js'
import { sayHi } from './module/admin.js'

sayHi() // Hi, Eathyn
```

_init.js_

```js
import { admin } from './admin.js'

admin.name = 'Eathyn'
```

_admin.js_

```js
const admin = {}

function sayHi() {
  console.log(`Hi, ${admin.name}`)
}

export { admin, sayHi }
```

### import.meta

- The object `import.meta` contains the information about the current module.

### this

- In a module, top-level `this` is undefined. In non-module scripts, where `this` is a global object.

```html
<script type="module">
  console.log(this) // undefined
</script>

<script>
  console.log(this) // window
</script>
```

### defer

- Module scripts are always deferred, same effect as defer attribute, for both external and inline scripts.

### async works on inline scripts

- For non-module scripts, the `async` attribute only works on external scripts. For module scripts, it works on inline scripts as well.

### run only once

- External scripts with the same src run only once.

### cross-origin

- If a module script is fetched from another origin, the remote server must supply a header `Access-Control-Allow-Origin` allowing the fetch.

## Attention

- ES Modules also be supported in Node.js.
- Modules work only via HTTP(s), not locally.

## Refs

- [Module Introduction](https://javascript.info/modules-intro)
