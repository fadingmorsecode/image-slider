import { chooseSlide } from "./slide.js";

export default function loadDotListeners() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".dot")) {
      chooseSlide(e);
    }
  });
}
