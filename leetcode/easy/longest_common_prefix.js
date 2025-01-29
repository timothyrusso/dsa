/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let c = strs[0];
  let r = '';

  for (let j = 0; j < c.length; j++) {
    for (let k = 0; k < strs.length; k++) {
      if (strs[k][j] !== c[j]) {
        return r;
      }
    }
    r = r + c[j];
  }
  return r;
};

console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['cir', 'car']));
