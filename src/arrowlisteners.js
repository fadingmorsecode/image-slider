import { forwardSlide } from "./slide";
import { reverseSlide } from "./slide";

export default function loadArrowListeners() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".left")) {
      reverseSlide();
    } else if (e.target.matches(".right")) {
      forwardSlide();
    }
  });
}
