import Swiper from 'swiper';
import {Navigation, Grid, Pagination} from 'swiper/modules';
import 'swiper/css/grid';

new Swiper('.news__swiper', {
  modules: [Navigation, Pagination, Grid],
  loop: false,
  navigation: {
    nextEl: '.news__buttom-next',
    prevEl: '.news__buttom-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      grid: {
        rows: 2,
        //fill: 'row'
      },
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false
    }
  },
  on: {
    afterInit: function() {
      if(window.matchMedia('(max-width: 767px)')) {
        const slidesOdd = document.querySelectorAll('.swiper-slide.news__swiper-slide:nth-child(odd)');
        const slidesEven = document.querySelectorAll('.swiper-slide.news__swiper-slide:nth-child(even)');
        slidesOdd.forEach((slide) => {
          slide.style.height = '330px';
        });
        slidesEven.forEach((slide) => {
          slide.style.height = '240px';
        });
      }
    },
    slideChangeTransitionStart: function() {
    }
  },
  pagination: {
    el: '.news__pagination-wrapper',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className}">${index + 1}</button>`;
    }
  },
});

const tabsList = document.querySelector('.news__tabs-wrapper');

tabsList.addEventListener('click', (e) => {
  if(e.target.closest('.news__tab')) {
    const activeTab = document.querySelector('.news__tab--active');
    activeTab.classList.remove('news__tab--active');
    e.target.classList.add('news__tab--active');
  }
});
