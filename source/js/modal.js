const modalOpenButton = document.querySelector('.about__button-link');
const modalOverlay = document.querySelector('.about__modal-overlay');
const modal = document.querySelector('.about__modal');

modalOverlay.addEventListener('click', () => {
  modalOverlay.classList.remove('about__modal-overlay--open');
  modal.classList.remove('about__modal--open');
});

modalOpenButton.addEventListener('click', () => {
  modalOverlay.classList.add('about__modal-overlay--open');
  modal.classList.add('about__modal--open');
});
