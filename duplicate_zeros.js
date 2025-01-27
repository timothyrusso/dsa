/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const l = arr.length;

  let i = 0;
  while (i < l) {
    if (arr[i] === 0) {
      arr.splice(i + 1, 0, 0);
      i += 2;
    } else {
      i++;
    }
  }

  arr.splice(l, arr.length - l);
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
console.log(duplicateZeros([1, 2, 3]));
