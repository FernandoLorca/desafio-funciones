'use strict';

const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');

const keyA = 'blue';
const keyS = 'red';
const keyD = 'darkgoldenrod';
const otherColor = 'black';

document.addEventListener('keydown', e => {
  if (e.key === 'a') {
    div1.style.backgroundColor = keyA;
  }

  if (e.key === 's') {
    div2.style.backgroundColor = keyS;
  }

  if (e.key === 'd') {
    div3.style.backgroundColor = keyD;
  }
});

const changeColor = div => (div.style.backgroundColor = 'black');

div1.addEventListener('click', () => {
  changeColor(div1);
});

div2.addEventListener('click', () => {
  changeColor(div2);
});

div3.addEventListener('click', () => {
  changeColor(div3);
});

div4.addEventListener('click', () => {
  changeColor(div4);
});
