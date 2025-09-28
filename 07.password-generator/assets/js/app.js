const showPassInput = document.querySelector('.show-pass')
const userNumber = document.querySelector('.pass-lenght')
const generateBtn = document.querySelector('.generate-pass')
const copyBtn = document.querySelector('.copy')
const passwordCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`"

function generatePassword( lenght ) {

    let finalPass = ''
    let userLenght = lenght ? lenght : 8

    while ( finalPass.length < userLenght ) {
        let randomIndex = Math.floor( Math.random() * passwordCharacters.length )
        finalPass += passwordCharacters[randomIndex]
    }

    return finalPass

}

generateBtn.addEventListener('click', () => {

    let userLenght = Number(userNumber.value)
    showPassInput.value = `${generatePassword(userLenght)}`
    
})

copyBtn.addEventListener('click', () => {

    navigator.clipboard.writeText(showPassInput.value)
    copyBtn.classList.add('active')

    setTimeout(() => {
        copyBtn.classList.remove('active')
    }, 4000)

})

