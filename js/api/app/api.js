const apiKey = "97dae84f37mshc609436038bfff7p1f92b4jsndfa4c7cf809b";
const apiKeyExercises = "97dae84f37mshc609436038bfff7p1f92b4jsndfa4c7cf809b";


export const rapidApiUrl = `exercisedb.p.rapidapi.com`

export const exerciseDB = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${apiKey}`,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const searchYoutubeVideos = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${apiKeyExercises}`,
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	} 
};

export const fetchData = function(url, callBack, optionalParameters) {
    fetch(url, optionalParameters)
    .then(response => response.json(response))
    .then(data => callBack(data))
    .catch(err => console.error(err));
};

export const addEventOnElements = function(elements, eventType, callBack) {
    for (const element of elements) {
        element.addEventListener(eventType,callBack);
    }
};

export const storeItems = function(exercise, elementClicked) { 

    const {
        id,
        equipment,
        gifUrl,
        bodyPart,
        target,
        name,
    } = exercise;

    window.localStorage.clear();
    
    for ( const [key,value] of Object.entries(exercise) ) {
        window.localStorage.setItem(key,value);
    }


}


export const getLocalStorage = function(key) {
    return window.localStorage.getItem(key);
}

