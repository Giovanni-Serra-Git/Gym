const apiKey = "3dbabcb1c2msh7cad4344bbc778fp173816jsn519c18796089";
const apiKeyExercises = "3dbabcb1c2msh7cad4344bbc778fp173816jsn519c18796089";

const url = 'https://exercisedb.p.rapidapi.com/status';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3dbabcb1c2msh7cad4344bbc778fp173816jsn519c18796089',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

const url_2 = 'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber';
const options_2 = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3dbabcb1c2msh7cad4344bbc778fp173816jsn519c18796089',
		'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url_2, options_2);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


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
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
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

