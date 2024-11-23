import fetchPlaceDataByCords from "./fetchPlaceDataByCords.js";
import retrieveWeatherData from "./retrieveWeatherData.js";

export default async function fetchUserLocationWeather() {
    if (navigator.geolocation) {

        async function getLocationSuccess(position) {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            const placeData = await fetchPlaceDataByCords(userLat, userLon);
            retrieveWeatherData(placeData);
            return;
        }

        function getLocationError(error) {
            console.error(error);
            return;
        }

        const getLocationOptions = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000,
        }
        navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError, getLocationOptions);
        return;
    }
    const response = await fetch("https://ipapi.co/json/");
    const userPlaceData = await response.json();
    const userLat = userPlaceData.latitude;
    const userLon = userPlaceData.longitude;
    const placeData = await fetchPlaceDataByCords(userLat, userLon);
    retrieveWeatherData(placeData);

}