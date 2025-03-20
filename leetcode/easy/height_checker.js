/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let a = heights.slice().sort((a, b) => a - b);
  let r = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== a[i]) {
      r++;
    }
  }

  return r;
};

console.log(
  heightChecker([
    10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7,
  ]),
);
