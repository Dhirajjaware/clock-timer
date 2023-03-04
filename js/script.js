'use strict';

const labelHour = document.querySelector('.hour');
const labelMinute = document.querySelector('.minute');
const labelSecond = document.querySelector('.second');

const imgGost1 = document.querySelector('.img__gost-1');
const imgGost2 = document.querySelector('.img__gost-2');

const playSound = function (path) {
  new Audio(path).play();
};

setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  labelHour.textContent = `${hour}`;
  labelMinute.textContent = `${minute}`;
  labelSecond.textContent = `${second}`;
}, 1000);

imgGost1.addEventListener('click', function () {
  playSound('sounds/old-church-bell.mp3');
  playSound('sounds/orchestrawav-26158.mp3');

  imgGost1.style.display = 'none';

  imgGost2.classList.remove('hidden');
});

imgGost2.addEventListener('click', function () {
  playSound('/sounds/old-church-bell.mp3');
  imgGost2.style.boxShadow = '0px 0px 100rem red';
  document.querySelector('body').style.backgroundColor = '#000';
});
