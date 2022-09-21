'use strict'

const taskInput = document.querySelector('#task__input');
const addButton = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list');

addButton.addEventListener('click', validateInput);
taskList.addEventListener('click', removeTask);

function validateInput(event) {
  event.preventDefault();
  const inputValue = taskInput.value.trim();
  if (inputValue.length === 0) {
    console.error('Пустое поле!');
    alert('Пустое поле');
    return;
  }
  addTask(inputValue);
}

function addTask(inputValue) {
  taskList.append(createTaskElement(inputValue))
  taskInput.value = '';
}

function createTaskElement(taskValue) {
  let element = document.createElement('div');
  element.classList = 'task';
  element.innerHTML = `
          <div class="task__title">${taskValue}</div>
          <a href="#" class="task__remove">&times</a>
      `;
  return element;
}

function removeTask(event) {

  if (!event.target.matches('.task__remove')) {
    return;
  }
  const removeItem = event.target.closest('div.task');
    
  removeItem.remove();
}
