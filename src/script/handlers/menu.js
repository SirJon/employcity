const OPEN_CLASS = 'header--open';
const openButton = document.querySelector('.header__button--open');
const closeButton = document.querySelector('.header__button--close');
const header = document.querySelector('.header');
const wrapper = document.querySelector('.header__wrapper--list');
const openHandler = () => {
  header.classList.add(OPEN_CLASS);
};
const closeHandler = () => {
  header.classList.remove(OPEN_CLASS);
};

openButton.addEventListener('click', openHandler);
closeButton.addEventListener('click', closeHandler);
wrapper.addEventListener('click', (e) => {
  if (e.target !== wrapper) return;
  closeHandler();
});