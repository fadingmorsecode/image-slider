import "./main.css";
import arrowImage from "./assets/arrow.svg";
import { forwardSlide, reverseSlide, slideInitialization } from "./slide";
import loadArrowListeners from "./arrowlisteners";
import loadDotListeners from "./dotlistener";
import pic from "./assets/pic.jpg";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";

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

const imageOne = new Image();
imageOne.src = pic;
const imageTwo = new Image();
imageTwo.src = pic1;
const imageThree = new Image();
imageThree.src = pic2;
const imageFour = new Image();
imageFour.src = pic3;
const imageFive = new Image();
imageFive.src = pic4;

document.querySelector(".one").appendChild(imageOne);
document.querySelector(".two").appendChild(imageTwo);
document.querySelector(".three").appendChild(imageThree);
document.querySelector(".four").appendChild(imageFour);
document.querySelector(".five").appendChild(imageFive);

slideInitialization();
loadArrowListeners();
loadDotListeners();
setInterval(forwardSlide, 5000);
