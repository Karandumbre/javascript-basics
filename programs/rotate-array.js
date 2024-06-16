function rotateArray(nums, k) {
  k = k % nums.length; // If k is larger than array length, get the remainder
  let part = nums.splice(nums.length - k); // Remove the last k elements
  nums.unshift(...part); // Insert the removed elements at the start
}

// Example usage
let arr = [1, 2, 3, 4, 5];
rotateArray(arr, 2);
console.log(arr); // Output: [4, 5, 1, 2, 3]
