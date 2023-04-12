---
date: 2020-07-23
category: CSS
tag: selector
---

# Selectors

## Classify

- Universal Selector
- Type Selector
- Class Selector
- ID Selector
- Attribute Selector
- Selector List
- Descendant Combinator
- Child Combinator
- General Sibling Combinator
- Adjacent Sibling Combinator
- Pseudo Classes
- Pseudo Elements

## Pseudo Classes vs Pseudo Elements

- CSS introduces the concepts of pseudo-elements and pseudo-classes to permit formatting based on information that lies outside the document tree.
- pseudo element: create a new element **logically**

```html
<p>hello <br>world</p>
```

```css
p::first-line {
	color: red;
}
```

_it is equal to create a new element wrapping the first line_

```html
<p><em>hello</em> <br>world</p>
```

```css
p > em {
	color: red;
}
```

- pseudo class: create a new class **logically**

```html
<ol>
  <li>one</li>
  <li>two</li>
</ol>
```

```css
li:first-child {
	color: red;
}
```

_it is equal to create a new class for the first `li` element_

```html
<ol>
  <li class="first-child">one</li>
  <li>two</li>
</ol>
```

```css
li.first-child {
	color: red;
}
```

## Refs

- [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [Pseudo Classes vs Pseudo Elements](https://swordair.com/origin-and-difference-between-css-pseudo-classes-and-pseudo-elements/)
