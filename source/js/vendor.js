// Swiper 7.4.1
import './vendor/swiper.js';

const coachSwiper = document.querySelector('.coach__slider');
const reviewsSwiper = document.querySelector('.reviews__slider');

const initSwiper = () => {

  const checkCoachSwiper = () => {
    if (coachSwiper) {
      const swiper = new Swiper(coachSwiper, {

        // Navigation arrows
        navigation: {
          nextEl: '.coach__button--next',
          prevEl: '.coach__button--prev',
        },
        // Включение/Отключение перетаскивания на ПК
        simulateTouch: false,
        // Курсор перетаскивания
        grabCursor: false,
        // Количество слайдов для показа
        // slidesPerView: 4,
        // Отключение функционала, если слайдов меньше чем нужно
        watchOverflow: true,
        // Отступ между слайдами
        // spaceBetween: 39,
        // Количество пролистываемых слайдов
        // slidesPerGroup: 1,
        // Бесконечный слайдер
        loop: false,

        // // Автопрокрутка
        // autoplay: {
        //   // Пауза между прокруткой в мс
        //   delay: 1000,
        //   // Закончить на последнем слайде
        //   stopOnLastSlide: true,
        //   // Отключить после ручного переключения
        //   disableOnInteraction: false,
        // },

        // Скорость прокрутки - по умолчанию 300мс
        speed: 600,

        // //Брейкпоинты (адаптив)
        // //Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
            slidesPerGroup: 1,
          },
        },

        // Эффекты переключения слайдов
        // Листание - по умолчанию
        // effect: 'slide',

        // Смена прозрачности
        // effect: 'fade',
        // // Дополнение к fade
        // fadeEffect: {
        //   // Паралельная смена прозрачности
        //   crossFade: true,
        // },

        // // Переворот
        // effect: 'flip',
        // // Дополнение к flip
        // flipEffect: {
        //   // Тень
        //   slideShadows: true,
        //   // Показ только активного слайда
        //   limitRotation: true,
        // },

        // // Куб
        // effect: 'cube',
        //   // Дополнение к cube
        // cubeEffect: {
        //   // Настройки тени
        //   slideShadows: true,
        //   shadow: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // },

        // // Эффект потока
        // effect: 'coverflow',
        //   // Дополнение к coverflow
        // coverflowEffect: {
        //   // Угол
        //   rotate: 20,
        //   //Наложение
        //   stretch: 50,
        //   //Тень
        //   slideShadows: true,
        // },
      });
    }
  };

  const checkReviewsSwiper = () => {
    if (reviewsSwiper) {
      const swiper = new Swiper(reviewsSwiper, {

        // Navigation arrows
        navigation: {
          nextEl: '.reviews__button--next',
          prevEl: '.reviews__button--prev',
        },


const checkReviewsSwiper = () => {
  if (reviewsSwiper) {
    const swiper = new Swiper(reviewsSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },



      spaceBetween: 60,
      slidesPerView: 1,


    });
  }
};

export { checkReviewsSwiper, checkCoachSwiper };

