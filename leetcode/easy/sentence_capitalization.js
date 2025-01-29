const sentence = 'prova ok va bene';

const splittedSentence = sentence.toLowerCase().split(' ');

const getCapitalized = () =>
  splittedSentence
    .map((word) => word[0].toUpperCase() + word.split('').splice(1).join(''))
    .join(' ');

console.log(getCapitalized());
