// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
//import 'swiper/css/pagination';

const initPagination = () => {
  const paginationWrapper = document.querySelector('.hero__swiper-pagination-wrapper');
  const currentContent = document.querySelector('.hero__swiper-slide.swiper-slide-active .hero__text-wrapper');

  if(window.matchMedia('(min-width: 768px)').matches) {
    const elementHeight = currentContent.clientHeight + 60;
    paginationWrapper.style.bottom = `${elementHeight}px`;
  } else {
    const elementHeight = currentContent.clientHeight + 20;
    paginationWrapper.style.bottom = `${elementHeight}px`;
  }
};

new Swiper('.hero__swiper', {
  modules: [Pagination],
  autoHeight:true,
  loop: true,
  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
    bulletElement: 'button',
    renderBullet: function (index, className) {
      return `<button class="${className}" type="button"><span class="visually-hidden">Элемент пагинации ${index + 1}</span></button>`;
    },
  },
  breakpoints: {
    1440: {
      allowTouchMove: false
    }
  },
  on: {
    init: function() {
      initPagination();
    },
    slideChangeTransitionEnd: function() {
      initPagination();
    }
  },
});

window.addEventListener('resize', initPagination);
