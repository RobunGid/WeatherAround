import { fetchWeatherDataByPlaceData } from "../fetchs/fetchWeatherDataByPlaceData.js";

export async function handlePlaceOptionButtonClick({ placeData }) {
    const weatherData = await fetchWeatherDataByPlaceData({ placeData });
    createWeatherCards({ weatherData })
}