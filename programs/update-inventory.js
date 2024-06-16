function updateInventory(arr1, arr2) {
  let ansArray = [];
  const obj = {};
  const arr3 = [...arr1, ...arr2];

  for (const [amount, name] of arr3) {
    if (obj[name]) {
      obj[name] = obj[name] + amount;
      // m.set(name, m.get(name) + amount);
    } else {
      obj[name] = amount;
    }
  }

  return Object.entries(obj).map(([key, value]) => [value, key]);
}

updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
// describe("updateInventory", () => {
//   test("should return an array of particular length", () => {
//     expect(
//       updateInventory(
//         [
//           [21, "Bowling Ball"],
//           [2, "Dirty Sock"],
//           [1, "Hair Pin"],
//           [5, "Microphone"],
//         ],
//         [
//           [2, "Hair Pin"],
//           [3, "Half-Eaten Apple"],
//           [67, "Bowling Ball"],
//           [7, "Toothpaste"],
//         ]
//       ).length
//     ).toBe(6);
//   });
//   test("should return correct output", () => {
//     expect(
//       updateInventory(
//         [
//           [21, "Bowling Ball"],
//           [2, "Dirty Sock"],
//           [1, "Hair Pin"],
//           [5, "Microphone"],
//         ],
//         [
//           [2, "Hair Pin"],
//           [3, "Half-Eaten Apple"],
//           [67, "Bowling Ball"],
//           [7, "Toothpaste"],
//         ]
//       )
//     ).toEqual([
//       [88, "Bowling Ball"],
//       [2, "Dirty Sock"],
//       [3, "Hair Pin"],
//       [3, "Half-Eaten Apple"],
//       [5, "Microphone"],
//       [7, "Toothpaste"],
//     ]);

//     expect(
//       updateInventory(
//         [
//           [21, "Bowling Ball"],
//           [2, "Dirty Sock"],
//           [1, "Hair Pin"],
//           [5, "Microphone"],
//         ],
//         []
//       )
//     ).toEqual([
//       [21, "Bowling Ball"],
//       [2, "Dirty Sock"],
//       [1, "Hair Pin"],
//       [5, "Microphone"],
//     ]);

//     expect(
//       updateInventory(
//         [],
//         [
//           [2, "Hair Pin"],
//           [3, "Half-Eaten Apple"],
//           [67, "Bowling Ball"],
//           [7, "Toothpaste"],
//         ]
//       )
//     ).toEqual([
//       [67, "Bowling Ball"],
//       [2, "Hair Pin"],
//       [3, "Half-Eaten Apple"],
//       [7, "Toothpaste"],
//     ]);

//     expect(
//       updateInventory(
//         [
//           [0, "Bowling Ball"],
//           [0, "Dirty Sock"],
//           [0, "Hair Pin"],
//           [0, "Microphone"],
//         ],
//         [
//           [1, "Hair Pin"],
//           [1, "Half-Eaten Apple"],
//           [1, "Bowling Ball"],
//           [1, "Toothpaste"],
//         ]
//       )
//     ).toEqual([
//       [1, "Bowling Ball"],
//       [0, "Dirty Sock"],
//       [1, "Hair Pin"],
//       [1, "Half-Eaten Apple"],
//       [0, "Microphone"],
//       [1, "Toothpaste"],
//     ]);
//   });
// });
