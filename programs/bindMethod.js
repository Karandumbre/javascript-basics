// Function to bind a function to an object
const bind =
  (fn, obj) =>
  (...args) =>
    fn.apply(obj, args);

// Test for the bind function
const foo = function (x) {
  return x;
};
const obj = { a: 10 };
console.log(typeof bind(foo, obj)); // expected output: "function"

// Implementation of myBind on Function.prototype
Function.prototype.myBind = function (context, ...args) {
  // 'this' refers to the function to be bound
  let func = this;
  let previousArgs = args;

  return function (...newArgs) {
    return func.apply(context, [...previousArgs, ...newArgs]);
  };
};

// Usage of myBind
const boundFoo = foo.myBind(this, obj); // Incorrect usage in the original code, correcting it
const boundFooCorrected = foo.myBind(this);

console.log(boundFooCorrected(1, 2, 34, 5));
