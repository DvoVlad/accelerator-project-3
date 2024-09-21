import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';
import 'swiper/css/scrollbar';

new Swiper('.reviews__swiper', {
  modules: [Scrollbar, Navigation],
  loop: false,
  navigation: {
    nextEl: '.reviews__buttom-next',
    prevEl: '.reviews__buttom-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      scrollbar: {
        el: '.reviews__swiper-scrollbar',
        draggable: true,
        dragSize: 326
      },
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      scrollbar: {
        el: '.reviews__swiper-scrollbar',
        draggable: true,
        dragSize: 394,
      },
      allowTouchMove: false
    }
  }
});
