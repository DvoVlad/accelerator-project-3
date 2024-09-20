import Swiper from 'swiper';
import {Navigation, Grid} from 'swiper/modules';
import 'swiper/css/grid';

new Swiper('.news__swiper', {
  modules: [Navigation, Grid],
  loop: false,
  navigation: {
    nextEl: '.news__swiper-next',
    prevEl: '.news__swiper-prev',
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
  }
});

const tabsList = document.querySelector('.news__tabs-wrapper');

tabsList.addEventListener('click', (e) => {
  if(e.target.closest('.news__tab')) {
    const activeTab = document.querySelector('.news__tab--active');
    activeTab.classList.remove('news__tab--active');
    e.target.classList.add('news__tab--active');
  }
});
