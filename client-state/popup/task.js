'use strict'

const popup = document.querySelector('#subscribe-modal')
const buttonClosePopup = popup.querySelector('.modal__close')

buttonClosePopup.addEventListener('click', closePopup)

const checkCookie = getCookie('popup');

if (!checkCookie || checkCookie === 'false') {
  setCookie('popup', false)
  setTimeout(() => {
    popup.classList.add('modal_active')
  }, 2000)
}


function closePopup() {
  popup.classList.remove('modal_active')
  setCookie('popup', true)
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


function setCookie(key, value) {
  document.cookie = key + '=' + encodeURIComponent(value)
}
