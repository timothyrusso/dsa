const number = (-888746).toString();

const arrayNumber = number.split('');

let reverted = [];
for (let i = 0; i < arrayNumber.length - 1; i++) {
  reverted[i] = arrayNumber[arrayNumber.length - 1 - i];
}

console.log(Number(reverted.join('')) * Math.sign(number));
