# Passing Props to a Component

## Passing props to a component

- Reading props in function parameter inside `{}`.

_App.js_

```js
import { Person } from './Person'

function App() {
  const person = {
    name: 'eathyn',
    age: 25,
  }

  return (
    <Person name={person.name} age={person.age} />
  )
}
```

_Person.js_

```js
export function Person({ name, age }) {
  return (
    <>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </>
  )
}
```

- React component functions accept a single argument, a `props` object.

_App.js_

```js
import { Person } from './Person'

function App() {
  const person = {
    name: 'eathyn',
    age: 25,
  }

  return (
    <Person name={person.name} age={person.age} />
  )
}
```

_Person.js_

```js
export function Person(props) {
  return (
    <>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </>
  )
}
```

## Specifying a default value for a prop

- If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter.

_App.js_

```js
import { Count } from './Count'

function App() {
  return (
    <>
      <Count />
      <Count count={100} />
    </>
  )
}
```

_Count.js_

```js
export function Count({ count = 1 }) {
  return (
    <div>count: {count}</div>
  )
}
```

## Forwarding props with the JSX spread syntax

- You can forward all props with `{...props}` JSX spread syntax

_App.js_

```js
import Wrap from './Wrap'

function App() {
  const name = 'eathyn'
  const age = 25

  return (
    <Wrap name={name} age={age} />
  )
}
```

_Wrap.js_

```js
import Person from './Person'

export default function Wrap(props) {
  return (
    <Person {...props} />
  )
}
```

_Person.js_

```js
export default function Person({ name, age }) {
  return (
    <>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </>
  )
}
```

- When you nest content inside a JSX tag, the parent component will receive that content in a prop called `children`.

_App.js_

```js
import { Card } from './Card'
import { Avatar } from './Avatar'

function App() {
  const imageUrl = 'https://i.imgur.com/YfeOqp2s.jpg'

  return (
    <Card>
      <Avatar url={imageUrl} />
    </Card>
  )
}
```

_Card.js_

```js
export function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  )
}
```

_Avatar.js_

```js
export function Avatar({ url }) {
  return (
    <img src={url} alt="avatar" />
  )
}
```

## How props change over time

- Don't change props in current component because props are immutable.
- Asking the parent component to change the props.

## Refs

- [Passing Props to a Component](https://beta.reactjs.org/learn/passing-props-to-a-component)
