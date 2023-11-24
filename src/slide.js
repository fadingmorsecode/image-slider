const slidesArr = [];
const dotsArr = [];
let currentSlide;

function getCurrentSlideIndex() {
  return slidesArr.indexOf(currentSlide);
}

function highlightDot(index) {
  dotsArr[index].classList.toggle("toggle-background");
}

function toggleSlide(index) {
  slidesArr[index].classList.toggle("visibility");
  highlightDot(index);
}

export function slideInitialization() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slidesArr.push(slide);
  });
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dotsArr.push(dot);
  });
  // eslint-disable-next-line prefer-destructuring
  currentSlide = slidesArr[0];
  toggleSlide(slidesArr.indexOf(currentSlide));
}

export function reverseSlide() {
  const currentSlideIndex = getCurrentSlideIndex();
  if (currentSlideIndex === 0) {
    toggleSlide(currentSlideIndex);
    toggleSlide(slidesArr.length - 1);
    const lastIndex = slidesArr.length - 1;
    currentSlide = slidesArr[lastIndex];
  } else {
    toggleSlide(currentSlideIndex);
    const incrementedIndex = currentSlideIndex + -1;
    currentSlide = slidesArr[incrementedIndex];
    toggleSlide(incrementedIndex);
  }
}

export function forwardSlide() {
  const currentSlideIndex = getCurrentSlideIndex();
  if (currentSlideIndex === slidesArr.length - 1) {
    toggleSlide(currentSlideIndex);
    toggleSlide(0);
    // eslint-disable-next-line prefer-destructuring
    currentSlide = slidesArr[0];
  } else {
    toggleSlide(currentSlideIndex);
    const incrementedIndex = currentSlideIndex + 1;
    currentSlide = slidesArr[incrementedIndex];
    toggleSlide(incrementedIndex);
  }
}

export function chooseSlide(e) {
  const currentSlideIndex = getCurrentSlideIndex();
  toggleSlide(currentSlideIndex);
  const chosenSlideIndex = dotsArr.indexOf(e.target);
  toggleSlide(chosenSlideIndex);
  currentSlide = slidesArr[chosenSlideIndex];
}
