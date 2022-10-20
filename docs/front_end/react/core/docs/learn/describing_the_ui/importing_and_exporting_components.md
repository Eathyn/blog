# Importing and Exporting Components

## The root component file

## Exporting and importing a component

_Greet.js_

```js
function Greet() {
  return <div>Hello</div>
}

export default Greet
```

_App.js_

```js
import Greet from './Greet'

function App() {
  return <Greet />
}

export default App
```

- Either `./Greet.js` or `./Greet` will work with React
- Components without names, like export `default () => {}`, are discouraged because they make debugging harder.

## Exporting and importing multiple components from the same file

## Refs

- [Importing and Exporting Components](https://beta.reactjs.org/learn/importing-and-exporting-components)
