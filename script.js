var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1115: {
            slidesPerView: 5,
        },
        900: {
            slidesPerView: 4,
        },
        600: {
            slidesPerView: 3,
        },
        10: {
            slidesPerView: 2,
        },
    },
});

var swiper1 = new Swiper(".slide-new-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
      prevEl: ".swiper-button-prev1",
      nextEl: ".swiper-button-next1",
    },

    breakpoints: {
        1115: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 2,
        },
        10: {
            slidesPerView: 1,
        },
    },
});