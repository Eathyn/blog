---
date: 2022-10-13
category: TypeScript
tag:
- Book - Learning TypeScript
- chapter 04
---

# Objects

## Object Types

- TypeScript will throw error if accessing a non-exist property in object.

```ts
const obj = {}
obj.a // Property 'a' does not exist on type '{}'.
```

### Declaring Object Types

```ts
let person: {
  name: string,
  age: number,
}
```

### Aliased Object Types

- Using type alias to reuse object shape.

```ts
type Person = {
  name: string,
  age: number,
}
```

## Structural Typing

### Usage Checking

- TypeScript will throw an error if a required property is missing.

```ts
type Person = {
  name: string,
  age: number,
}

// Property 'age' is missing in type '{ name: string; }' but required in type 'Person'. 
let p1: Person = {
  name: 'eathyn',
}
```

### Excess Property Checking

- TypeScript will throw an error if a property is not defined in an object type but used.

```ts
type Person = {
  name: string,
  age: number,
}

// Error
let p1: Person = {
  name: 'eathyn',
  age: 25,
  grade: 4,
}
```

### Nested Object Types

```ts
type Book = {
  author: {
    firstName: string,
    lastName: string,
  },
  name: string,
}

const book1: Book = {
  // Error: lack 'lastName'
  author: {
    firstName: 'eathyn',
  },
  name: 'Learning TypeScript',
}
```

- nested type alias

```ts
type Book = {
  author: Author,
  name: string,
}

type Author = {
  firstName: string,
  lastName: string,
}

const book1: Book = {
  // Error: lack 'lastName'
  author: {
    firstName: 'eathyn',
  },
  name: 'Learning TypeScript',
}
```

### Optional Properties

- Adding `?` before `:` to indicate that property is optional.

```ts
type Person = {
  name: string,
  age?: number, // 'age' is optional
}

// works
const p1: Person = {
  name: 'eathyn',
  age: 25,
}

// also works
const p2: Person = {
  name: 'eaven',
}
```

## Unions of Object Types

### Inferred Object-Type Unions

- generate optional properties.

```ts
const person = Math.random() > 0.5
  ? { name: 'eathyn', age: 25 }
  : { name: 'eaven', grade: 4 }

// is equal to:
type PersonWithAge = {
  name: string,
  age: number,
  grade?: undefined,
}

type PersonWithGrade = {
  name: string,
  age?: undefined,
  grade: number,
}

type Person = PersonWithAge | PersonWithGrade
```

### Explicit Object-Type Unions

- Restricting access to potentially nonexistent members of objects.

```ts
type PersonWithAge = {
  name: string,
  age: number,
}

type PersonWithGrade = {
  name: string,
  grade: number,
}

type Person = PersonWithAge | PersonWithGrade

const person: Person = Math.random() > 0.5
  ? { name: 'eathyn', age: 25 }
  : { name: 'eaven', grade: 4 }

// Error: 'age' and 'grade' may not exist in an object
console.log(person.age)
console.log(person.grade)
```

### Narrowing Object Types

```ts
type Person = {
  name: string,
  age?: number,
}

const person: Person = {
  name: 'eathyn',
  age: 25,
}

if ('age' in person) {
  console.log(`I am ${person.name} and I am ${person.age} years old`)
} else {
  console.log(`I am ${person.name}`)
}
```

### Discriminated Unions

- Another popular form of union typed objects in JavaScript and TypeScript is to have a property on the object indicate what shape the object is.
- This kind of type shape is called a _discriminated_ union, and the property whose value indicates the object’s type is a _discriminant_.

```ts
type StudentWithAge = {
  name: string,
  age: number,
  type: 'age',
}

type StudentWithGrade = {
  name: string,
  grade: number,
  type: 'grade',
}

type Student = StudentWithAge | StudentWithGrade

const student: Student = {
  name: 'eathyn',
  grade: 4,
  type: 'grade',
}

if (student.type === 'grade') {
  console.log('student with grade')
} else {
  console.log('student with age')
}
```

## Intersection Types

- Intersection type is used to create a new type that combines multiple existing object types.

```ts
type TypeA = {
  a: number,
  b: number,
}

type TypeB = {
  c: number,
}

type TypeC = TypeA & TypeB

// Equivalent to:
// type TypeC = {
//   a: number,
//   b: number,
//   c: number,
// }
```

- Intersection types can be combined with union types.

```ts
type TypeA = { a: string } & (
  | { b: string, type: 'b' }
  | { c: string, type: 'c' }
)

type Result1 = {
  a: string,
  b: string,
  type: 'b',
}

// or

type Result2 = {
  a: string,
  c: string,
  type: 'c',
}
```

### Dangers of Intersection Types

- Trying to `&` two primitives will result in the `never` type.

```ts
// TypeA is 'never' type
type TypeA = number & string
```

- The `never` keyword and type is what programming languages refer to as a bottom type, or empty type.
- A bottom type is one that can have no possible values and can’t be reached.
- No types can be provided to a location whose type is a bottom type.

```ts
// Type 'number' is not assignable to type 'never'.
const a: never = 0

// Type 'string' is not assignable to type 'never'.
const b: never = ""
```
