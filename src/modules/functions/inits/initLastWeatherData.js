import { fetchWeatherDataByPlaceData } from "../fetchs/fetchWeatherDataByPlaceData.js";
import { createWeatherCards } from "../ui/createWeatherCards.js";

export async function initLastWeatherData() {
    if (localStorage.getItem('lastPlaceData')) {
        const lastPlaceData = JSON.parse(localStorage.getItem('lastPlaceData'));

        const weatherData = await fetchWeatherDataByPlaceData({ placeData: lastPlaceData });

        createWeatherCards({ weatherData, placeData: lastPlaceData});
    }
}