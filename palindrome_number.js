/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let n = x.toString().split('');
  let r = [];
  for (let i = 0; i < n.length; i++) {
    r[i] = n[n.length - 1 - i];
  }

  return x.toString() === r.join('');
};

console.log(isPalindrome(121));
