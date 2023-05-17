import "./src/style/main.scss";

const selector = document.querySelector('.form__select');
const label = document.querySelector('.form__label--select');
const onClickSelector = (e) => {
  selector.classList.toggle('form__select--open');
  if (e?.target?.nodeName?.toLowerCase() !== 'li') return;
  label.textContent = e?.target?.textContent;
}

selector.addEventListener('click', onClickSelector);

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