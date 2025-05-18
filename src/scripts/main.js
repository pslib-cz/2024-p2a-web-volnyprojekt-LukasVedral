import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/style.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 50,
  
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

