# Render and Commit

## Overview

- Before your components are displayed on screen, they must be rendered by React.
- This process of requesting and serving UI has three steps:
  1. Triggering a render
  2. Rendering the component
  3. Committing to the DOM

## Step 1: Trigger a render

- There are two reasons for a component to render:
  - It’s the component’s initial render.
  - The component’s (or one of its ancestors’) state has been updated.

## Step 2: React renders your components

- “Rendering” is React calling your components.
  - On initial render, React will call the root component.
  - For subsequent renders, React will call the function component whose state update triggered the render.
- This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.

## Step 3: React commits changes to the DOM

- After rendering (calling) your components, React will modify the DOM.
  - For the initial render, React will use the `appendChild()` DOM API to put all the DOM nodes it has created on screen.
  - For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

## Refs

- [Render and Commit](https://beta.reactjs.org/learn/render-and-commit)
