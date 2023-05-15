let slider = document.querySelector("." + checkArrowParent(element));

let sliderTransformValue = window.getComputedStyle(slider).getPropertyValue("transform");
sliderTransformValue = Number(new WebKitCSSMatrix(sliderTransformValue).e);

counter++;

     if (checkArrow(element) == "left" && counter < cardLength) {
          if (sliderTransformValue == 0) {
              slider.style.transform = `translateX(-${cardWidth}px)`;
         } else {
              console.log("Else")
              slider.style.transform = `translateX(${sliderTransformValue + ( - cardWidth ) }px)`;
         }
     }

     if (checkArrow(element) == "right") {
          counter = 1;
          if (sliderTransformValue == 0) {
           return;
         } else if(sliderTransformValue == cardWidth) {
             slider.style.transform = `translateX(${cardWidth}px)`;
         } else {
              slider.style.transform = `translateX(${sliderTransformValue + cardWidth}px)`;
         }
     }