const form = document.querySelector('form');
const input = document.querySelector('input');
const submitBtn = document.querySelector('.submit-btn');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if ( input.value === '' ) {
    return;
  }

  const isPrime = checkPrimeNumber(+input.value)

  if ( isPrime ) {
    result.innerHTML = `${ input.value } is Prime.`;
  }
  else {
    result.innerHTML = `${ input.value } is not Prime.`;
  }
})

function checkPrimeNumber(int) {
  if (int <= 1) {
    return false;
  } 
  
  for ( let i = 2; i < int; i++ ) {
    if ( int % i === 0 ) {
      return false;
    }  
  }
  return true;
}
