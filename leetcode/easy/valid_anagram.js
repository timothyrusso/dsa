/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let a = s.split('');
  const m = {};
  for (let i = 0; i < a.length; i++) {
    if (!m[a[i]]) {
      m[a[i]] = 1;
    } else {
      m[a[i]] += 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!m[t[j]] || m[t[j]] === 0) {
      return false;
    }
    m[t[j]] -= 1;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('ab', 'a'));
console.log(isAnagram('aacc', 'ccac'));
