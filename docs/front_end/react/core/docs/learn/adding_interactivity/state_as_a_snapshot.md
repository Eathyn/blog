# State as a Snapshot

## Overview

- State behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.

## Rendering takes a snapshot in time

- “Rendering” means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time.
- As a component’s memory, state is not like a regular variable that disappears after your function returns. State actually “lives” in React itself—as if on a shelf!—outside of your function. When React calls your component, it gives you a snapshot of the state for that particular render. Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!
- The handler will run `setNumber(0 + 1)` three times

```js
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  function handleClick() {
    setNumber(number + 1)
    setNumber(number + 1)
    setNumber(number + 1)
  }

  return (
    <div>
      <div>number: {number}</div>
      <button onClick={handleClick}>increment</button>
    </div>
  )
}
```

## State over time

- React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry whether the state has changed while the code is running.

```js
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)

  function handleClick() {
    setNumber(number + 1) // number in DOM will update
    console.log(number) // not update
  }

  return (
    <div>
      <div>number: {number}</div>
      <button onClick={handleClick}>increment</button>
    </div>
  )
}
```

## Recap

- Setting state requests a new render.

## Refs

- [State as a Snapshot](https://beta.reactjs.org/learn/state-as-a-snapshot)
