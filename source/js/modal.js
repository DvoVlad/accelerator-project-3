const modalClose = document.querySelector('.about__modal-close');
const modalOpenButton = document.querySelector('.about__button-link');
const modalOverlay = document.querySelector('.about__modal-overlay');
const modal = document.querySelector('.about__modal');
const submitButton = document.querySelector('.about__modal-submit');

const closeModal = () => {
  modalOverlay.classList.remove('about__modal-overlay--open');
  modal.classList.remove('about__modal--open');
};

modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

modalOpenButton.addEventListener('click', () => {
  modalOverlay.classList.add('about__modal-overlay--open');
  modal.classList.add('about__modal--open');
});

submitButton.addEventListener('click', () => {
  const modalForm = document.querySelector('.about__modal-form');
  modalForm.classList.add('about__modal-form--sended');
});

const nameField = document.querySelector('.about__input--name');
nameField.addEventListener('keypress', (e) => {
  if ('1234567890'.indexOf(e.key) !== -1) {
    e.preventDefault();
  }
});
