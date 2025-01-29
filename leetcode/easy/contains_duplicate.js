// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//   let s = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (s.has(nums[i])) {
//       return true;
//     }
//     s.add(nums[i]);
//   }
//   return false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var s = new Set(nums);
  return s;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([{ a: 1 }, { a: 1 }, { a: 1 }]));
