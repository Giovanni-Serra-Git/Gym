import { getWidthScreen } from "../hero-banner/hero-banner.js";

let navbar = document.querySelector(".navbar");
let navbarHeight;
let heroBannerContainer;
let heroBannerCaption;
let halfHeight;
let counter = 0;

function checkElementPositionInViewport() {
    let trainingSection = document.querySelector(".training-section__wrapper");
    let trainingSectionCaption = document.querySelector("[training-section-caption]");
    let sectionOpeningHours = document.querySelector("[section-opening-hours]");
    let sectionPrograms = document.querySelector("[section-programs]").offsetHeight;
    let packages = document.querySelector("[packages]");
    let packagesCaption = document.querySelector("[packages-caption]");
    let classesScheduleCaption = document.querySelector("[classes-schedule-caption]");
    let exercises = document.querySelector("[exercises]");
    let exercisesFitness = document.querySelector("[exercises-fitness]");
    let delayContainer = document.querySelectorAll("[delay-container]");
    let delays = document.querySelectorAll("[delay]");
    let delayOne = document.querySelector("[delay-one]");
    let delayTwo = document.querySelector("[delay-two]");
    let delayThree = document.querySelector("[delay-three]");
    
    if (trainingSection.getBoundingClientRect().top < trainingSectionCaption.offsetHeight) {
        trainingSection.querySelectorAll("[slide-in]").forEach(text => text.classList.add("fill-text-cta"));
    }

    if (sectionOpeningHours.getBoundingClientRect().top <  (sectionPrograms * 80) / 100) {
        sectionOpeningHours.querySelectorAll("[slide-in]").forEach(text => text.classList.add("fill-text-cta"));
    }

    if (sectionOpeningHours.getBoundingClientRect().top <  0) {
        packagesCaption.querySelectorAll("[slide-in]").forEach(text => text.classList.add("fill-text-cta"));
    }

    if (packagesCaption.getBoundingClientRect().top < 100 && getWidthScreen() > 1500) {
        classesScheduleCaption.querySelectorAll("[slide-in]").forEach(text => text.classList.add("fill-text-cta"));
    } else if ((packagesCaption.getBoundingClientRect().top < packagesCaption.offsetHeight) && (getWidthScreen()  < 1500 && getWidthScreen() > 1000)) {
        classesScheduleCaption.querySelectorAll("[slide-in]").forEach(text => text.classList.add("fill-text-cta"));
    } else if ((packages.getBoundingClientRect().top < (-Math.abs(packages.offsetHeight / 2 ))) && getWidthScreen() < 1000 ) {
        classesScheduleCaption.querySelectorAll("[slide-in]").forEach(text => text.classList.add("fill-text-cta"));
    }

    if ( exercises.getBoundingClientRect().top < 100) {
        let counter = 0;
        let arrayDelays = [
            { 0: "one" },
            { 1: "two"},
            { 2: "three" },
        ];
        exercises.querySelectorAll("[slide-in]").forEach(text => text.classList.add("fill-text-cta"));
        exercisesFitness.classList.add("active");
        for (const delayNumber of arrayDelays) {
            let number = delayNumber[counter];
            let classListDelays = `delay-${number}`;
            let classListContainer = `delay-container__${number}`;
            delays[counter].classList.add(classListDelays);
            delayContainer[counter].classList.add(classListContainer);
            counter++;
        }
    }
}

requestAnimationFrame( () => {
    heroBannerContainer = document.querySelector("[hero-banner__container]").clientHeight;
    heroBannerCaption = document.querySelector("[hero-banner-slider-caption]").clientHeight;
    halfHeight = heroBannerContainer / 2;
    halfHeight = (halfHeight - heroBannerCaption ) + navbar.clientHeight;
    navbarHeight = navbar.clientHeight;
});

window.addEventListener("scroll", checkElementPositionInViewport);
window.addEventListener("scroll", scrollValue);

function scrollValue() {
    if (window.scrollY > halfHeight) {
        navbar.classList.add("active");
    } else if (window.scrollY < halfHeight) {
        navbar.classList.remove("active");
    }
}