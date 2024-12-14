import { WeatherCard } from "../../classes/weatherCard.js";
import { getSiteLanguage } from "../language/getSiteLanguage.js";
import { translatePage } from "../language/translatePage.js";

export function createWeatherCards({ weatherData, placeData }) {
    const language = getSiteLanguage();
    const weatherDaysData = [];
    for (let i = 0; i < 14; i++) {
        const weatherDayData = {
            latitude: weatherData.latitude, 
            longitude: weatherData.longitude,
            timezone: weatherData.timezone,
            timezone_abbreviation: weatherData.timezone_abbreviation,
            sunrise: weatherData.daily.sunrise[i],
            sunset: weatherData.daily.sunset[i],
            temperature_2m_max: weatherData.daily.temperature_2m_max[i],
            temperature_2m_min: weatherData.daily.temperature_2m_min[i],
            time: weatherData.daily.time[i],
            weather_code: weatherData.daily.weather_code[i],
            daily_units: weatherData.daily_units,
            hourly_units: weatherData.hourly_units,
            hourly: {},
        }
        Object.entries(weatherData.hourly).forEach(entry => {
            const key = entry[0];
            const value = entry[1];
            weatherDayData['hourly'][key] = value.slice(i * 24, i * 24 + 25);
        })
        weatherDaysData.push(weatherDayData);
    }
    const weatherCards = [];
    weatherDaysData.forEach((weatherDayData, index) => {
        weatherCards.push(new WeatherCard({ weatherDayData, placeData, index })) ;
    })
    
    const cardContainer = document.querySelector(".card-container .container");
    cardContainer.innerHTML = '';
    
    weatherCards.forEach(weatherCard => {
        cardContainer.append(weatherCard.getWeatherCardElement())
    })
    
    translatePage({ language });
}