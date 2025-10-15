const boxes = document.querySelectorAll('.box')
let currentSlide = 0

function slider(i) {
    boxes.forEach(box => box.classList.remove('show-box'))
    boxes[i].classList.add('show-box')
}

function next() {
    currentSlide = (currentSlide + 1) % boxes.length
    slider(currentSlide)
}

function prev() {
    currentSlide = (currentSlide - 1 + boxes.length) % boxes.length
    slider(currentSlide)
}

slider(currentSlide)

const autoNext = setInterval(next, 10000)
