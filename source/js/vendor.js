// Swiper 7.4.1
import './vendor/swiper.js';

const reviewsSwiper = document.querySelector('.swiper');

const checkReviewsSwiper = () => {
  if (reviewsSwiper) {
    const swiper = new Swiper(reviewsSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

export {checkReviewsSwiper};
