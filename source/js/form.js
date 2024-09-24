const form = document.querySelector('.form__send-form');
const formSubmitButton = document.querySelector('.form__submit');

formSubmitButton.addEventListener('click', () => {
  form.classList.add('form__send-form--sended');
});
