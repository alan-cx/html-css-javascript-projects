const textArea = document.querySelector('textarea');
const buttons = document.querySelectorAll('button');
const contentTransformed = document.querySelector('.show-content');

let formatedText;

buttons.forEach(btn => 
  btn.addEventListener('click', (e) => {
    const { value } = e.currentTarget;

    if ( !textArea.value ) {
      contentTransformed.innerText = 'Please, type something!';
      return;
    }
    transformContent(value);
  })
)

function transformContent(value) {

  if ( value === 'uppercase' ) {
    formatedText = textArea.value.toUpperCase().trim();
  }

  if ( value === 'lowercase' ) {
    formatedText = textArea.value.toLowerCase().trim();
  }

  if ( value === 'capitalize' ) {
    let result = textArea.value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    formatedText = result;
  }

  if (value === 'clear') {
    textArea.value = '';
    formatedText = 'Your text transformed will appear here...';
  }

  contentTransformed.innerText = formatedText;

}

