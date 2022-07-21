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
- Also tells me when I have the same named function between all my TS files.

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

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways

TypeScript allows us to use more than one data type for a variable or a function parameter.

```typescript
function combine(input1: number | string, input2: number | string) {
  let res;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    res = +input1 + +input2;
  } else {
    res = input1.toString() + input2.toString();
  }
  return res;
}
const combinedAges = combine(30, 28); //58
```

### Literal Types

Literal types are specific strings and numbers in type positions.

We can even combined literal types into unions

```typescript
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {...}
const combinedStringAges = combine('30', '26','as-number');
const combinedStringAges = combine('30', '26','as-nuMbER');// Throw an error it's NOT the same as [as-number]
```

### Types Aliases

Type aliases are a way to simplify a long parameter or some variable in an alias (only a name for any type).
<br>
It merely for documentation purposes and to make your code more organized and readable.

```typescript
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: number | string,
  resultConversion: ConversionDescriptor
) {...}
nst combinedStringAges = combine('30', '26','as-number')//3026 [bc it's a string]
```

### Function Types and Callbacks

**Function Types**

Like other programming languages you can return void in functions. It doesn't return anything. Useful for event listeners or something similar. <br>
Also you can return number, string, boolean, arrays.

```typescript
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}
printResult(add(5, 12));
```

**Function Types in functions**

If we add `combineValues = printResult;` it throw us an error because `let combineValues: (a: number, b: number) => number;` checks if that function have two numbers as arguments and returns a number. `function printResult(){...}`

Allow us to describe which type of function specifically we want to use somewhere be than an expected value in a parameter for create a function with some callback. <br>
Or like here `let combineValues: (a: number, b: number) => number;` to create a variable.

```typescript
function add(n1: number, n2: number){...}
function printResult(num: number){...}
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; //Throw errors
// combineValues = 4;
console.log(combineValues(8, 8));

// let someValue = undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});
```

### Unknown Type & Never Type

Are niche types, but can be useful

**Never Types**
It's common to use never when throwing an error message. The function `generatedError` throws actually a never but it says a void.

**Unknown Types**<br>
It's better if we know in advance, or make use of union types. If you don't know what type is your variable write _unknown_ BUT it's better than _any_

```typescript
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generatedError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
generatedError('An error ocurred!', 500);
```

# The Typescript Compiler

## Configuring & Using the Typescript Compiler

> NOTE: Bc we don't have TS globally we need to make use of npx. Maybe I need to install Typescript globally

Imagine if we have a project with multiple TS files, it's not an option to do it manually (you can but come on).<br>
This command come in handy for multiple TS files or your project `tsc --init`. _You only use it once_. No need to use the same command again.
Then you only write `tsc` to make the TS to JS or if you don't want to use `tsc`, you can write `tsc -w`, so the TS compiled to JS.

**Watch node**
Starting watch node `tsc app.ts -w` however it will only apply to the specific file.

> **DON'T quit** this watch mode process while developing. You can quit thereafter via **CTRL + C**;

### TS CONFIG

**Include and exclude files**

```json
"exclude": [
    "node_modules" //would be the default
  ],
  "files": [
    "app.ts" //In reality you might not use this often
  ],
  "include": [
    "app.ts", //Will only compiled app.ts
  ]
```

**Target**
Tell the tsconfig do compiled the code to certain version of JS `"target": "ES6", `

**lib**
Technically is the same if we add in target ES6

```json
"lib": [
      "DOM",
      "ES6",
      "DOM.Iterable",
      "ScriptHost"
    ],
```

(Start at 2:38:00, good video to see about tsconfig.json)[https://www.youtube.com/watch?v=BwuLxPH8IDs]

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
4. Is it better to configure the tsconfig to "es6" or the older version?

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
