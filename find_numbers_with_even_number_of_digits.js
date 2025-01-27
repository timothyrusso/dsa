/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let e = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      e++;
    }
  }

  return e;
};

console.log(findNumbers([555, 901, 482, 1771]));
