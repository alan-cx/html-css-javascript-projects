const showX = document.querySelector('.show-x-value')
const showY = document.querySelector('.show-y-value')
const ball = document.querySelector('.bolita')

document.addEventListener('mousemove', (e) => {
    showX.innerText = `${ e.clientX }`
    showY.innerText = `${ e.clientY }`
    ball.style.top = `${ e.clientY }px`
    ball.style.left = `${ e.clientX }px`
})