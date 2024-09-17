import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';
import 'swiper/css/scrollbar';

new Swiper('.programs__swiper', {
  modules: [Scrollbar, Navigation],
  loop: false,
  navigation: {
    nextEl: '.programs__buttom-next',
    prevEl: '.programs__buttom-prev',
    disabledClass: 'training__slider-disabled'
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      scrollbar: {
        el: '.programs__swiper-scrollbar',
        draggable: false,
        dragSize: 326
      },
    },
    1440: {
      allowTouchMove: false
    }
  }
});
