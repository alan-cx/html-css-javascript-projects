const items = document.querySelectorAll('.item')
const links = document.querySelectorAll('.slider-nav a')
const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
let currentItem = 0

function slider(index) {
  items.forEach(item => item.classList.remove('active-item'))
  links.forEach(link => link.classList.remove('active-link'))

  items[index].classList.add('active-item')
  links[index].classList.add('active-link')
}

links.forEach((link, index) => {
  link.classList.remove('active-link')
  link.removeAttribute('aria-current')

  link.addEventListener('click', (e) => {
    currentItem = index
    links.forEach(link => link.removeAttribute('aria-current'))
    links[currentItem].setAttribute('aria-current', 'true')
    slider(currentItem)
  })
})

function next() {
  currentItem = (currentItem + 1) % items.length
  slider(currentItem)
}

function prev() {
  currentItem = (currentItem - 1 + items.length) % items.length
  slider(currentItem)
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
})

nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)
slider(currentItem)