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

## Refs

- [State: A Component's Memory](https://beta.reactjs.org/learn/state-a-components-memory)
