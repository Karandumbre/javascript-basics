# TypeScript Concepts and Examples

This document covers various TypeScript concepts and examples, including `unknown`, `readonly`, `tuples`, `enums`, `interfaces`, `types`, and more.

## Basic Types and Type Assertions

### Unknown

`unknown` is a type-safe counterpart to `any`. You must perform type checks before using it.

```typescript
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;
```

### Generic Function

Generics provide a way to make components work with any data type.

```typescript
function genericFunction<K, P>(value: K): P {
  return (value + "z") as P;
}
```

## Readonly Properties

### First Approach

Using type alias to create readonly properties.

```typescript
type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = {
  readonly name: string;
  readonly age: number;
};

let person: ReadonlyPerson = { name: "Alice", age: 25 };
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
```

### Second Approach

Using mapped types to create readonly properties.

```typescript
type ReadonlyPerson2 = {
  readonly [K in keyof Person]: Person[K];
};

let person2: ReadonlyPerson2 = { name: "Alice", age: 25 };
```

### Third Approach

Using generics to create readonly properties.

```typescript
type ReadonlyPerson3<T> = {
  readonly [K in keyof T]: T[K];
};

let person3: ReadonlyPerson3<Person> = { name: "Alice", age: 25 };
```

## Tuples

Tuples are used to define an array with fixed types at each index.

```typescript
var Tuple: [string, number] = ["John", 25];
```

## Unknown vs Any

### Unknown

Forces you to check the type before using it.

```typescript
var value: unknown;

value = true;
value = 10;

if (typeof value === "number") {
  console.log("This is a number");
}
```

### Any

Opts out of type checking.

```typescript
var price: any = 25;
```

## Never

Represents the type of values that never occur.

```typescript
function errorMessage(message: string): never {
  throw new Error(message);
}
```

## Interfaces vs Types

### Interface

Used for defining object, class, and function types.

```typescript
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class PersonClass implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
```

### Type

Used for defining union, intersection, and primitive types.

```typescript
type Combinable = number | string;

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type AddFn = (a: number, b: number) => number;
type GenericAddFn<T> = (a: T, b: T) => T;
```

## Enums

Enums are a way of defining named constants.

```typescript
enum ROLE {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
```

## Declaration Merging

Interfaces can merge declarations.

```typescript
interface Animal {
  name: string;
}

interface Animal {
  meow: () => void;
}

var cat: Animal = {
  name: "Cat",
  meow() {
    console.log("Meow");
  },
};
```

## JSON Serialization

Type definition for JSON values.

```typescript
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };
```

## Optional Chaining and Nullish Coalescing

### Optional Chaining

```typescript
var searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get("id");
console.log(id?.toLowerCase());
```

### Nullish Coalescing

```typescript
console.log(id ?? "DEFAULT");
```

### Non-null Assertion

```typescript
console.log(id!.toLowerCase());
```

## Error Handling

Handling errors with try/catch.

```typescript
var somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }
};

try {
  somethingDangerous();
} catch (error) {
  console.log((error as Error).message);
}
```

## Record Type

Using `Record` to define an object with specific key and value types.

```typescript
var user: Record<string | number, string> = {
  name: "John",
  25: "age",
};
```

## Conclusion

Use types unless you need features like declaration merging, JSON serialization, or class implementation. For more predictable code, prefer types. There is no performance difference between interfaces and types.
