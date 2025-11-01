const images = document.querySelectorAll('.main img');

images.forEach(img => {
  img.addEventListener('click', () => {
    document.querySelector('.main img.active')?.classList.remove('active');
    img.classList.add('active');
  });
});

images.forEach(img => {
  const activate = () => {
    document.querySelector('.main img.active')?.classList.remove('active');
    img.classList.add('active');
  };
  
  img.addEventListener('click', activate);
  img.addEventListener('keypress', e => {
    if (e.key === 'Enter') activate();
  });
});
