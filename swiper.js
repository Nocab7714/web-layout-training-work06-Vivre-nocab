// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// init Swiper:
const swiperHighlightedArticles = new Swiper('.swiperHighlightedArticles', {
  slidesPerView: 1.1,
  spaceBetween: 24,
  slidesPerGroup: 1,
  autoHeight: true,

  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  pagination: {
    el: '.swiper-pagination-HighlightedArticles',
    type: 'fraction',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48,
    },
  },
});

const swiperEveryoneIsWatching = new Swiper('.swiperEveryoneIsWatching ', {
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});

const swiperSubscription = new Swiper('.swiperSubscription ', {
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

const swiperFurtherReading = new Swiper('.swiperFurtherReading ', {
  slidesPerView: 1.1,
  spaceBetween: 24,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});
