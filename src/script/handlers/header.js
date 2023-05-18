const header = document.querySelector('.header');
const SHOW_CLASS_HEADER = 'header--close';
const hideHeaderHandler = () => {
  header.classList.remove(SHOW_CLASS_HEADER);
};
const showHeaderHandler = () => {
  header.classList.add(SHOW_CLASS_HEADER);
};

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    hideHeaderHandler();
  } else {
    showHeaderHandler();
  }
  prevScrollpos = currentScrollPos;
})