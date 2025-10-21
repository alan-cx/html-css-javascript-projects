const boxes = document.querySelectorAll('.box')
const showTurn = document.querySelector('.turn')
const resetBtn = document.querySelector('.reset-btn')
const showWinnerPopPup = document.querySelector('.show-winner')
const showTiePopup = document.querySelector('.show-tie')
const hideWinnerBtn = document.querySelector('.hide-winner-btn')
const hideTieBtn = document.querySelector('.hide-tie-btn')
const win = document.querySelector('.winner')

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

let turn = 'X'

boxes.forEach(box => {
  box.addEventListener('click', (e) => {
    if (e.target.innerText !== '') return

    e.target.innerText = turn
    turn = turn === 'X' ? 'O' : 'X'
    showTurn.classList.toggle('show') 
    checkWinner()
  })
})

resetBtn.addEventListener('click', () => {
  clearBoard()
  turn = 'X'
  showTurn.classList.remove('show')
})

function checkWinner() {
  let hasWin = false

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern
    const val1 = boxes[a].innerText
    const val2 = boxes[b].innerText
    const val3 = boxes[c].innerText

    if (val1 && val1 === val2 && val2 === val3) {
      hasWin = true
      showPopup(showWinnerPopPup, val1)
      return
    }
  }

  const isFull = [...boxes].every(box => box.innerText !== '')
  if (isFull && !hasWin) {
    showPopup(showTiePopup)
  }
}

function showPopup(popup, message = '') {
  showTurn.classList.remove('show')
  popup.setAttribute('aria-hidden', 'false')
  popup.classList.add('show-popup')
  if (message) win.innerText = message
  turn = 'X'
}

function clearBoard() {
  boxes.forEach(box => box.innerText = '')
}

hideWinnerBtn.addEventListener('click', () => {
  showWinnerPopPup.classList.remove('show-popup')
  showWinnerPopPup.setAttribute('aria-hidden', 'true')
  clearBoard()
})

hideTieBtn.addEventListener('click', () => {
  showTiePopup.classList.remove('show-popup')
  showTiePopup.setAttribute('aria-hidden', 'true')
  clearBoard()
})