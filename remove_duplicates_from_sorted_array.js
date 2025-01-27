/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let s = new Set(nums);

  nums.splice(0, nums.length);

  for (let value of s) {
    nums.push(parseInt(value));
  }

  return s.size;
};

console.log(removeDuplicates([1, 1, 2, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3]));
console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3]));
