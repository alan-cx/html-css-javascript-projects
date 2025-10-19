const remField = document.querySelector('#rem');
const pxField = document.querySelector('#px');
const baseField = document.querySelector('#base')

pxField.addEventListener('input', (e) => {
  remField.value = e.target.value / baseField.value
})

remField.addEventListener('input', (e) => {
  pxField.value = e.target.value * baseField.value;
})
