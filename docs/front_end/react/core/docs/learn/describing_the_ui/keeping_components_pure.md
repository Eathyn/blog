# Keeping Components Pure

## Purity: Components as formulas

- a pure function is a function with the following characteristics:
  - It does not change any objects or variables that existed before it was called.
  - Given the same inputs, a pure function should always return the same result.
- React assumes that every component you write is a pure function.

## Side Effects: (un)intended consequences

- Components should only return their JSX, and not change any objects or variables that existed before rendering—that would make them impure!

_Bad_

```js
// App.js
import { Cup } from './Cup'

function App() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  )
}
```

```js
// Cup.js
let cup = 0
export function Cup() {
  return <div>cup {cup++}</div>
}
```

_Good_

```js
// App.js
import { Cup } from './Cup'

function App() {
  return (
    <>
      <Cup cup={1} />
      <Cup cup={2} />
      <Cup cup={3} />
    </>
  )
}
```

```js
// Cup.js
export function Cup({ cup }) {
  return <div>cup {cup}</div>
}
```

- `props`, `state` and `context` are read-only.
- React offers a “Strict Mode” in which it calls each component’s function twice during development.

```js
let count = 0

function App() {
  return (
    <>
      {/* 3 */}
      <div>count: {count++}</div>

      {/* 4 */}
      <div>count: {count++}</div>

      {/* 5 */}
      <div>count: {count++}</div>
    </>
  )
}
```

- Strict Mode has no effect in production.
- To opt into Strict Mode, you can wrap your root component into `<React.StrictMode>`.

## Where you can cause side effects

- side effect are happen "on the side", not during rendering.
- In React, side effects usually belong inside event handlers. Even though event handlers are defined inside your component, they don’t run during rendering! So event handlers don’t need to be pure.
- If you’ve exhausted all other options and can’t find the right event handler for your side effect, you can still attach it to your returned JSX with a `useEffect` call in your component. This tells React to execute it later, after rendering, when side effects are allowed. However, this approach should be your last resort.

### Why does React care about purity?

- Components can run in a different environment — the server.
- Improving performance by skipping rendering components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
- If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.

## Refs

- [Keeping Components Pure](https://beta.reactjs.org/learn/keeping-components-pure)
