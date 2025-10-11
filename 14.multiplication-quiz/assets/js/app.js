const form = document.querySelector('form');
const questionElement = document.querySelector('.question');
const input = document.querySelector('input');
const scoreElement = document.querySelector('.score');

let n1, n2;
let score = 0;

function newQuestion() {
  n1 = randomNumber();
  n2 = randomNumber();
  questionElement.innerHTML = `What is ${n1} × ${n2}?`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userAnswer = +input.value;
  const correctAnswer = n1 * n2;

  if (userAnswer === correctAnswer) {
    score++;
  } else {
    score--;
  }

  scoreElement.textContent = score;
  input.value = '';

  newQuestion();
});

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

newQuestion();
