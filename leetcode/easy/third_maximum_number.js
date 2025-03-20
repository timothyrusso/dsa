/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let s = new Set(nums);
  let a = Array.from(s);
  a.sort((a, b) => b - a);

  if (a.length >= 3) {
    return a[2];
  }

  return a[0];
};

console.log(thirdMax([3, 1, 2, 2, 2, 3, 5]));
