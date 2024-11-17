import fetchPlaceDataByCords from "./fetchPlaceDataByCords.js";
import retrieveWeatherData from "./retrieveWeatherData.js";

export default async function fetchUserLocationWeather() {
    let response = await fetch("https://ipapi.co/json/");
    let userPlaceData = await response.json();
    let userLat = userPlaceData.latitude;
    let userLon = userPlaceData.longitude;
    let placeData = await fetchPlaceDataByCords(userLat, userLon);
    retrieveWeatherData(placeData);
}