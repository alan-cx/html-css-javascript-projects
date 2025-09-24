
const btnGenerate = document.querySelector('.btn')
const hex = 'abcdef0123456789'
let final

document.addEventListener('DOMContentLoaded', showColors)

function generateHexColor() {

    let color = ''

    while ( color.length < 6 ) {
        let index = Math.floor((Math.random() * 16))
        color += hex[index]
    }
  
    return `#${color}`
}

function showColors() {
    let color1 = generateHexColor()
    let color2 = generateHexColor()
    let color3 = generateHexColor()
    let color4 = generateHexColor()
    let color5 = generateHexColor()

    document.querySelector('.color1').style.background = color1
    document.querySelector('.show-color1').innerText = color1
    document.querySelector('.color2').style.background = color2
    document.querySelector('.show-color2').innerText = color2
    document.querySelector('.color3').style.background = color3
    document.querySelector('.show-color3').innerText = color3
    document.querySelector('.color4').style.background = color4
    document.querySelector('.show-color4').innerText = color4
    document.querySelector('.color5').style.background = color5
    document.querySelector('.show-color5').innerText = color5
}

btnGenerate.addEventListener('click', showColors)

