function rot13(str, shift) {
  let output = "";

  for (let char of str) {
    if (char.match(/[a-z]/i)) {
      // Check if the character is a letter
      let code = char.charCodeAt();
      let base = code >= 65 && code <= 90 ? 65 : 97; // Determine ASCII base for uppercase or lowercase
      char = String.fromCharCode(((code - base + shift) % 26) + base); // Rotate and normalize within the alphabet
    }
    output += char; // Append transformed character or original character if not a letter
  }
  return output;
}

// Example usage
console.log(rot13("SERR PBQR PNZC", 13)); // Outputs: "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!", 13)); // Outputs: "FREE PIZZA!"
