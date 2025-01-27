/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = n - 1;
  let j = m + n - 1;
  let k = m - 1;
  while (i >= 0 && k >= 0) {
    if (nums2[i] >= nums1[k]) {
      nums1.splice(j, 1, nums2[i]);
      i--;
      j--;
    } else if (nums2[i] < nums1[k]) {
      nums1.splice(j, 1, nums1[k]);
      j--;
      k--;
    }
  }

  while (i >= 0) {
    nums1.splice(j, 1, nums2[i]);
    i--;
    j--;
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6));
