// Подключение свайпера
import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
const swiper = new Swiper('.swiper__content', {
   slidesPerView: 'auto',
});
