# Quick Start

## Creating and nesting components

- React components are JavaScript functions that return markup.

```js
function MyButton() {
  return (
    <button>I'm a button</button>
  )
}
```

- React component names must always start with a capital letter.

## Writing markup with JSX

- Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent.

```js
function App() {
  return (
    <>
      <div>hello</div>
      <div>react</div>
    </>
  )
}

export default App;
```

## Adding styles

- In React, you specify a CSS class with `className`. It works the same way as HTML class attribute.

_App.js_

```js
import './App.css';

function App() {
  return (
    <h1 className="test">Hello React</h1>
  )
}

export default App;
```

_App.css_

```css
.test {
  color: red;
}
```

## Displaying data

- You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes.
- `style={{}}` is not a special syntax, but a regular `{}` object inside the `style={ }` JSX curly braces.

```js
const text = 'Hello React'
const style = {
  width: '100px',
  height: '100px',
  border: '1px solid #000',
}

function App() {
  return (
    <>
      <div>{text}</div>
      <div style={style} />
      <div style={{ width: '100px', height: '100px', border: '1px solid #000' }} />
    </>
  )
}

export default App;
```

## Conditional rendering

- In React, there is no special syntax for writing conditions.

```js
function App() {
  const isLogin = true
  const content = isLogin ? 'admin' : 'login'

  return (
    <div>{content}</div>
  )
}
```

## Rendering lists

- You will rely on JavaScript features like `for` loop and the array `map()` function to render lists of components.
- Notice how `<li>` has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.

```js
function App() {
  const persons = [
    { id: 1, name: 'eathyn' },
    { id: 2, name: 'eaven' },
  ]
  const listItems = persons.map((person) => <li key={person.id}>{person.name}</li>)

  return (
    <ul>{listItems}</ul>
  )
}
```

## Responding to events

- You can respond to events by declaring event handler functions inside your components.

```js
function MyButton() {
  function handleClick() {
    console.log('click me')
  }

  return (
    <button onClick={handleClick}>click me</button>
  )
}
```

## Updating the screen

- import `useState` from React to declare a state variable.
- the convention is to call them like `[something, setSomething]`.

```js
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={increment}>increment</button>
    </div>
  )
}
```

## Using Hooks

- Functions starting with `use` are called Hooks.
- You can only call Hooks at the top level of your components (or other Hooks).

## Sharing data between components

- The information you pass down like this is called `props`.

```js
import { useState } from 'react'

function MyButton({ count, onClick }) {
  return (
    <>
      <div>count: {count}</div>
      <button onClick={onClick}>increment</button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <>
      <MyButton count={count} onClick={increment} />
      <MyButton count={count} onClick={increment} />
    </>
  )
}
```

## Refs

- [Quick Start](https://beta.reactjs.org/learn)
