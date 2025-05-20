import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
*/
import '/src/styles/swiper.css';
import '../styles/style.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  loop: true,
  slidesPerView: 2.5,
  centeredSlides: true,
  spaceBetween: 10,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

document.querySelector('.swiper').style.overflow = 'visible';