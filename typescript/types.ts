// tuple
var Tuple: [string, number] = ["John", 25];

// unknown -> Better than any because it forces you to check the type before using it
var value: unknown;

value = true;
value = 10;

if (typeof value === "number") {
  console.log("This is a number");
}

// any -> Opts out of type checking
// often used when migrating from JS to TS
var price: any = 25;

// never -> Represents the type of values that never occur
function errorMessage(message: string): never {
  throw new Error(message);
}

// difference between interface and type
// interface -> used when defining an object; Mostly uses for object, class, and function types; Faster than type for type checking
// type -> used when defining a union or intersection; Mostly uses for union, intersection, and primitive types; More flexible than interface

// Interface can inherit from other interfaces
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// Class can implement multiple interfaces
class PersonClass implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

// Type can be used to define a union
type Combinable = number | string;

// Type can be used to define an intersection

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// Type can be used to define a function

type AddFn = (a: number, b: number) => number;

// Type can be used to define a generic type
type GenericAddFn<T> = (a: T, b: T) => T;

// Path: app.ts
// Enum
enum ROLE {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// interface comes with a lot of features

// Declaration merging
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

// JSON serialization

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

// Conclusion - Use types unless you need features like declaration merging, JSON serialization,
// or class implementation (If you need to extend to some other type). In that case, use interfaces.

// If you want something predictable, use types. (If never going to act strange)

// No performance difference between interface and type, (types just perform same as interface)

var user: Record<string | number, string> = {
  name: "John",
  25: "age",
};

var searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get("id");

// Optional chaining
console.log(id?.toLowerCase());

// Nullish coalescing operator
console.log(id ?? "DEFAULT");

// Non-null assertion operator
console.log(id!.toLowerCase());

var somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }
};

try {
  somethingDangerous();
} catch (error) {
  console.log(error.message);
}

// catch (error) {
// if (error instanceof Error) {} }
