let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

function genericFunction<K, P>(value: K): P {
  return (value + "z") as P;
}

export {};

// First approach
type Person = {
  name: string;
  age: number;
};

type Readonly = {
  readonly name: string;
  readonly age: number;
};

type ReadonlyPerson = Readonly;

// Second approach
type ReadonlyPerson2 = {
  readonly [K in keyof Person]: Person[K];
};

// 3rd approach - Generics
type ReadonlyPerson3<T> = {
  readonly [K in keyof T]: T[K];
};

let person: ReadonlyPerson = { name: "Alice", age: 25 };
let person2: ReadonlyPerson2 = { name: "Alice", age: 25 };
let person3: ReadonlyPerson3<Person> = { name: "Alice", age: 25 };
// person.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.
