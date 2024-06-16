// //karan
// //js - 7
// //react - 7

// function Person(firstName) {
//   this.firstName = firstName;
//   this.printName1 = function () {
//   	console.log(this.firstName);
//   };
//   this.printName2 = () => {
//   	console.log(this.firstName);
//   };
// };

// const bill = new Person('Bill');
// const steve = new Person('Steve');

// bill.printName1(); // Bill
// bill.printName2(); // Bill

// bill.printName1.bind(steve)(); // Steve
// bill.printName2.bind(steve)(); // Bill

// var sayName = bill.printName1;
// sayName(); // undefined

////////////////////////////////////////////////////

var input1 = {
  a: "a1",
  b: "b2",
  c: {
    c1: "c1",
    c2: "c2",
  },
  d: "d1",
};

var input2 = {
  a: "a1",
  c: {
    c1: "c1",
    c2: "c2",
    c3: "c3",
  },
  d: "d2",
};

var output = {
  b: "b2",
  c: {
    c3: "c3",
  },
  d: "d1",
};

const checkDuplicates = (input1, input2) => {
  const uniqueObj = {};

  const mergeKeys = (source, target) => {
    for (const key in source) {
      if (typeof source[key] === "object" && typeof target[key] === "object") {
        uniqueObj[key] = checkDuplicates(source[key], target[key]);
      } else if (source[key] !== target[key]) {
        uniqueObj[key] = source[key];
      }
    }
  };

  mergeKeys(input1, input2);
  mergeKeys(input2, input1);

  return uniqueObj;
};

console.log(checkDuplicates(input1, input2));
