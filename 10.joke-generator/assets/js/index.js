const showJoke = document.getElementById('joke');
const generateJokeBtn = document.getElementById('generate-btn');
const copyJokeBtn = document.getElementById('copy-btn');
const popup = document.querySelector('.popup');

async function getJoke() {
  try {
    const res = await fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single');
    if ( !res.ok ) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await res.json();
    showJoke.innerText = data.joke;
  }
  catch(err) {
    throw err;
  }
}

async function copyJoke() {
  try {
    popup.classList.add('show');
    popup.setAttribute('aria-hidden', 'false');
    await navigator.clipboard.writeText(showJoke.innerText);

    setTimeout(() => {
      document.querySelector('.popup').classList.remove('show');
      popup.setAttribute('aria-hidden', 'true');
    }, 2000);
  }
  catch {
    throw new Error('Error copying the text:', err);
  }
}

generateJokeBtn.addEventListener('click', getJoke);
copyJokeBtn.addEventListener('click', copyJoke);
getJoke();
