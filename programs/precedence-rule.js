function findWord(pairs) {
  let map = {}; // To map each character to its successor
  let appearsAsSecond = {}; // To track characters that appear as second characters

  // Build the map and set of second characters
  pairs.forEach((pair) => {
    const [first, second] = pair.split(">");
    map[first] = second;
    appearsAsSecond[second] = true;
  });

  // Find the starting character: it appears in the map but not in appearsAsSecond
  let start = Object.keys(map).find((c) => !appearsAsSecond[c]);

  // Construct the word by following the map
  let result = start;
  while (map[start]) {
    result += map[start];
    start = map[start];
  }

  return result;
}

// Test cases
console.log(findWord(["P>E", "E>R", "R>U"])); // PERU
console.log(findWord(["I>N", "A>I", "P>A", "S>P"])); // SPAIN
console.log(findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"])); // HUNGARY
console.log(findWord(["I>F", "W>I", "S>W", "F>T"])); // SWIFT
console.log(findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"])); // PORTUGAL
console.log(
  findWord([
    "W>I",
    "R>L",
    "T>Z",
    "Z>E",
    "S>W",
    "E>R",
    "L>A",
    "A>N",
    "N>D",
    "I>T",
  ])
); // SWITZERLAND
