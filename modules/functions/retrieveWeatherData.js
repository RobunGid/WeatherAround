import createWeatherCard from "./createWeatherCard.js";

import fetchWeatherData from "./fetchWeatherData.js";

import structureWeatherData from "./structureWeatherData.js";

export default async function retrieveWeatherData(placeData) {

    let container = document.querySelector('.container');
    container.innerHTML = '';
    container.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';

    let placeListHistory = JSON.parse(localStorage.getItem('placeListHistory'));

    if (placeListHistory) {
        if (JSON.stringify(placeListHistory).includes(JSON.stringify(placeData))) {
            placeListHistory.splice(placeListHistory.findIndex(item => item.place_id == placeData.place_id), 1)
        } 
        placeListHistory.unshift(placeData)
        localStorage.setItem('placeListHistory', JSON.stringify(placeListHistory))
        
    } else {
        localStorage.setItem('placeListHistory', JSON.stringify([placeData]))
    }


    
    const rawWeatherData = await fetchWeatherData({lattitude: placeData.lat, longitude: placeData.lon})

    const weatherData = structureWeatherData(rawWeatherData, placeData);

    sessionStorage.setItem('lastWeatherData', JSON.stringify(weatherData))

    createWeatherCard(weatherData)

    console.log(weatherData)
}