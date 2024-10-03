import Swiper from 'swiper';
import {Navigation, Grid, Pagination} from 'swiper/modules';
import 'swiper/css/grid';

const updateBullets = () => {
  const activeBullet = document.querySelector('.news__pagination-wrapper .swiper-pagination-bullet-active');
  const activeIndex = +activeBullet.innerHTML;
  const bullets = document.querySelectorAll('.news__pagination-wrapper .swiper-pagination-bullet');
  bullets.forEach((bullet) => {
    if(activeIndex >= 1 && activeIndex < 4 && +bullet.innerHTML <= 4) {
      bullet.style.display = 'block';
    } else if(activeIndex >= 4 && (+bullet.innerHTML === activeIndex - 2 || +bullet.innerHTML === activeIndex - 1 || +bullet.innerHTML === activeIndex || +bullet.innerHTML === activeIndex + 1)) {
      bullet.style.display = 'block';
    } else if (bullets.length === activeIndex && +bullet.innerHTML === activeIndex - 3) {
      bullet.style.display = 'block';
    } else {
      bullet.style.display = 'none';
    }
  });
};

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
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'collumn'
      }
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 3,
      spaceBetween: 32,
      allowTouchMove: false,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  },
  on: {
    afterInit: function() {
      if(window.matchMedia('(max-width: 767px)').matches) {
        const slidesOdd = document.querySelectorAll('.swiper-slide.news__swiper-slide:nth-child(odd)');
        const slidesEven = document.querySelectorAll('.swiper-slide.news__swiper-slide:nth-child(even)');
        slidesOdd.forEach((slide) => {
          slide.style.height = '330px';
        });
        slidesEven.forEach((slide) => {
          slide.style.height = '240px';
        });
      }
      updateBullets();
    },
    slideChangeTransitionStart: function() {
      updateBullets();
    },
    resize: function() {
      updateBullets();
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
