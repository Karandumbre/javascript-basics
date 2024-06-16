# JavaScript Concepts and Examples

This document covers various JavaScript concepts and examples, including `call`, `apply`, and `bind`, as well as other essential topics and interview questions.

## Function Methods: Call, Apply, Bind

### Call

`call` attaches a function to an object temporarily and runs the function.

Example 1:

```javascript
var obj = {
  num: 3,
};

var addToThis = function (a) {
  return this.num + a;
};

addToThis.call(obj, 3); // Output: 6
```

Example 2:

```javascript
var obj = {
  num: 3,
};

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

addToThis.call(obj, 1, 2, 3); // Output: 9
```

### Apply

`apply` is similar to `call` but takes an array as the second argument.

Example:

```javascript
var obj = {
  num: 3,
};

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];

addToThis.apply(obj, arr); // Output: 9
```

### Bind

`bind` returns a function with the specified `this` value and arguments.

Example:

```javascript
var obj = {
  num: 3,
};

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

var bound = addToThis.bind(obj);

bound(1, 2, 3); // Output: 9
```

## Class vs Function

- **Class**: Cannot be invoked without the `new` operator. Executes in strict mode. Properties in class methods are non-enumerable.
- **Function**: Can be invoked without the `new` operator.

## Throttling

Throttling limits the number of times a function can execute over time.

## Storage

- **Local Storage**: Stores up to 5MB of data.
- **Session Storage**: Stores session-related data.
- **Cookie**: Stores less data, sent with every network call.

## Preflight Request

A preflight request is made before an API call to check if the server will accept the actual request.

## Script Loading

- **Normal Script Tag**: Fetches and executes the script immediately.
- **Async Script Tag**: Fetches script asynchronously without guaranteeing execution order.
- **Defer Script Tag**: Fetches script asynchronously and executes it after the HTML parsing is complete.

## Transpiler

Transpilers like Babel convert ES6+ code to ES5.

## ES6 Features

Includes let, const, arrow functions, default parameters, rest and spread operators, object literals, destructuring, string templates, for...of loop, and classes.

## ES7 Features

Includes exponential operator (`**`), `includes`, `Object.values`, `Object.entries`, `padStart`, `padEnd`, `Object.create`, `Object.getOwnPropertyDescriptors`.

## ES8 Features

Includes trailing commas, `async/await`.

## ES2020 Features

Includes `MaxSafeInteger`, dynamic imports, nullish coalescing, optional chaining, `Promise.allSettled`.

## Interview Questions

Common interview questions include topics on closures, prototypes, inheritance, async/await, promises, event loop, and more.

## Example Interview Questions

1. How to reverse a string in JavaScript?
2. What is the difference between `null` and `undefined`?
3. How to create and use closures?
4. Explain prototypal inheritance with an example.
5. How to handle asynchronous operations using async/await?

## Practical Examples

- **Closures**: Demonstrating encapsulation and data privacy.
- **Event Listeners**: Managing events and understanding memory usage.
- **Async Operations**: Using promises and async/await for asynchronous programming.

## Function vs Class

### Class

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

let user = new User("John");
user.sayHi();
```

### Function

```javascript
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  alert(this.name);
};

let user = new User("John");
user.sayHi();
```

## Throttling

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

## Storage

- **Local Storage**: Can store up to 5MB of data. Useful for caching data or storing general data.
- **Session Storage**: Stores session-related data. Data is cleared when the page session ends.
- **Cookie**: Stores less data. Data is sent with every network call.

## Preflight Request

Preflight requests are made by browsers to check if the server will accept the actual request. The browser sends headers to the server, which validates them before sending the actual request.

## Script Loading

### Normal Script Tag

```html
<script src="script.js"></script>
```

### Async Script Tag

```html
<script async src="script.js"></script>
```

### Defer Script Tag

```html
<script defer src="script.js"></script>
```

## Transpilers

Transpilers like Babel and Traceur take ES2015+ code and generate ES5 code.

## ES6 Features

- `let`, `const`
- Arrow functions
- Default function parameters
- Rest and spread operators
- Object literals
- Destructuring objects
- String templates
- `for...of` loop
- Classes

## ES7 Features

- Exponential operator (`**`)
- `includes`
- `Object.values`
- `Object.entries`
- `padStart`
- `padEnd`
- `Object.create`
- `Object.getOwnPropertyDescriptors`

## ES8 Features

- Trailing commas
- `async/await`

## ES2020 Features

- `MaxSafeInteger`
- Dynamic imports
- Nullish coalescing
- Optional chaining
- `Promise.allSettled`

## Interview Questions

### Example Interview Questions

1. How to reverse a string in JavaScript?

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}
```

2. What is the difference between `null` and `undefined`?

- `null` is an assigned value. It means nothing.
- `undefined` means a variable has been declared but not yet assigned a value.

3. How to create and use closures?

```javascript
function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
```

4. Explain prototypal inheritance with an example.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice");
person1.sayHello(); // Hello, my name is Alice
```

5. How to handle asynchronous operations using async/await?

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

## Practical Examples

### Closures

```javascript
function createCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const counter = createCounter();
console.log(counter()); // 0
console.log(counter()); // 1
```

### Event Listeners

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked");
});
```

### Async Operations

```javascript
function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

fetchData("https://api.example.com/data");
```
