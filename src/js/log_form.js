const refs = {
  openLogformBtn: document.querySelectorAll('[data-logform-open]'),
  closeLogformBtn: document.querySelector('[data-logform-close]'),
  logformWimdow: document.querySelector('[data-logform]'),
  logform: document.querySelector('.logform'),
  logformForm: document.querySelector('.logform__form')
}

refs.logformForm.addEventListener('submit', onSubmit);
function onSubmit(ev) {
  ev.preventDefault();
  refs.logformWimdow.classList.add('is-hidden');
}

refs.openLogformBtn.forEach(btn => btn.addEventListener('click', openForm));
function openForm() {
    refs.logformWimdow.classList.remove('is-hidden');
}

refs.closeLogformBtn.addEventListener('click', closeLogform);
export function closeLogform() {
  refs.logformWimdow.classList.add('is-hidden');
}

refs.logformWimdow.addEventListener('click', closeLogformBack);
function closeLogformBack(ev) {
  if (ev.target === refs.logformWimdow) {
    refs.logformWimdow.classList.add('is-hidden');
  } else {
    return;
  }
}

window.addEventListener('keydown', closeLogformKey);
function closeLogformKey(ev) {
  if (ev.code === 'Escape') {
    refs.logformWimdow.classList.add('is-hidden');
  }
}