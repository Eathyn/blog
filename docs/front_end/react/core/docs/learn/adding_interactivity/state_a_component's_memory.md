# State: A Component's Memory

## When a regular variable isn’t enough

- The useState Hook provides those two things:
  - A state variable to retain the data between renders.
  - A state setter function to update the variable and trigger React to render the component again.

## Adding a state variable

_App.js_

```js
function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>increment</button>
      <div>count: {count}</div>
    </>
  )
}
```

### Meet your first Hook

- In React, `useState`, as well as any other function starting with ”use”, is called a Hook.
- Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.
- Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks.

### Anatomy of `useState`

- The only argument to `useState` is the initial value of your state variable.

## Giving a component multiple state variables

- If you find that you often change two state variables together, it might be better to combine them into a single one.

### How does React know which state to return?

Skip: Difficult

## State is isolated and private

- State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.

_App.js_

```js
import { Button } from './Button'

function App() {
  return (
    <>
      <Button />
      <Button />
    </>
  )
}
```

_Button.js_

```js
import { useState } from 'react'

export function Button() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick}>increment</button>
      <div>count: {count}</div>
    </div>
  )
}
```

- Unlike props, state is fully private to the component declaring it. The parent component can’t change it.

## Refs

- [State: A Component's Memory](https://beta.reactjs.org/learn/state-a-components-memory)
