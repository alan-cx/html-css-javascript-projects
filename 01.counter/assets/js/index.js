
const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const resetBtn = document.querySelector('.reset')
const counterValue = document.querySelector('.show')

let count = 0

function increment() {
    count += 1
    counterValue.innerText = count
}

function decrement() {
    count -= 1
    counterValue.innerText = count
}

function reset() {
    count -= count
    counterValue.innerText = count
}

incrementBtn.addEventListener( 'click', increment )
decrementBtn.addEventListener( 'click', decrement )
resetBtn.addEventListener( 'click', reset )