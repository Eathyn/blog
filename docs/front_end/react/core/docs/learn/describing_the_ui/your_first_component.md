# Your First Component

## Components: UI building blocks

- React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app.

## Defining a component

- React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work.
- Without parentheses, any code on the lines after `return` will be ignored.

## Using a component

- Components are regular JavaScript functions, so you can keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other.
- Components can render other components, but you must never nest their definitions.

```js
// bad
function App() {
  function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    )
  }

  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
```

- The snippet above is very slow and causes bugs. Instead, define every component at the top level.

```js
// good
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  )
}

function App() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}
```

## Refs

- [Your First Component](https://beta.reactjs.org/learn/your-first-component)
