const form = document.querySelector('form');
const input = document.querySelector('input');
const showResult = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const originalWord = input.value.trim();

  if (originalWord === '') {
    showResult.innerText = 'Please, enter a word or phrase'
    return;
  }

  checkPalindrome( originalWord );

  input.value = '';
});

function checkPalindrome(wordOrPhrase) {
  const originalText = wordOrPhrase;
  const cleanedText = wordOrPhrase
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]/g, '');
  const reversedText = cleanedText.split('').reverse().join('');
  const isPalindrome = cleanedText === reversedText;

  if (isPalindrome) {
    showResult.innerText = `"${originalText}" is a palindrome.`;
    showResult.classList.remove('false');
    showResult.classList.add('true');
  } 
  else {
    showResult.innerText = `"${originalText}" is not a palindrome.`;
    showResult.classList.remove('true');
    showResult.classList.add('false');
  }
}
