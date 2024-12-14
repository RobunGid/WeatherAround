import { fetchWeatherDataByPlaceData } from "../fetchs/fetchWeatherDataByPlaceData.js";
import { createWeatherCards } from "../ui/createWeatherCards.js";

export async function handlePlaceOptionButtonClick({ placeData }) {
    const weatherData = await fetchWeatherDataByPlaceData({ placeData });
    createWeatherCards({ weatherData, placeData })
}