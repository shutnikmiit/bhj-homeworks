'use strict'

const form = document.getElementById('form');
const progress = document.getElementById('progress');
const file = document.getElementById('file');

form.addEventListener('submit', (event) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    xhr.upload.onprogress = function(event) {
        progress.value = (event.loaded / event.total).toFixed(1);
    };

    xhr.send(formData);

    event.preventDefault();
});