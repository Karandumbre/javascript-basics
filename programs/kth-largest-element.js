// Find the kth largest/smallest element in array in javascript
function partition(nums, left, right) {
  const pivot = nums[right]; // pivot = 10
  let i = left; // i = 0

  for (let j = left; j < right; j++) {
    if (nums[j] <= pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap elements
      i++;
    }
  }
  [nums[i], nums[right]] = [nums[right], nums[i]]; // Swap the pivot to the correct place
  return i;
}

function quickSelect(nums, left, right, k) {
  if (left === right) return nums[left]; // If the list contains only one element

  // Partition the array and get the position of the pivot
  const pivotIndex = partition(nums, left, right);

  if (k === pivotIndex) {
    return nums[k];
  } else if (k < pivotIndex) {
    return quickSelect(nums, left, pivotIndex - 1, k);
  } else {
    return quickSelect(nums, pivotIndex + 1, right, k);
  }
}

function findKthLargest(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

// Example usage
const array = [3, 2, 1, 5, 6, 4, 9, 10, 8, 11];
const k = 4;
console.log(findKthLargest(array, k)); // Outputs: 5
