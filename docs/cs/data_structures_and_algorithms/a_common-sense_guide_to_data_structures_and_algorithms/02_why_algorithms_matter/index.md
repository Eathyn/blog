# Why Algorithms Matter

## Ordered Arrays

- In terms of `N`, we’d say that for N elements in an ordered array, the insertion took `N + 2` steps in total.
- The fewest steps occur when the new value winds up at the very end, since no shifts are necessary. In this case, we take `N` steps to compare the new value with all `N` existing values, plus one step for the insertion itself, yielding a total of `N + 1` steps.
- While insertion is less efficient for an ordered array than for a classic array, the ordered array has a secret superpower when it comes to searching.

## Searching an Ordered Array

- linear search on an ordered array:

```js
const orderedArray = [3, 17, 75, 80, 202]

function linearSearch(array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > searchValue) {
      return -1
    }
    if (array[i] === searchValue) {
      return i
    }
  }
  return -1
}
```

## Binary Search

- Note that binary search is only possible within an ordered array.
- algorithm attention:
  - `lowerBound <= upperBound`
  - `Math.floor((upperBound + lowerBound) / 2)`
  - `upperBound = middlePoint - 1`
  - `lowerBound = middlePoint + 1`
  - `return -1`

```js
function binarySearch(orderedArray, searchValue) {
  let lowerBound = 0
  let upperBound = orderedArray.length - 1

  while (lowerBound <= upperBound) {
    const middlePoint = Math.floor((upperBound + lowerBound) / 2)
    const valueAtMiddlePoint = orderedArray[middlePoint]
    if (searchValue === valueAtMiddlePoint) {
      return middlePoint
    }
    if (searchValue < valueAtMiddlePoint) {
      upperBound = middlePoint - 1
    }
    if (searchValue > valueAtMiddlePoint) {
      lowerBound = middlePoint + 1
    }
  }

  return -1
}
```

## Binary Search vs. Linear Search

- Each time we double the data, the binary search algorithm adds just one more step.

### Pop Quiz

- However, insertion within an ordered array still remains slower than within a regular array, as the regular array’s insertion doesn’t require a search at all.

## Wrapping Up

- In situations where you don’t anticipate the need to search the data much, only adding data, standard arrays may be a better choice because their insertion is faster.
