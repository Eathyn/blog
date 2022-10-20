# Writing Markup with JSX

- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

## JSX: Putting markup into JavaScript

- As the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place.
- JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.

## The Rules of JSX

### Return a single root element

- To return multiple elements from a component, wrap them with a single parent tag.
- If you don’t want to add an extra `<div>` to your markup, you can write <> and </> instead
- This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.

```js
function App() {
  return (
    <>
      <div>hello</div>
      <div>react</div>
    </>
  )
}
```

- JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. You can’t return two objects from a function without wrapping them into an array.

### Close all the tags

- JSX requires tags to be explicitly closed

###  camelCase ~~all~~ most of the things

- JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like `class`.
- This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of `stroke-width` you use `strokeWidth`. Since `class` is a reserved word, in React you write `className` instead, named after the corresponding DOM property:
- For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.

## Refs

- [Writing Markup with JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx)
