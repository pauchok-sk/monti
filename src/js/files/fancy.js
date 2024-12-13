import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function fancy() {
  Fancybox.bind('[data-fancybox="reviews"]', {});
  Fancybox.bind('[data-fancybox="product-main-gallery"]', {});
  Fancybox.bind('[data-fancybox="single-gallery"]', {});
}