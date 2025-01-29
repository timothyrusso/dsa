// https://leetcode.com/problems/check-if-n-and-its-double-exist/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let s = new Set(arr);
  let z = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      z++;
    }
  }

  if (z > 1) {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (s.has(arr[i] / 2) && arr[i] !== 0) {
      return true;
    }
  }
  return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([7, 1, 14, 11]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
console.log(checkIfExist([0, 0]));
