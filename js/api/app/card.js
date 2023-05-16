let  counter = 0;


import { storeItems } from "./api.js";

export const createCard = function(exercise, parentCard, slider) {


    const {
        id,
        equipment,
        gifUrl,
        bodyPart,
        target,
        name,
    } = exercise;

    let parent;

    if (parentCard == "showResultContainer") {
        parent = document.querySelector("[show-results-container]");
    } else {
        parent = parentCard.closest("div[parent]");
    }

    let linkCard = document.createElement("a");
    let card = document.createElement("div");

    linkCard.setAttribute("href", "details.html");
    linkCard.setAttribute("target", "_blank");
    linkCard.setAttribute("link-card", "link-card")

    card.classList.add(`${parent.classList[0]}__card`);
    card.classList.add("flex");
    card.classList.add("flex-column");
    card.classList.add("flex-center");
    card.classList.add("card-result");

    card.innerHTML = `
    <div class="${parent.classList[0]}__card__image" data data-id="${id}">
    <p data data-equipment="${equipment}" style="display: none"></p>
    <img src="${gifUrl}" alt="Card Image" data data-gif-url="${gifUrl}">
</div> 
<div class="${parent.classList[0]}__card__body-part__container flex">
    <p class="data-body-part body-part__one bg-theme-dark-red capitalize" data data-body-part="${bodyPart}">${bodyPart}</p>
    <p class="data-body-part body-part__two bg-theme-dark-red capitalize" data data-target="${target}">${target}</p>
</div>
<div class="${parent.classList[0]}__card__caption">
    <p class="fs-200 capitalize caption" data data-name="${name}">${name}</p>
</div>
    `;


    linkCard.appendChild(card);
    linkCard.addEventListener("click", elementTarget => storeItems(exercise,elementTarget) );


    if (parentCard == "showResultContainer") { 
        return linkCard;
    } else {
        parent.appendChild(linkCard);
    } 

   
    slider.classList.contains("active") ? slider.classList.remove("active") : null;
    slider.classList.add("active");

};

