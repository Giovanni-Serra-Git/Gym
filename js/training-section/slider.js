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

function checkArrow(element) {
    return element.target.closest("div").classList.contains("arrow-left") ? "left" : "right";
}

function checkArrowParent(element) {
    return element.target.closest("div[parent-slider]").querySelector("[slider-wrapper]").classList[0];
}


addEventOnArrows([arrowLeft, arrowRight]);


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

let slider;


function slideShow(element) { 

    if (slider == undefined) {
        slider = new Bodypart(element);
        console.log(slider);
    }

    if (slider != undefined) {
        slider.arrow = slider.checkArrow(element);
        slider.slide(); 
    }

}


