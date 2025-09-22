const btns = document.querySelectorAll('.btn')
const currentOperation = document.querySelector('.current')
const prevOperation = document.querySelector('.prev')
const equalBtn = document.querySelector('.calculate')
const clearAllBtn = document.querySelector('.clearAll')
const clearLastItemBtn = document.querySelector('.clearLast')

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentOperation.innerText += e.target.value
    })
})

function clearLastItem() {
    currentOperation.innerText = `${currentOperation.innerText.slice(0, -1)}`
}

function clearAll() {
    currentOperation.innerText = ''
}

function calculate() {
    prevOperation.innerText = `${ currentOperation.innerText } =`
    currentOperation.innerText = `${eval(currentOperation.innerText)}`
}

equalBtn.addEventListener('click', calculate)
clearAllBtn.addEventListener('click', clearAll)
clearLastItemBtn.addEventListener('click', clearLastItem)
addBtn.addEventListener('click', addBrackets)