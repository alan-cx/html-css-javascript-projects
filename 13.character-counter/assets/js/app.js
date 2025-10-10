const textArea = document.querySelector('textarea');
const wordCount = document.querySelector('.words');
const sentenceCount = document.querySelector('.sentences');
const characterWithoutSpace = document.querySelector('.characters-1');
const characterWithSpace = document.querySelector('.characters-2');
const paragraphCount = document.querySelector('.paragraphs');
const setModeBtn = document.querySelector('.set-mode-btn');

setModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

const localMode = localStorage.getItem('mode');
if (localMode === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

const savedText = localStorage.getItem('userText');
if (savedText) {
  textArea.value = savedText;
  updateCounts(savedText); 
}

textArea.addEventListener('input', (e) => {
  const text = e.currentTarget.value;

  updateCounts(text);

  if (text.trim() !== '') {
    localStorage.setItem('userText', text);
  } else {
    localStorage.removeItem('userText');
  }
});

function updateCounts(text) {
  const clearText = text.trim();

  const words = clearText === '' ? [] : clearText.split(/\s+/);
  wordCount.textContent = words.length;

  const sentences = clearText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  sentenceCount.textContent = sentences.length;

  characterWithoutSpace.textContent = text.replace(/\s/g, '').length;
  characterWithSpace.textContent = text.length;

  const paragraphs = clearText === '' ? 0 : (clearText.match(/\n{2,}/g) || []).length + 1;
  paragraphCount.textContent = paragraphs;
}
