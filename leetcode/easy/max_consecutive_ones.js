// https://leetcode.com/problems/max-consecutive-ones/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let t = 0;
  let r = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      t += 1;
      r = Math.max(r, t);
    } else {
      t = 0;
    }
  }

  return r;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([1, 0, 1, 0, 1]));
console.log(findMaxConsecutiveOnes([0, 1, 1, 0, 0]));
console.log(findMaxConsecutiveOnes([0, 0]));
console.log(findMaxConsecutiveOnes([0, 1]));
