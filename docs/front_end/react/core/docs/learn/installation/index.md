# Installation

## Start a New React Project

- React is a library.

## Add React to a Website

- Demo: 

```html
<body>
  <div id="like-button-root"></div>

  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="like-button.js" type="text/babel"></script>
</body>
```

```js
function LikeButton() {
  const [liked, setLiked] = React.useState(false)

  if (liked) {
    return 'You liked this'
  }

  // return React.createElement(
  //   'button',
  //   { onClick: () => setLiked(true) },
  //   'Like',
  // )

  /* JSX */
  return <button onClick={() => setLiked(true)}>Like</button>;
}

const rootNode = document.getElementById('like-button-root')
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(LikeButton))
```

## Refs

- [Installation](https://beta.reactjs.org/learn/installation)
