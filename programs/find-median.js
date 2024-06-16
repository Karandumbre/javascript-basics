var findMedianSortedArrays = function (nums1, nums2) {
  let pointer1 = 0;
  let pointer2 = 0;
  const mergedArray = [];

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] <= nums2[pointer2]) {
      mergedArray.push(nums1[pointer1]);
      pointer1++;
    } else {
      mergedArray.push(nums2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < nums1.length) {
    mergedArray.push(nums1[pointer1]);
    pointer1++;
  }

  while (pointer2 < nums2.length) {
    mergedArray.push(nums2[pointer2]);
    pointer2++;
  }

  const n = mergedArray.length;
  if (n === 0) {
    return 0;
  }

  // Calculate median
  if (n % 2 === 0) {
    return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
  } else {
    return mergedArray[Math.floor(n / 2)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([], [2, 4, 7])); // Output: 4
console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5])); // Output: 3
