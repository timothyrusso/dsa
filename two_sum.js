var twoSum = function (nums, target) {
  let sum = [];
  let firstIndex = 0;
  let secondIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    firstIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      secondIndex = j;
      if (nums[firstIndex] + nums[secondIndex] === target) {
        sum.push(firstIndex, secondIndex);
      }
    }
  }

  return sum;
};

console.log(twoSum([3, 3], 6));

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
