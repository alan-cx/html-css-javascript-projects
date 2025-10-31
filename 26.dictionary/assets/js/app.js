const toggleBtn = document.querySelector('.toggle')
const formElement = document.querySelector('.form')
const inputElement = document.querySelector('input')
const listDefinitions = document.querySelectorAll('.definitions-list li')
const listExamples = document.querySelectorAll('.examples-list li')

const BODY = document.body

let theme = localStorage.getItem('theme')

if (theme === 'dark') {
  BODY.classList.add('dark-mode')
}

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    BODY.classList.toggle('dark-mode')
  })
  let setTheme = BODY.classList.contains('dark-mode') ? 'dark' : 'light'
  localStorage.setItem('theme', setTheme)
}

async function fetchData(word) {

  try {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let resp = await fetch(url)
    let data = await resp.json()

    document.querySelector('.word').innerText = data[0].word
    document.querySelector('.pronuntiation').innerText = data[0].phonetics[1].text
    document.querySelector('audio').src = data[0].phonetics[0].audio
    document.querySelector('.type-word').innerText = data[0].meanings[0].partOfSpeech
    document.querySelector('.source a').href = data[0].sourceUrls
    document.querySelector('.source a').innerText = data[0].sourceUrls

    let synonym = data[0].meanings[1].synonyms[0]

    if ( synonym ) {
      document.querySelector('.synonyms span').innerText = synonym
    }
    else {
      document.querySelector('.synonyms span').innerText = 'There is not'
    }

    let listItemslenght = listDefinitions.length

    for (let i = 0; i < listItemslenght; i++) {
      let item = data[0].meanings[0].definitions[i].definition
      let example = data[0].meanings[0].definitions[i].example

      if (item) {
        listDefinitions[i].innerText = item
      }

      if (example) {
        listExamples[i].innerText = example
      }
    }
  }

  catch(err) {
    throw new Error(err)
  }
}

formElement.addEventListener('submit', (e) => {

  e.preventDefault()
  fetchData(inputElement.value)

})

fetchData('life')
