const refs = {
  openSignformBtn: document.querySelectorAll('[data-signform-open]'),
  closeSignformBtn: document.querySelector('[data-signform-close]'),
  signformWimdow: document.querySelector('[data-signform]'),
  signform: document.querySelector('.signform'),
  signformForm: document.querySelector('.signform__form'),
  inputName: document.querySelector('.signform__name'),
}

refs.openSignformBtn.forEach(btn => btn.addEventListener('click', openForm));
function openForm() {
    refs.signformWimdow.classList.remove('is-hidden');
}

refs.closeSignformBtn.addEventListener('click', closeSignform);
export function closeSignform() {
  refs.signformWimdow.classList.add('is-hidden');
}

refs.signformWimdow.addEventListener('click', closeSignformBack);
function closeSignformBack(ev) {
  if (ev.target === refs.signformWimdow) {
    refs.signformWimdow.classList.add('is-hidden');
  } else {
    return;
  }
}

window.addEventListener('keydown', closeSignformKey);
function closeSignformKey(ev) {
  if (ev.code === 'Escape') {
    refs.signformWimdow.classList.add('is-hidden');
  }
}

const userInfo = {
  name: '',
  phone: '',
  email: '',
  pass: '',
}

refs.signformForm.addEventListener('submit', onSubmit);
function onSubmit(ev) {
  ev.preventDefault();
  const {
    elements: { login, password }
  } = ev.currentTarget;

  console.log(ev.currentTarget);
  refs.signformWimdow.classList.add('is-hidden');
}
// const form = document.querySelector(".form");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }