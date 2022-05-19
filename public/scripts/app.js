// img preview
function showPreview(event) {
  if (event.target.files.length > 0) {
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("file-ip");
    preview.src = src;
    preview.style.display = "block";
  }
}

// layout changer
const buttons = document.querySelectorAll(".layout-changer div button");
const section = document.querySelector("main:first-of-type section");
const a = document.querySelectorAll("main:first-of-type section a");

// set ID to elements
const cards = document.querySelectorAll("main section a");
cards.forEach((card, index) => {
  card.setAttribute("id", `card-${index}`);
});

// To add to this, it'd be cool if you could optionally disable loop duplication if "Number of items < SlidesPerView".
const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    499: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination1",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});

// swiper1.loopDestroy();

const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 10,
  direction: "horizontal",
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    499: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

swiper2.loopDestroy();

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 10,
  direction: "horizontal",
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    499: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination3",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

swiper3.loopDestroy();

const swiper4 = new Swiper(".swiper4", {
  // Optional parameters
  slidesPerView: 5,
  spaceBetween: 10,
  direction: "horizontal",
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    499: {
      slidesPerView: 3,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 5,
      spaceBetweenSlides: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination4",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next4",
    prevEl: ".swiper-button-prev4",
  },
});

swiper4.loopDestroy();
