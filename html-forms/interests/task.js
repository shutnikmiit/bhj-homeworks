'use strict'

const checkList = document.querySelector('ul')
const checkItems = checkList.querySelectorAll('input[type="checkbox"]')

checkItems.forEach(elem => {
  elem.addEventListener('click', clickHandler)
})

function clickHandler(event) {
  const activeElement = event.target
  const childElement = activeElement.closest('li.interest').querySelector('ul.interests')
  if (childElement) {
    const checkboxItems = childElement.querySelectorAll('input[type="checkbox"]')
    checkboxItems.forEach(elem => {
      elem.checked = activeElement.checked
      elem.indeterminate = false
    })
  }

  checkParent(activeElement)
}

function checkParent(elem) {

  const parentActiveElement = elem.closest('ul.interests_active')
  if (parentActiveElement === null) return

  const parentActiveCheckbox = parentActiveElement.closest('li.interest').querySelector('input[type="checkbox"]')
  const checkboxItems = Array.from(parentActiveElement.children)
  if (checkboxItems.every(elem => {
    const checkboxItem = elem.querySelector('input[type="checkbox"]')
    return checkboxItem.checked && checkboxItem.indeterminate === false
  })) {
    parentActiveCheckbox.indeterminate = false
    parentActiveCheckbox.checked = true
  } else if (checkboxItems.some(elem => {
    return elem.querySelector('input[type="checkbox"]').checked
  })) {
    parentActiveCheckbox.indeterminate = true
  } else if (checkboxItems.some(elem => {
    return elem.querySelector('input[type="checkbox"]').indeterminate === true
  })) {
    parentActiveCheckbox.indeterminate = true
  } else {
    parentActiveCheckbox.indeterminate = false
    parentActiveCheckbox.checked = false
  }

  checkParent(parentActiveCheckbox)
}