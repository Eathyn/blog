# Rendering List

## Keeping list items in order with `key`

- `key` is a string or number.
- the `key` is important because if your array items can move (e.g. due to sorting), get inserted, or get deleted. A well-chosen `key` helps React infer what exactly has happened, and make the correct updates to the DOM tree.
- Using `Fragment` instead of `<></>` to receive a `key`.

```js
import { Fragment } from 'react'

function App() {
  const data = [
    { id: 1, name: 'eathyn', age: 25 },
    { id: 2, name: 'eaven', age: 24 },
  ]
  const listItems = data.map((person) =>
    <Fragment key={person.id}>
      <div>{person.name}</div>
      <div>{person.age}</div>
    </Fragment>
  )

  return (
    <div>{listItems}</div>
  )
}
```

### Where to get your `key`

- places to get the key:
  - database
  - [Crypto.randomUUID()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID) or [uuid](https://www.npmjs.com/package/uuid) package

### Why does React need keys?

- Even if the position changes due to reordering, the key lets React identify the item throughout its lifetime.
- Index as a key often leads to subtle and confusing bugs.
- Don't generate keys on the fly, e.g. with `key={Math.random()}`.
- Note that your components won’t receive key as a prop. It’s only used as a hint by React itself.

## Refs

- [Rendering List](https://beta.reactjs.org/learn/rendering-lists)
