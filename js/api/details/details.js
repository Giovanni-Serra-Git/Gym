import { exerciseDB } from "../app/api.js";

import { getLocalStorage } from "../app/api.js";

import { createCard } from "../app/card.js";




let linkCard = document.querySelectorAll("[link-card]");
let exercise__picture = document.querySelector(".exercise__picture");
let exerciseDetailsCaption = document.querySelector("[exercise-details-caption]");
let exerciseDescription = document.querySelector("[exercise-details-muscles]");
let exerciseDetailsDescription = document.querySelector("[exercise-details-description]");
let exerciseEquipment = document.querySelector("[exercise-equipment-slider__wrapper]");
let exercisesSimilar = document.querySelector("[exercise-similar-slider__wrapper]");
let exerciseYoutubeCaption = document.querySelector("[exercise-youtube-videos__caption]")
let slider = document.querySelector("[slider]");


let bodyPart = window.localStorage.getItem("bodyPart");
let equipment = window.localStorage.getItem("equipment");


let allExercises = [];

const cardExercises = [
    {
        icon: "../assets/img/api/details/icon_one.png",
        name: "equipment"
    },
    {
        icon: "../assets/img/api/details/icon_two.png",
        name: "target"
    },
    {
        icon: "../assets/img/api/details/icon_one.png",
        name: "bodyPart"
    },
];

fetch(`https://exercisedb.p.rapidapi.com/exercises`, exerciseDB)
.then( response => response.json() )
.then( data => {
    data.forEach( exercise => {
        allExercises.push(exercise);
    } );
} )
.then( () => {

    allExercises.forEach( exercise => {
        return exercise.equipment == getLocalStorage("equipment") ? createCard(exercise,exerciseEquipment,slider) : null;
    }) 

    allExercises.forEach(exercise =>  {
         return exercise.bodyPart == getLocalStorage("bodyPart") ? createCard(exercise,exercisesSimilar,slider) : null;
} )

} )


exercise__picture.innerHTML = `
    <img src="${getLocalStorage("gifUrl")}" alt="${getLocalStorage("gifUrl")}">
`;

exerciseDetailsDescription.innerHTML =   `
    <p class="fs-200 color-theme-gray">Working out helps improve health. ${getLocalStorage("name")} strengthens your ${getLocalStorage("target")} ! keep working out and enjoy it</p>
`; 





const generateExerciseDescription = function(element) {


    let card = document.createElement("div");
    card.classList.add("card-icon");
    card.classList.add("flex");
    card.classList.add("flex-align-center");
    card.innerHTML = `
        <img class="exercise-icon" src="${element.icon}" alt="Icon Img">
        <p class="fs-150">${window.localStorage.getItem(element.name)}</p>
    `;

    exerciseDetailsCaption.innerHTML = `
        <p class="fs-400 capitalize fill-text-cta no-slide-in" data-text="${getLocalStorage("name")}">
          ${getLocalStorage("name")}
        </p>
    `;

    exerciseDescription.appendChild(card);
}


Object.entries(cardExercises).map(entry => {
    let cardIconContainer = document.createElement("div");
    cardIconContainer.classList.add("card-icon-container");
    let icon = entry[1];
    generateExerciseDescription(icon);  
});


exerciseYoutubeCaption.setAttribute("data-text", getLocalStorage("bodyPart")); 
exerciseYoutubeCaption.innerHTML = getLocalStorage("bodyPart");