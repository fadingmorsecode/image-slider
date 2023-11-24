import "./main.css";
import arrowImage from "./assets/arrow.svg";
import { forwardSlide, reverseSlide, slideInitialization } from "./slide";
import loadArrowListeners from "./arrowlisteners";
import loadDotListeners from "./dotlistener";

const arrowLeftContainer = document.querySelector(".arrow-container-left");
const arrowRightContainer = document.querySelector(".arrow-container-right");

const arrowIconLeft = new Image();
arrowIconLeft.classList.add("left");
arrowIconLeft.src = arrowImage;

const arrowIconRight = new Image();
arrowIconRight.classList.add("right");
arrowIconRight.src = arrowImage;

arrowLeftContainer.append(arrowIconLeft);
arrowRightContainer.append(arrowIconRight);

slideInitialization();
loadArrowListeners();
loadDotListeners();
setInterval(forwardSlide, 5000);
