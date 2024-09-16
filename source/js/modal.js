const modalClose = document.querySelector('.about__modal-close');
const modalOpenButton = document.querySelector('.about__button-link');
const modalOverlay = document.querySelector('.about__modal-overlay');
const modal = document.querySelector('.about__modal');

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
