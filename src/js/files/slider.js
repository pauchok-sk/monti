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
        }
      }
    });
  }
}
