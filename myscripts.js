const menuButton = document.querySelector('.navMobile');
const menu = document.querySelector('.menuContainer');
const closeButton = document.querySelector('.closeButton');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('isActive');
  menu.classList.toggle('isActive');
});

closeButton.addEventListener('click', () => {
  menuButton.classList.remove('isActive');
  menu.classList.remove('isActive');
});
