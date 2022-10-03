'use strict'

const form = document.querySelector('#signin__form')
const signInButton = document.querySelector('#signin__btn')
const logOutButton = document.querySelector('#logoutBtn')

signInButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  requestForm()
})


if (getCookie('user')) changePage(getCookie('user'))


function requestForm() {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
  xhr.responseType = 'json'
  xhr.onload = () => {
    checkResponse(xhr.response)
  }
  xhr.onerror = () => {
    alert('Ошибка получения данных!')
  }
  xhr.send(new FormData(form))
}


function checkResponse(response) {
  console.log(response)
  if (response.success) {
    changePage(response['user_id'])
    setCookie('user', response['user_id'])
  } else {
    alert('«Неверный логин/пароль»')
  }
}


function changePage(userId) {
  document.querySelector('#signin').classList.remove('signin_active')
  document.querySelector('#user_id').innerText = userId
  document.querySelector('#welcome').classList.add('welcome_active')
  logOutButton.addEventListener('click', logOut)
}


function logOut() {
  document.querySelector('#welcome').classList.remove('welcome_active')
  document.querySelector('#signin').classList.add('signin_active')
  setCookie('user', '')
  form.reset()
}


function setCookie(key, value) {
  document.cookie = key + '=' + encodeURIComponent(value)
}


function getCookie(key) {
  const data = document.cookie.split('; ')
  const cookie = data.find((elem) => elem.includes(key))
  if (cookie) {
    const value = cookie.split('=')[1]
    return decodeURIComponent(value)
  }
  return null
}