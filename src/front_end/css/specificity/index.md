---
date: 2020-07-30
category: CSS
tag: specificity
---

# Specificity

## 1-0-0-0-0

- !important

## 1-0-0-0

- inline style

## 1-0-0

- ID selector

## 0-1-0

- class selector
- attribute selector
- pseudo-class selector

## 0-0-1

- type selector
- pseudo-element selector

## Attention

- Universal Selector and combinators may make a selector more specific in what is selected, but they don't add any value to the specificity weight.

- The negation pseudo-class, `:not()`, itself has no weight. Neither does the `:is()` pseudo-class.

## Refs

- [Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Specificity Image](https://specifishity.com/)
