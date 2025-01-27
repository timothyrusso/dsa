// NON COMPLETATO

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  strs.sort();
  const m = { 0: [strs[0].split('').sort().join('')] };

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].split('').sort().join('') === m[i]) {
      m[strs[i]].push(strs[i]);
    } else {
      m[i] = strs[i];
    }
  }

  return m;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
