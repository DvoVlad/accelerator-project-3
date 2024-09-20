const accordeons = document.querySelectorAll('.faq__question-wrapper');

accordeons.forEach((accordeon) => {
  accordeon.addEventListener('click', () => {
    const numberAccordeon = accordeon.dataset.open;
    const targetAccordeon = document.querySelector(`[data-faq='${numberAccordeon}']`);
    targetAccordeon.classList.toggle('faq__accordeon--open');
  });
});
