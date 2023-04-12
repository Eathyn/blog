---
date: 2020-07-19
category: HTML
tag: form
---

# Submit Event

- The `submit` event will trigger in `form` element when a button inside of `form` is clicked.
- Triggering the `submit` event will reload the page.

```html
<form>
  <button>click</button>
</form>
```

```js
const form = document.querySelector('form')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('trigger click event') // print
})

form.addEventListener('submit', () => {
  console.log('trigger submit event') // print
})
```

- Using `preventDefault` function will prevent the above behavior.

```html
<form>
  <button>click</button>
</form>
```

```js
const form = document.querySelector('form')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('trigger click event') // not print
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('trigger submit event') // print
})
```
