'use strict'

const textArea = document.querySelector('#editor')
const clearButton = document.querySelector('#clearButton')

textArea.addEventListener('keyup', () => {
  addLocalstorage(textArea.value)
})
clearButton.addEventListener('click', clearLocalStorage)


checkLocalstorage()


function checkLocalstorage() {
  const data = localStorage.editor
  if (data) {
    textArea.value = data
  } else {
    localStorage.editor = ''
  }
}


function addLocalstorage(value) {
  localStorage.editor = textArea.value
}


function clearLocalStorage() {
  localStorage.editor = ''
  textArea.value = ''
}

