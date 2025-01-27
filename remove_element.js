/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let c = nums.concat();
  nums.splice(0, nums.length);

  for (let i = 0; i < c.length; i++) {
    if (c[i] === val) {
      continue;
    }
    nums.push(c[i]);
  }

  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
