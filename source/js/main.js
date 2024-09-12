// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './menu';

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
  }
});
