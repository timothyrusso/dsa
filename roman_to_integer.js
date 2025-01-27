/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let a = s.split('');
  let t = 0;
  let m = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  for (let i = a.length - 1; i >= 0; i--) {
    if (i > 0 && m.get(a[i - 1]) >= m.get(a[i])) {
      if (i < a.length - 1 && m.get(a[i + 1]) > m.get(a[i])) {
        continue;
      }
      t += m.get(a[i]);
    } else if (i > 0) {
      t += m.get(a[i]) - m.get(a[i - 1]);
    } else if (
      (i === 0 && m.get(a[i + 1]) <= m.get(a[i])) ||
      (i === 0 && a.length === 1)
    ) {
      t += m.get(a[i]);
    }
  }

  return t;
};

console.log(romanToInt('D'));
console.log(romanToInt('IV'));
console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
