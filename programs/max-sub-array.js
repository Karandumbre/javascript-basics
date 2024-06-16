// 2. Find the Maximum Sum Subarray (Kadane’s Algorithm)
// Problem: Find the subarray (contiguous elements) with the maximum sum in an array of integers.

// Explanation: Kadane’s Algorithm is an optimal way to solve this with a linear time complexity. It scans the array while maintaining the current subarray sum and the best sum found so far.

function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]); // Include the current element or start new subarray
    maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is larger
  }

  return maxSum;
}

// Example usage
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 ([4, -1, 2, 1] has the max sum)
