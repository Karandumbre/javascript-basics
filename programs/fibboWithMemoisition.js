// 1. Calculate the nth Fibonacci Number
// Problem: Calculate the nth number in the Fibonacci sequence, where each number is the sum of the two preceding ones, starting from 0 and 1.

// Explanation: The Fibonacci sequence is a classic example where dynamic programming shines, particularly using memoization to avoid redundant calculations.

function fibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n]; // Return cached result if available
  }

  if (n <= 1) {
    return n; // Base cases: F(0) = 0, F(1) = 1
  }

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // Recursive call with memoization
  return memo[n];
}

// Example usage
console.log(fibonacci(5)); // Output: 55
