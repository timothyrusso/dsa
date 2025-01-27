/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let m = 0;
  arr.push(-1);
  arr.shift();
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= arr[i + 1]) {
      m = arr[i];
    } else if (arr[i] < arr[i + 1]) {
      arr[i] = m;
    }
  }

  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400]));

// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
