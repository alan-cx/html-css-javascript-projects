const formElement = document.querySelector('form')
const btnElement = document.querySelector('.submit')

function calculateBill(e) {

  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  const bill = Number(formData.get('user-bill'))
  const percentage = Number(formData.get('user-percentage')) / 100

  const tip = bill * percentage
  const total = bill + tip

  document.querySelector('.total').innerText = `${total}`

}

formElement.addEventListener('submit', calculateBill)
