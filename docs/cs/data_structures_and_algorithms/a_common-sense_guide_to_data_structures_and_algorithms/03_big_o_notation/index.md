# O Yes! Big O Notation

## Big O: How Many Steps Relative to N Elements?

- key question: if there are N data elements, how many steps will the algorithm take?
- `O(N)` says that the answer to the key question is that the algorithm will take N steps.
- An algorithm that is `O(N)` is also known as having linear time.
- An `O(1)` algorithm can also be referred to as having constant time.
- One way of describing Big O is that it describes the upper bound of the growth rate of a function, or that if a function `g(x)` grows no faster than a function `f(x)`, then `g` is said to be a member of `O(f)`.
- (Supplement) [Big O explanation in Math](https://justin.abrah.ms/computer-science/understanding-big-o-formal-definition.html)

## The Soul of Big O

- The soul of Big O is what Big O is truly concerned about: how will an algorithm’s performance change as the data increases?
- Big O doesn’t want to simply tell you how many steps an algorithm takes. It wants to tell you the story of how the number of steps increase as the data changes.
- Because O(1) and O(3) are the type that aren’t affected by increased data, as their number of steps remain constant, they’re essentially the same kind of algorithm.
- O(N): For every additional piece of data, the algorithm takes one additional step.
- O(1): No matter how much data there is, the number of steps remain constant.

### Deeper into the Soul of Big O

- `O(N)` is considered to be, on the whole, less efficient than `O(1)` no matter how many steps the `O(1)` algorithm actually takes.

### Same Algorithm, Different Scenarios

- If we were to describe the efficiency of linear search in its totality, we’d say that linear search is O(1) in a best-case scenario, and O(N) in a worst-case scenario.
- Big O Notation generally refers to the worst-case scenario.

## An Algorithm of the Third Kind

- In Big O terms, we describe binary search as having a time complexity of: O(log N)
- O(log N) pronounce: Oh of log N
- O(log N) is also known as having a time complexity of log time.
- O(log N) is the Big O way of describing an algorithm that increases one step each time the data is doubled.
- O(log N) is less efficient than O(1), but much more efficient than O(N).

## Logarithms

- Log is shorthand for logarithm.
- Logarithms are the inverse of exponents.
- log<sub>2</sub>8 means how many times do you have to multiply 2 by itself to get a result of 8?
- Another way of explaining log<sub>2</sub>8 is: if we kept dividing 8 by 2 until we ended up with 1, how many 2s would we have in our equation?

## O(log N) Explained

- In computer science, whenever we say O(log N), it’s actually shorthand for saying O(log<sub>2</sub> N). We just omit that small 2 for convenience.
- O(log N) means that for N data elements, the algorithm would take log<sub>2</sub>N steps.
- This is exactly what happens with binary search. As we search for a particular item, we keep dividing the array’s cells in half until we narrow it down to the correct number.
- O(log N) means the algorithm takes as many steps as it takes to keep halving the data elements until we remain with 1.
