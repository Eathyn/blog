# JavaScript in JSX with Curly Braces

## Passing strings with quotes

- Passing string with double or single quotes

_App.js_

```js
import './App.css'

function App() {
  return (
    <div className="box"></div>
  )
}
```

_App.css_

```css
.box {
  width: 100px;
  height: 100px;
  background-color: darkred;
}
```

## Using curly braces: A window into the JavaScript world

- Using the curly brace to contain the variable.

```js
function App() {
  const content = 'hello'

  return (
    <div>{content}</div>
  )
}
```

- Places to use curly braces:
  - As text directly inside a JSX tag
  - As attributes immediately following the = sign

## Using “double curlies”: CSS and other objects in JSX

- To pass a JS object in JSX, you must wrap the object in another pair of curly braces.
- Inline `style` properties are written in camelCase.

```js
function App() {
  return (
    <div style={
      {
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      }
    }>
    </div>
  )
}
```

## Refs

- [JavaScript in JSX with Curly Braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)
