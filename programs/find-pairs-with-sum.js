// 2. Find All Pairs in an Array That Sum to a Specific Value
// Problem: Given an array of integers and a target sum, find all pairs of integers in the array whose sum equals the target sum.

// Explanation: The goal is to identify pairs of numbers that, when added together, yield the target sum.

function findPairsWithSum(nums, target) {
  let pairs = [];
  let seen = new Set();

  for (let num of nums) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}

// Example usage
console.log(findPairsWithSum([2, 7, 11, 15], 9)); // Output: [[2, 7]]
