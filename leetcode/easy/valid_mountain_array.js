/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let m = Math.max(...arr);
  let maxCount = 0;
  if (arr.length <= 2 || m === arr[0] || m === arr[arr.length - 1]) {
    return false;
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === m) {
      maxCount++;
    }
  }

  if (maxCount > 1) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1] && arr[i + 1] !== m) {
      if (arr[i] === m) {
        break;
      }
      return false;
    }
  }

  for (let k = arr.length - 1; k >= 0; k--) {
    if (arr[k] >= arr[k - 1] && arr[k - 1] !== m) {
      if (arr[k] === m) {
        break;
      }
      return false;
    }
  }

  return true;
};

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));

// https://leetcode.com/problems/valid-mountain-array/
