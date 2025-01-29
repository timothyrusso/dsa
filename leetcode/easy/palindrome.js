const originalString = 'Ollo';

const revertString = (value) => {
  const arrayValue = value.toLowerCase().split('');
  const length = arrayValue.length - 1;

  let palindrome = [];
  for (let i = 0; i <= length; i++) {
    palindrome[i] = arrayValue[length - i];
  }

  return palindrome.join('');
};

const palindromeWord = revertString(originalString);

console.log(palindromeWord === originalString.toLowerCase());
