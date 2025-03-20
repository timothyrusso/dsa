/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  nums.sort();

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let odd;
    if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
      odd = nums[left];
      nums[left] = nums[right];
      nums[right] = odd;
      left++;
      right--;
    } else if (nums[left] % 2 !== 0 && nums[right] % 2 !== 0) {
      right--;
    } else {
      left++;
    }
  }

  return nums;
};

console.log(
  sortArrayByParity([
    3, 1, 2, 4, 4, 7, 8, 1, 1, 2, 4, 5, 1, 3, 3, 8, 99, 5, 4, 22, 33, 1, 1, 0,
    6,
  ]),
);

// 1 2 3 4
// 4 2 3 1 --> salta
// 4 2 3 1 -->
