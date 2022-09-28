'use strict'

const listCurrencies = document.querySelector('#items');
const loader = document.querySelector('#loader');
const requestUrl = 'https://netology-slow-rest.herokuapp.com';


let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', requestHandler);
xhr.open('GET', requestUrl);
xhr.send();


function requestHandler() {
  if (xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText);
    const CurrencyData = response['response']['Valute'];
    let fragment = new DocumentFragment();
    for (let key in CurrencyData) {
      const { 'CharCode': charCode, 'Value': value } = CurrencyData[key];
      fragment.append(createElement(charCode, value));
    }

    loader.classList.remove('loader_active');
    listCurrencies.append(fragment);
  }
}


function createElement(charCode, value) {
  let element = document.createElement('div');
  element.classList.add('item');
  element.innerHTML = `
                  <div class="item__code">${charCode}</div>
                  <div class="item__value">${value}</div>
                  <div class="item__currency">руб.</div>
                  `;
  return element;
}

