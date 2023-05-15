const arrowLeft = document.querySelectorAll("[arrow-left]");
const arrowRight = document.querySelectorAll("[arrow-right]");

let counterBodyPart = 1;
let counterShowResults = 1;

function getWidthScreen() {
    return document.body.clientWidth;
}

function addEventOnArrows(elements) {
    for(const element of elements) {
        element.forEach(arrow => {
            arrow.addEventListener("click", slideShow)
        })
    }
}

function checkArrowParent(element) {
    return element.target.closest("div[parent-slider]").querySelector("[slider-wrapper]").classList[0];
}


addEventOnArrows([arrowLeft, arrowRight]);

let bodyPart;
let cardWrapperContainer;
let youtubeVideos;
let exerciseEquipment;
let exerciseSimilar;




class Slider {

    constructor(element) {
        this.element = element;
        this.arrow = this.checkArrow(element);
        this.counter = 1;
        this.visibleCards = 0;
        this.elementClassList = this.checkArrowParent(element);
        this.slider = document.querySelector("." + this.elementClassList);
        this.sliderCards = Array.from(this.slider.children);
        this.lastCard = this.sliderCards[this.sliderCards.length - 1];
        this.sliderWidth = this.slider.offsetWidth;
        this.sliderTransformValue = window.getComputedStyle(this.slider).getPropertyValue("transform");
        this.sliderGapValue = window.getComputedStyle(this.slider).getPropertyValue("gap").split("").slice(0,-2).join("");
        this.cardsLength = this.slider.children.length;
        this.cardWidth = Number(this.slider.children[0].offsetWidth + Number(this.sliderGapValue));
        this.sliderTransformValue = Math.floor(Number(new WebKitCSSMatrix(this.sliderTransformValue).e));
    }

    checkArrowParent(element) {
        return element.target.closest("div[parent-slider]").querySelector("[slider-wrapper]").classList[0];
    }

    getWidthScreen() {
        return document.body.clientWidth;
    }

    checkArrow(element) {
        return element.target.closest("div").classList.contains("arrow-left") ? "left" : "right";
    }

    slideToRight() {
        if (this.counter == 1) {
            return;
        } else if (this.counter == 2) {
            this.sliderTransformValue = 0;
            this.slider.style.transform = `translateX(${0}px)`;
            this.counter--;
        } else {
            this.sliderTransformValue = Number(this.sliderTransformValue) + Number(this.cardWidth);
            this.slider.style.transform = `translateX(${Number(this.sliderTransformValue)}px)`;
            this.counter--;
        }
    }

    checkVisibilityLastCard() {
        let lastCard = Math.floor(this.lastCard.getBoundingClientRect().left - this.sliderGapValue);
        console.log(this.lastCard.getBoundingClientRect());
        return lastCard < this.sliderWidth ? true : false;
    }
}



 class Bodypart extends Slider {



    slideToLeft() {
        this.sliderTransformValue = this.counter * ( - this.cardWidth );
        this.slider.style.transform = `translateX(${this.counter * ( - this.cardWidth ) }px)`;
        this.counter++;
    }

    slideOnceToLeft() {
        this.sliderTransformValue = `${Number(-this.cardWidth)}`;
        this.slider.style.transform = `translateX(-${this.cardWidth}px)`;
        this.counter++;
    }

    slide() {

        if (this.arrow == "left") {
            if (this.counter == 1) {
                this.slideOnceToLeft();
            } else {
                if (this.checkVisibilityLastCard()) {
                    return;
                } else {
                    this.slideToLeft();
                }
            }
        }

        if (this.arrow == "right") { this.slideToRight()  }


    }



}

class CardWrapperContainer extends Slider {
    
    
    slideCardWrapper() {

        if (this.arrow == "left") {
            if (this.counter == this.cardsLength) {
                        return;
                    } else if (this.counter == 1) {
                        this.sliderTransformValue = `${Number(-this.cardWidth)}`;
                        this.slider.style.transform = `translateX(-${this.cardWidth}px)`;
                        this.counter++;
                    } else {
                        this.sliderTransformValue = `${this.counter * ( - this.cardWidth)}`;
                        this.slider.style.transform = `translateX(${this.counter * ( - this.cardWidth ) }px)`;
                        this.counter++;
                    }
            }

        if (this.arrow == "right") {
            this.slideToRight();
        }

   }
}

function slideShow(element) { 


    console.log(checkArrowParent(element));

    

    let bodyPartCounter = window.localStorage.getItem("body-part-counter");
    let inputSearchCounter = window.localStorage.getItem("input-search-counter");

    let arrayElements = [
        "body-part-list-slider__wrapper",
        "card-wrapper-container",
        "exercise-similar",
        "exercises-youtube-videos-slider__wrapper",
        "exercise-equipment",
        ""
        ];
    
    console.log(checkArrowParent(element));

    if (checkArrowParent(element) == arrayElements[0] && bodyPart == undefined) {
        bodyPart = new Bodypart(element);
        console.log(bodyPart)
    }

    if (checkArrowParent(element) == arrayElements[0] && bodyPart != undefined) {
        bodyPart.arrow = bodyPart.checkArrow(element);
        bodyPart.slide();
        // bodyPart.mediumScreen();
        // bodyPart.smallScreen();  
    }
    
    if (bodyPartCounter >= 1) {
        window.localStorage.setItem("body-part-counter", 0);
        bodyPart = undefined;
        cardWrapperContainer = undefined;
        youtubeVideos = undefined;
        exerciseSimilar = undefined;
    }



    if (cardWrapperContainer == undefined && checkArrowParent(element) == arrayElements[1]) {
        console.log(checkArrowParent(element));
        cardWrapperContainer = new CardWrapperContainer(element);
        console.log(cardWrapperContainer)
        cardWrapperContainer.slideCardWrapper();
        cardWrapperContainer.sliderTransformValue = 0;
    } else if (cardWrapperContainer != undefined && checkArrowParent(element) == arrayElements[1]) {
        console.log(cardWrapperContainer);
        cardWrapperContainer.arrow = cardWrapperContainer.checkArrow(element);
        cardWrapperContainer.slideCardWrapper();
    }



    
    if (checkArrowParent(element) == arrayElements[2] && exerciseSimilar == undefined) {
        exerciseSimilar = new Bodypart(element);
        console.log(exerciseSimilar)
    }

    if (checkArrowParent(element) == arrayElements[2] && exerciseSimilar != undefined) {
        exerciseSimilar.arrow = exerciseSimilar.checkArrow(element);
        exerciseSimilar.slide(); 
    }

    
    if (checkArrowParent(element) == arrayElements[3] && youtubeVideos == undefined) {
        youtubeVideos = new Bodypart(element);
        console.log(youtubeVideos);
    }
    

    if (checkArrowParent(element) == arrayElements[3] && youtubeVideos != undefined) {
        youtubeVideos.arrow = youtubeVideos.checkArrow(element);
        youtubeVideos.slide(); 
    }

        
    if (checkArrowParent(element) == arrayElements[4] && exerciseEquipment == undefined) {
        exerciseEquipment = new Bodypart(element);
        console.log(exerciseEquipment)
    }

    if (checkArrowParent(element) == arrayElements[4] && exerciseEquipment != undefined) {
        exerciseEquipment.arrow = exerciseEquipment.checkArrow(element);
        exerciseEquipment.slide();  
    }

}


