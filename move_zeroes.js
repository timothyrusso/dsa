/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums === null) return nums;

  for (let i = 0; i <= nums.length; i++) {
    if (i === 0 && nums[i] === 0) {
      nums.shift();
      nums.push(0);
    }
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  return nums;
};

//console.log(moveZeroes([0, 1, 0, 3, 12]));
//console.log(moveZeroes([0]));
console.log(moveZeroes([0, 0, -1, 2, 0]));
//console.log(moveZeroes([1, 0, 1, 0, 3, 12]));

// https://leetcode.com/problems/move-zeroes/
