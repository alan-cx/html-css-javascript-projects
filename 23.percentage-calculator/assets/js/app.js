const form = document.querySelector('.form');
const showResult = document.querySelector('.show-result');

let value = 0;

form.addEventListener('submit', (e) => {
  const formElement = e.currentTarget;

  e.preventDefault();
  const formData = new FormData(formElement);

  const percentage = formData.get('percentage');
  const value = formData.get('user-value');

  if ( !percentage && !value ) {
    showResult.innerText = '';
    showResult.innerText = 'Please, enter valid values';
    return;
  }

  calculatePercentage(+percentage, +value);

})

function calculatePercentage(percentage, value) {
  let calculus = Math.floor((percentage * value) / 100);
  showResult.innerText = `The ${percentage}% of ${value} is ${calculus}%`;
}
