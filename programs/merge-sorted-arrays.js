// 3. Merge Two Sorted Arrays
// Problem: Given two sorted arrays, merge them into a single sorted array.

// Explanation: This task involves combining two arrays that are already sorted in a way that the resulting array is also sorted
function mergeSortedArrays(nums1, nums2) {
  let merged = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  // If there are remaining elements in nums1 or nums2
  while (i < nums1.length) {
    merged.push(nums1[i++]);
  }
  while (j < nums2.length) {
    merged.push(nums2[j++]);
  }

  return merged;
}

// Example usage
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
