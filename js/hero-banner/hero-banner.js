// Slider

export function addEventOnElements(elements,eventType,callBack,optionalParameters) {
    for ( const element of elements) {
        element.addEventListener(eventType, callBack, optionalParameters);
    }
}


let sliderImageContainer = document.querySelectorAll("[slider-image-container]");
let heroBannerSliderImage = document.querySelectorAll("[hero-banner-slider-image]");
let heroBannerSlider = document.querySelectorAll("[hero-banner-slider]");
let bullets = document.querySelectorAll(".bullet");
let currentImageSize;
let currentIndex = 0;

addEventOnElements(bullets, "click", sliderBanner);


function removeClassActive(...elements) {    
    for (const element of elements) { element[currentIndex].classList.remove("active")  }

    sliderImageContainer[currentIndex].querySelectorAll("[hero-banner-slider-image]")
                                      .forEach(img => img.classList.contains(currentImageSize) ? img.classList.remove("active") : null); 
    heroBannerSlider[currentIndex].classList.contains("active") ? heroBannerSlider[currentIndex].classList.remove("active") : null;  
}

function addClassActive(...elements) {
    for (const element of elements) { element[currentIndex].classList.add("active")  }

    sliderImageContainer[currentIndex].querySelectorAll("[hero-banner-slider-image]")
                                      .forEach(img => img.classList.contains(currentImageSize) ? img.classList.add("active") : null); 
    heroBannerSlider[currentIndex].classList.contains("active") ? heroBannerSlider[currentIndex].classList.add("active") : null;                                  
}


function sliderBanner(element) {
    removeClassActive(bullets, sliderImageContainer, heroBannerSlider); 
    currentIndex = element.target.getAttribute("slider-control");
    addClassActive(bullets, sliderImageContainer, heroBannerSlider); 
}



// Display Other Images

let images = document.querySelectorAll("[image-background]");

export function getWidthScreen() {
    return document.body.clientWidth;
}


if (getWidthScreen() <= 1920) {

    sliderImageContainer[currentIndex].querySelectorAll("[hero-banner-slider-image]")
                        .forEach(img => img.classList.contains("slider__image__medium") ? img.classList.add("active") : null);
                            
    images.forEach(img => img.hasAttribute("image-background-medium") ? img.classList.add("active") : null);
    currentImageSize = "slider__image__medium";
}



