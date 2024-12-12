import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function slider() {
  const brandsSlider = document.querySelector(".brands__slider");

  if (brandsSlider) {
    const swiper = new Swiper(brandsSlider, {
      speed: 700,
      modules: [Autoplay, Navigation],
      spaceBetween: 2,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".brands__btn-slider._prev",
        nextEl: ".brands__btn-slider._next",
      },
      breakpoints: {
        744: {
          spaceBetween: 16,
        },
      },
    });
  }

  const reviewsSlider = document.querySelector(".reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 700,
      modules: [Autoplay],
      spaceBetween: 30,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1290: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  }

  const productSlider = document.querySelector(".product-main__slider");

  if (productSlider) {
    const buttons = document.querySelectorAll(".product-main__slider-btn");

    const swiper = new Swiper(productSlider, {
      speed: 700,
      modules: [Autoplay],
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
      },
      on: {
        init: () => {
          buttons[0].classList.add("active");

          buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => swiper.slideTo(index));
          });
        },
        slideChange: ({ activeIndex }) => {
          buttons.forEach((btn) => btn.classList.remove("active"));
          buttons[activeIndex].classList.add("active");
        },
      },
    });
  }
}
