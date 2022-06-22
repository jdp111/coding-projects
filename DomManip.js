document.getElementById("container");

document.querySelector('#container');

document.querySelectorAll('.second');

const ol = document.querySelector('ol');
ol.querySelector('li.third');

const sec = document.querySelector('#container');
const text = document.createElement('text');
text.innerText = 'Hello!';
sec.append(text);

const foot = document.querySelector('.footer');
foot.classList.add("main");

foot.classList.remove("main");

const four = document.createElement('li');
four.innerText = "four";

document.querySelector('ul').append(four);


const ordered = document.querySelector('ol');
const listelements = ordered.querySelectorAll('li');
for (let element in listelements) { 
    listelements[element].style.backgroundColor = 'green';
}

document.querySelector('div.footer').remove();




