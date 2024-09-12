const menuButton = document.querySelector('.page-header__menu-button');
const menuField = document.querySelector('.page-header__button-field');
const navigation = document.querySelector('.page-header__navigation');
const overlay = document.querySelector('.page-header__menu-overlay');

menuButton.addEventListener('click', () => {
  menuField.classList.toggle('page-header__button-field--opened');
  navigation.classList.toggle('page-header__navigation--open');
  overlay.classList.toggle('page-header__menu-overlay--opened');
});

overlay.addEventListener('click', () => {
  menuField.classList.remove('page-header__button-field--opened');
  navigation.classList.remove('page-header__navigation--open');
  overlay.classList.remove('page-header__menu-overlay--opened');
});

const menuCategories = document.querySelectorAll('.page-header__main-nav-link--has-subcategory');

menuCategories.forEach((categories) => {
  categories.addEventListener('click', (e) => {
    e.preventDefault();
    categories.parentElement.classList.toggle('page-header__main-nav-item--open');
    return false;
  });
});
