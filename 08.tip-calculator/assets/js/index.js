const form = document.querySelector('form')
const btnSubmit = document.querySelector('button')

const getData = (e) => {
    e.preventDefault()
    const formEl = e.currentTarget
    const formData = new FormData(formEl)
    
    const bill = Number(formData.get('bill'))
    const perc = Number(formData.get('percen')) / 100

    const tip = bill * perc
    const totalBill = bill + tip
    document.querySelector('.total').innerText = `$${ totalBill }`

    formEl.reset()
}

form.addEventListener('submit', getData)