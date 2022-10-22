# Responding to Events

## Overview

- React lets you add event handlers to your JSX.

## Adding event handlers

- To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag:

```js
function App() {
  function handleClick() {
    console.log('run')
  }
  return <button onClick={handleClick}>click me</button>
}
```

- Event handlers:
  - are always defined inside the component
  - have names that start with `handle`, followed by the name of the event.

- Alternatively, you can define an event handler inline in the JSX:

```js
// function
function App() {
  return <button onClick={function handleClick() {
    console.log('run')
  }}>
    click me
  </button>
}

// arrow function
function App() {
  return <button onClick={() => {
    console.log('run')
  }}>
    click me
  </button>
}
```

- Functions passed to event handlers must be passed, not called.

```js
function App() {
  function handleFirstClick() {
    console.log('first')
  }

  function handleSecondClick() {
    console.log('second')
  }

  return (
    <>
      <button onClick={handleFirstClick}>first</button>
      <button onClick={handleSecondClick()}>second</button>
    </>
  )
}
```

- `handleFirstClick` function is passed as an onClick event handler. This tells React to remember it and only call your function when the user clicks the button.
- `handleSecondClick()` fires the function immediately during rendering, without any clicks. This is because JavaScript inside the JSX `{` and `}` executes right away.

### Passing event handlers as props

_App.js_

```js
import { PlayButton, UploadButton } from './Button'

function App() {
  return (
    <>
      <PlayButton movieName={'TestName'} />
      <UploadButton />
    </>
  )
}
```

_Button.js_

```js
export function PlayButton({ movieName }) {
  function handleClick() {
    console.log(`Play ${movieName}`)
  }
  return <Button onClick={handleClick}>{movieName}</Button>
}

export function UploadButton() {
  function handleClick() {
    console.log('Upload')
  }
  return <Button onClick={handleClick}>Upload</Button>
}

export function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}
```

### Naming event handler props

- Built-in components like `<button>` and `<div>` only support browser event names like onClick. However, when you’re building your own components, you can name their event handler props any way that you like.
- By convention, event handler props should start with `on`, followed by a capital letter.

_App.js_

```js
import { ToolBar } from './ToolBar'

function App() {
  return (
    <ToolBar
      onPlayMovie={() => console.log('play movie')}
      onUpload={() => console.log('upload')}
    />
  )
}
```

_ToolBar.js_

```js
import { Button } from './Button'

export function ToolBar({ onPlayMovie, onUpload }) {
  return (
    <>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUpload}>Upload</Button>
    </>
  )
}
```

_Button.js_

```js
export function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}
```

## Event propagation

- All events propagate in React except onScroll, which only works on the JSX tag you attach it to.

### Stopping propagation

_App.js_

```js
function App() {
  return (
    <div
      className="outer"
      onClick={() => {console.log('outer')}}
    >
      <button
        className="inner"
        onClick={(e) => {
          e.stopPropagation()
          console.log('inner')
        }}
      >
        click me
      </button>
    </div>
  )
}
```

- capture phase events:

```js
function App() {
  return (
    <div
      className="outer"
      onClickCapture={() => {console.log('outer')}}
    >
      <button
        className="inner"
        onClick={(e) => {
          e.stopPropagation()
          console.log('inner')
        }}
      >
        click me
      </button>
    </div>
  )
}
```

_Output_

```markdown
outer
inner
```

## Can event handlers have side effects?

- Event handlers are the best place for side effects. For example, change an input’s value in response to typing, or change a list in response to a button press.

## Refs

- [Responding to Events](https://beta.reactjs.org/learn/responding-to-events)
