const btnRoll = document.querySelector('.dice');
const showDiceImg = document.querySelector('.show-dice');
const showRolls = document.querySelector('.show-rolls');
const showRollsCount = document.querySelector('.rolls-count');
let randomDice;
let count = 0

btnRoll.addEventListener('click', () => {
  randomDice = Math.floor(Math.random() * 6 + 1);
  count++
  showRollsCount.innerText = `${count}`
  showDiceImg.src = `./assets/images/${randomDice}.svg`
  createNewRoll()
})

function createNewRoll() {
  let roll = document.createElement('div')
  let rollDescription = document.createElement('p')
  let newImg = document.createElement('img')

  rollDescription.innerText = `Roll: ${randomDice}`
  rollDescription.setAttribute('class', 'Roll number')

  newImg.src = `assets/images/${randomDice}.svg`
  newImg.alt = "Roll icon"
  newImg.width = '40'
  newImg.width = '40'

  roll.appendChild(rollDescription)
  roll.append(newImg)
  roll.setAttribute('class', 'roll')
  showRolls.appendChild(roll)
}