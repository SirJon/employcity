const selector = document.querySelector('.form__select');
const label = document.querySelector('.form__label--select');
const onClickSelector = (e) => {
  selector.classList.toggle('form__select--open');
  if (e?.target?.nodeName?.toLowerCase() !== 'li') return;
  label.textContent = e?.target?.textContent;
}

selector.addEventListener('click', onClickSelector);