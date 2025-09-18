import { data } from '../data/db.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const generateBtn = document.querySelector('.btn');

function showRandomQuote() {
    let randomIndex = Math.floor(Math.random() * data.length);
    author.innerText = data[randomIndex].author;
    quote.innerText = data[randomIndex].quote;
}

generateBtn.addEventListener('click', showRandomQuote);
