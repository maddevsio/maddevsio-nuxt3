export const cuOptionsForSwiper = {
  optionsArticles: {
    speed: 750,
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    loop: false,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 8,
    },

    keyboard: {
      enabled: true,
    },

    autoplay: {
      delay: 1000,
    },
  },
  optionsCard: {
    speed: 750,
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    gradCursor: true,
    allowTouchMove: false,
    spaceBetween: 15,
    navigation: {
      nextEl: '.ui-prev-next-buttons__button--next',
      prevEl: '.ui-prev-next-buttons__button--prev',
    },
  },
}
