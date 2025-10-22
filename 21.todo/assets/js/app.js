const input = document.querySelector('.form input')
const form = document.querySelector('.form')
const showTasks = document.querySelector('.show-tasks')
const warning = document.querySelector('.warning')
let tasks = []
let count

form.addEventListener('submit', (e) => {

  e.preventDefault()
  if (!input.value) {
    return
  }
  else {
    createTask(input.value.trim())
    tasks.push(input.value.trim())
  }

  input.value = ''

})

function createTask(inputValue) {

  count = tasks.length + 1

  let newDiv = document.createElement('div')
  newDiv.setAttribute('class', 'task')

  let divText = document.createElement('p')
  divText.innerText = `${inputValue}`

  let newDeleteBtn = document.createElement('button')
  newDeleteBtn.setAttribute('aria-label', 'Delete task button')
  newDeleteBtn.innerText = 'delete'

  newDiv.appendChild(divText)
  newDiv.appendChild(newDeleteBtn)
  showTasks.appendChild(newDiv)

  newDiv.addEventListener('click', (e) => {
    e.target.classList.toggle('done')
  })

  newDeleteBtn.addEventListener('click', (e) => {
    tasks = tasks.filter(task => task != e.target.parentNode.firstElementChild.innerText)
    e.target.parentNode.remove()
    count = count - 1
    taskCounter(count)
  })

  taskCounter(count)


}

function taskCounter(count) {
  warning.innerText = count != 0 ? `Tareas creadas ${count}` : 'No hay tareas que mostrar'
}
