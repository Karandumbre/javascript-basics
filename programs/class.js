function Person() {
  this.name = "k";

  this.innerFunc = () => {
    console.log("innerFunc 1231");
  };
  //   return { name: "k2" };
}

const person1 = new Person();
const person2 = Person(); // This will throw an error in ES6 class

const innerFunc = person1.innerFunc;

innerFunc();
console.log(person1, person2); // Person { name: 'k' }

(() => {
  var z = 1;
})();

console.log(z || ""); // ReferenceError: z is not defined

// how to fix the above error

(() => {
  var z = 1;
  console.log(z);
})();
