const popup = document.querySelector('.popup');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const shadow = document.querySelector('.shadow');

openBtn.addEventListener('click', () => {
  popup.classList.add('active');
  popup.setAttribute('aria-hidden', 'false');
  shadow.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  popup.setAttribute('aria-hidden', 'true');
  shadow.classList.remove('active');
})
