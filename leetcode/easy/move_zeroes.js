/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums === null) return nums;
  let a = [];
  let z = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      a.push(nums[i]);
    } else {
      z++;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    if (!a[j]) {
      nums[j] = 0;
    } else {
      nums[j] = a[j];
    }
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, -1, 2, 0]));
console.log(moveZeroes([1, 0, 1, 0, 3, 12]));
console.log(moveZeroes([1, 0, 0, 1]));

// https://leetcode.com/problems/move-zeroes/
