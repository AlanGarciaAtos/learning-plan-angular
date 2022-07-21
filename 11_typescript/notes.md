# Typescript

> NOTE: Don't have open the same file because it will throw some errors. (ex: open in the editor app.js & app.ts)

To use typescript without globally installing
`npm install typescript --save-dev` <br>
Then `npx tsc <file.ts>`

## Advantages

- Adds Types!
- Next gen js features (compiled dow to older versions of js)
- Non-js features like interfaces and generics
- Decorators (they say it's meta)
- Rich in configuration
- Modern tooling that helps non-typescript projects

# Working with Types

## Core syntax & features

### Core types

- number | 1, 5.4, -10 | All numbers, no difference between floats or int
- String | 'Hi', "Hi", `Hi` | All text values
- Boolean | true, false | Just these two, no "truthy" or "falsy" values
- Object | {age:30} | Any js object, more specific types (type of object) are possible
- Array | [1,2,3] | Any js array, type can be flexible or strict (regarding the element types)
- Tuple | [1,2] | Added by Typescript: Fixed-length array and type
- Enums | enum{NEW,OLD} | Added by Typescript: Automatically enumarated global constraints
- Any | \* | Any kind of value, no specific type assigment

<br>

### Tuples

To be clearer when we want a fixed array, so it doesn't change

If we use tuples now we can explicit tell our object that has a tuple. <br>
If we use push() doens't give us an error, it's an exception

```typescript
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Alan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'], //Identifier and "description"
};
```

### Enums

> Note: Often, you'll see enums with all-uppercase values but that's **not a "must-do"**. You can go with **ANY values name**.

Great construct when you need identifiers that are human readable that has some map values behind the scenes

It is inferred ADMIN (in this case) started at 0, then the other values incremented 1. However, you can mix values or started at any number.

```typescript
enum Role {
  ADMIN, //0
  READ_ONLY, //1
  AUTHOR, //2
}
enum Role {
  ADMIN = 4, //4
  READ_ONLY, //5
  AUTHOR, //6
}
enum Role {
  ADMIN = 'ADMIN', //'ADMIN'
  READ_ONLY = 42, //42
  AUTHOR = 321, //321
}
```

Typescript's type system only helps you during development (i.e before the code gets compiled)

Javascript uses "dynamic types" and typescript uses "static types" (set in development)

### Type Inference

To understand what type is the variable or constant

# Intermediate Types

### Union Types

### Literal Types

### Types Aliases

### Function Types and Callbacks

### Unknown Type & Never Type

**Unknown Types**<br>
It's better if we know in advance, or make use of union types

## Questions

1. Why is better not naming the objects?

```typescript
// const person: {name:string; age:number} = {
const person = {
  name: 'Alan',
  age: 30,
};
```

2. If we don't have a tuple do we don't need to explicit tell?
3. When is a good option to use unknown type?
   **Making an interface in TS**

```typescript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount('Murphy', 1);
```
