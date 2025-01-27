const word = 'apple';

const arrayWord = word.split('');

let palindrome = [];

for (let i = 0; i < arrayWord.length; i++) {
  palindrome[i] = arrayWord[arrayWord.length - 1 - i];
}

const palindromeWord = palindrome.join('');

console.log(palindromeWord);
