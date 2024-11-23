import createPlaceButtons from "./createPlaceButtons.js";
import fetchUserLocationWeather from "./fetchUserLocationWeather.js";

import updateCardStyles from "./updateCardStyles.js";


export default function domContentLoaded(event) {

    // Button to scroll previous card
    const previousButton = document.querySelector('#previous-button');
    // Button to scroll next card
    const nextButton = document.querySelector('#next-button');
    // Place input
    const placeInput = document.querySelector("#place-input");

    updateCardStyles();

    if (sessionStorage.getItem('placeListData')) {
        createPlaceButtons(JSON.parse(sessionStorage.getItem('placeListData')), false);
    }

    if (sessionStorage.getItem('placeInputData')) {
        placeInput.value = sessionStorage.getItem('placeInputData');
    }

    if (!sessionStorage.getItem('lastWeatherData')) {
        fetchUserLocationWeather();
    }
      

    
}