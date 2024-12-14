import { WeatherCard } from "../../classes/weatherCard.js";

export function createWeatherCards({ weatherData }) {
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
            weatherCode: weatherData.daily.weather_code[i],
            dailyUnits: weatherData.daily_units,
            hourlyUnits: weatherData.hourly_units,
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
        weatherCards.push(new WeatherCard({ weatherDayData, index })) ;
    })
    
    const cardContainer = document.querySelector(".card-container .container");
    cardContainer.innerHTML = '';
    
    weatherCards.forEach(weatherCard => {
        console.log(weatherCard)
    })
}