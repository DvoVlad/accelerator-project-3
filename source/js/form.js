const form = document.querySelector('.form__send-form');
const formSubmitButton = document.querySelector('.form__submit');

formSubmitButton.addEventListener('click', () => {
  form.classList.add('form__send-form--sended');
});

const nameField = document.querySelector('.form__input--name');
nameField.addEventListener('keypress', (e) => {
  if ('1234567890'.indexOf(e.key) !== -1) {
    e.preventDefault();
  }
});
