const menuButton = document.querySelector('.navMobile');
const menu = document.querySelector('.menuContainer');
const closeButton = document.querySelector('.closeButton');
const menuLink1 = document.querySelector('.menuLink1');
const menuLink2 = document.querySelector('.menuLink2');
const menuLink3 = document.querySelector('.menuLink3');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('isActive');
  menu.classList.toggle('isActive');
});

closeButton.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});

menuLink1.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});

menuLink2.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});

menuLink3.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});
