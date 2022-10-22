# Speeding Up Your Code with Big O

## Bubble Sort

- sorting algorithm: given an array of unsorted values, how can we sort them so that they end up in ascending order?

## Bubble Sort in Action

- bubble sort: the highest unsorted value “bubbles” up to its correct position

### Code Implementation: Bubble Sort

- `isSorted`: the array is already sorted if there is not swapping in an iteration
- `unsortedUntilIndex`: don't need to include sorted item in any iteration

```js
function bubbleSort(arr) {
  let isSorted = false
  for (let i = 0; i < arr.length; i++) {
    if (isSorted) {
      break
    }
    isSorted = true
    const unsortedUntilIndex = arr.length - 1 -i
    for (let j = 0; j < unsortedUntilIndex; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        isSorted = false
      }
    }
  }
}
```

## The Efficiency of Bubble Sort

- In our second pass-through, we only had to make three comparisons. This is because we didn’t have to compare the final two numbers, since we knew that the final number was in the correct spot due to the first pass-through.
- N: the amount of array element; (N-1) + (N-2) + ... + 2 + 1: the amount of comparisons.
- The time complexity of bubble sort is O(N<sup>2</sup>).
- O(N<sup>2</sup>) is also referred to as quadratic time.

## A Quadratic Problem

- Very often (but not always), when an algorithm nests one loop inside another, the algorithm is O(N<sup>2</sup>).

## A Linear Solution

- Optimizing the time complexity from O(N<sup>2</sup>) to O(N).

_O(N<sup>2</sup>)_

```js
function hasDuplicateValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return true
      }
    }
  }
  return false
}
```

_O(N)_

```js
function hasDuplicateValue(arr) {
  const existingNumbers = []
  for (let i = 0; i < arr.length; i++) {
    if (existingNumbers[arr[i]] === 1) {
      return true
    } else {
      existingNumbers[arr[i]] = 1
    }
  }
  return false
}
```
