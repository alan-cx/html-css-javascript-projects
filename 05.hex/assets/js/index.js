const colors = document.querySelectorAll('.color')
const generatorBtn = document.querySelector('.btn-generator')
const hex = 'abcdef0123456789'

document.addEventListener('DOMContentLoaded', showColor)

function generateHexColor() {
  let color = ''

  while (color.length < 6) {
    let index = Math.floor((Math.random() * 16))
    color += hex[index]
  }

  return `#${color}`
}

function showColor() {

  let n = colors.length

  for (let i = 0; i < n; i++) {
    let currentColor = generateHexColor()

    colors[i].style.backgroundColor = `${currentColor}`
    colors[i].innerHTML = `<p>${currentColor}</p>`
  }


}

generatorBtn.addEventListener('click', () => {
  showColor()
})

