import { exerciseDB } from "../app/api.js";

import { inputSearch } from "../navbar/navbar-search.js";

import { createCard } from "../app/card.js";

export const allExercisesUrl = 'https://exercisedb.p.rapidapi.com/exercises';

export let showResultContainer = document.querySelector("[show-results-container]");
export let bodyParts = document.querySelectorAll("[data-body-part]");
let indexSearchResults;
let slider = document.querySelector("[show-results-container-slider-control]");

export const createCardWrapper = function() {
    let cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");
    cardWrapper.classList.add("flex");
    cardWrapper.classList.add("flex-between");
    cardWrapper.setAttribute("card-wrapper","");
    return cardWrapper;
};



const bodyPartListUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
const listByBodyPartsUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';



const createCardBodyParts = function(element) {
    let card = document.createElement("div");
    let parent = document.querySelector("[body-part-list-slider__wrapper]");
    card.classList.add("body-part-card");
    card.classList.add("flex");
    card.classList.add("flex-column");
    card.setAttribute("data-body-part", `${element}`)
    card.innerHTML = `
    <div class="body-part-card__image">
        <img src="../assets/img/api/search/card__icon.png" alt="Icon Card Search">
    </div>
    <div class="body-part-card__caption fs-150">
        <p class="capitalize">${element}</p>
    </div>
    `;
    parent.appendChild(card);
};

const generateBodyPartList = function(url, options) {
    fetch(url, options)
    .then( response => response.json() )
    .then( data => {
        data.forEach( bodyPart => {
            createCardBodyParts(bodyPart);
        } )
    }  )
};

// Here

generateBodyPartList(bodyPartListUrl, exerciseDB);

let cardWrapper = createCardWrapper();


export let allExercises = [];


fetch(`https://exercisedb.p.rapidapi.com/exercises`, exerciseDB)
.then( response => response.json() )
.then( data => {
    data.forEach( exercise => {
        allExercises.push(exercise);
    } );
} )
.then( () => {
    let bodyParts = document.querySelectorAll("[data-body-part]");
    bodyParts.forEach(bodyPart => {
        bodyPart.addEventListener("click", () => {
            if (indexBodyPartsClicks > 1) {
                indexBodyPartsClicks = 0;
                window.localStorage.setItem("body-part-counter", indexBodyPartsClicks);
            }
            indexBodyPartsClicks++;
            window.localStorage.setItem("body-part-counter", indexBodyPartsClicks);
            cleanShowResults(showResultContainer);
            slider.classList.contains("active") ? slider.classList.remove("active") : null;
            indexBodyParts = 1;
            allExercises.filter( exercise => { 
                if (bodyPart.getAttribute("data-body-part") == exercise.bodyPart) {
                    exercisesFiltered.push(exercise);
                }           
            } );
            
            allExercises.filter( exercise => {
                if (bodyPart.getAttribute("data-body-part") == exercise.bodyPart) {
                    slider.classList.add("active");
                    showResults(indexBodyParts,exercise);
                    indexBodyParts++;
                }
               
            } );
    
            exercisesFiltered = [];    
        })
    });
    
} );


const generateAllExercises = function(dataSearch) {

    indexSearchResults = 1;

    allExercises.filter( exercise => {
        if (exercise.name.toLowerCase().includes(dataSearch)) {
            exercisesFiltered.push(exercise);

        } else if (exercise.bodyPart.toLowerCase().includes(dataSearch)) {
            exercisesFiltered.push(exercise);

        } else if (exercise.equipment.toLowerCase().includes(dataSearch)) {
            exercisesFiltered.push(exercise);

        } else if (exercise.target.toLowerCase().includes(dataSearch)) {
            exercisesFiltered.push(exercise); 

        }
    } );

    allExercises.filter( exercise => {
            if (exercise.name.toLowerCase().includes(dataSearch)) {
                showResults(indexSearchResults, exercise);
                indexSearchResults++;
            } else if (exercise.bodyPart.toLowerCase().includes(dataSearch)) {
                showResults(indexSearchResults, exercise);
                indexSearchResults++;
            } else if (exercise.equipment.toLowerCase().includes(dataSearch)) {
                showResults(indexSearchResults, exercise);
                indexSearchResults++;
            } else if (exercise.target.toLowerCase().includes(dataSearch)) {
                showResults(indexSearchResults, exercise);
                indexSearchResults++;
            }
        }
    );
}

let counterCardWrapper = 1;

let exercisesFiltered = [];





const showResults = function(index,exercise) {

    if (index <= exercisesFiltered.length) {
        cardWrapper.appendChild(createCard(exercise,"showResultContainer", slider));  
    }

    if (index % 8 == 0 || index == exercisesFiltered.length) {
        showResultContainer.appendChild(cardWrapper);
        cardWrapper = createCardWrapper();
    } 
}

let inputSearchCounter = 0;

inputSearch.addEventListener("keypress", e => {
    if (e.key == "Enter") { 
        if (inputSearchCounter > 1) inputSearchCounter = 0;
        inputSearchCounter++;
        window.localStorage.setItem("input-search-counter", inputSearchCounter);
        cleanShowResults(showResultContainer);
        slider.classList.contains("active") ? null : slider.classList.add("active");
        generateAllExercises(inputSearch.value);
        exercisesFiltered = [];
    }    
});


let indexBodyParts;
let indexBodyPartsClicks = 0;

export const cleanShowResults = function(parent) {
    parent.innerHTML = "";
    parent.style.transform = "translateX(0)";
}