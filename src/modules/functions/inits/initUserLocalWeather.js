import { fetchPlaceListDataByCords } from '../fetchs/fetchPlaceListDataByCords.js';
import { fetchWeatherDataByPlaceData } from '../fetchs/fetchWeatherDataByPlaceData.js';
import { createWeatherCards } from '../ui/createWeatherCards.js';
import { fetchTranslatePlaceListData } from '../fetchs/fetchTranslatePlaceListData.js'

export async function initUserLocalWeather() {
    let finished = false;

    if (localStorage.getItem('lastPlaceData')) return;

    if (navigator.geolocation) {

        async function getLocationSuccess(position) {
            const userLatitude = position.coords.latitude;
            const userLongitude = position.coords.longitude;
            const userPlaceData = await fetchPlaceListDataByCords({ latitude: userLatitude, longitude: userLongitude });
            finished = true;
        }

        const getLocationOptions = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
        }
        navigator.geolocation.getCurrentPosition(getLocationSuccess, () => {}, getLocationOptions);
    }

    if (!finished) {
        const response = await fetch("https://ipapi.co/json/");
        const userPlace = await response.json();
        const userLatitude = userPlace.latitude;
        const userLongitude = userPlace.longitude;
        const userPlaceData = await fetchPlaceListDataByCords({ latitude: userLatitude, longitude: userLongitude });
        const translatedUserPlaceData = await fetchTranslatePlaceListData({placeListData: [userPlaceData]});
        const weatherData = await fetchWeatherDataByPlaceData({ placeData: translatedUserPlaceData[0] });
        createWeatherCards({ weatherData, placeData: translatedUserPlaceData[0]});

        localStorage.setItem('lastPlaceData', JSON.stringify(translatedUserPlaceData[0]))
    } 
    


}