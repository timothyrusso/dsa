/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let m = {};

  for (let i = 0; i < words[0].length; i++) {
    const char = words[0][i];
    m[char] = (m[char] || 0) + 1;
  }

  for (let j = 1; j < words.length; j++) {
    let c = {};

    for (let k = 0; k < words[j].length; k++) {
      const charC = words[j][k];
      c[charC] = (c[charC] || 0) + 1;
    }

    for (let w = 0; w < Object.keys(m).length; w++) {
      if (c[Object.keys(m)[w]]) {
        m[Object.keys(m)[w]] = Math.min(
          m[Object.keys(m)[w]],
          c[Object.keys(m)[w]],
        );
      } else {
        m[Object.keys(m)[w]] = 0;
      }
    }
  }

  let r = [];

  for (let property in m) {
    if (m[property] > 0) {
      for (let y = 0; y < m[property]; y++) {
        r.push(property);
      }
    }
  }

  return r;
};

console.log(commonChars(["bella", "label", "roller"]));
console.log(commonChars(["cool", "lock", "cook"]));
