import { getWidthScreen } from "../hero-banner/hero-banner.js";

const arrowLeft = document.querySelectorAll("[arrow-left]");
const arrowRight = document.querySelectorAll("[arrow-right]");
let counter = 1;


function addEventOnArrows(elements) {
    for(const element of elements) {
        element.forEach(arrow => {
                arrow.addEventListener("click", slideShow);
        });
    }
}


function checkArrowParent(element) {
    return element.target.closest("div[parent-slider]").querySelector("[slider-wrapper]").classList[0];
}

function checkArrow(element) {
    return element.target.closest("div").classList.contains("arrow-left") ? "left" : "right";
}


addEventOnArrows([arrowLeft, arrowRight]);

if (getWidthScreen() <= 1300) { 
    let middleElements = document.querySelector(".section-programs__container__middle__elements");
    middleElements.remove(); 
}


function slideShow(element) { 
   let slider = document.querySelector("." + checkArrowParent(element));
   let sliderTransformValue = window.getComputedStyle(slider).getPropertyValue("transform");
   let cardsLength = slider.children.length;
   let cardWidth = Number(slider.children[0].offsetWidth + 16);

   sliderTransformValue = Math.floor(Number(new WebKitCSSMatrix(sliderTransformValue).e));

   
   if ( checkArrow(element) == "left") {
    if ( ( (getWidthScreen() <= 1920 ) && (getWidthScreen() > 800) ) && ( checkArrowParent(element) == "training-section__slider__wrapper" ) ) {
        if (counter == 1) {
            slider.style.transform = `translateX(-${cardWidth}px)`;
            counter++;
        } else {
                if (counter == 4) {
                    return;
                } else {
                    slider.style.transform = `translateX(${counter * ( - cardWidth ) }px)`;
                    counter++;
                }
        }
   } else {
    if (counter == cardsLength) {
        return;
    } else {
        slider.style.transform = `translateX(${counter * ( - cardWidth ) }px)`;
        counter++;
    }
   }
}

if (checkArrow(element) == "right") {
    if (counter == 1) {
        return;
    } else if (counter == 2) {
        slider.style.transform = `translateX(${0}px)`;
        counter--;
    } else {
        slider.style.transform = `translateX(${sliderTransformValue + cardWidth}px)`;
        counter--;
    }
}


}   