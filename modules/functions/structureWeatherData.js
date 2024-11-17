import getDay from './getDayOfWeek.js'

export default function structureWeatherData(rawWeatherData, placeData) {
    const weatherDataArray = [];
    for(let i = 0; i < 318; i += 24) {
        let weatherDayData = {};
    
        weatherDayData['morningWeather'] = {};
        weatherDayData['dayWeather'] = {};
        weatherDayData['eveningWeather'] = {};
        weatherDayData['nightWeather'] = {};
    
        for (let item in rawWeatherData.hourly) {
        weatherDayData['morningWeather'][item] = rawWeatherData.hourly[item][i+6];
        weatherDayData['dayWeather'][item] = rawWeatherData.hourly[item][i+12];
        weatherDayData['eveningWeather'][item] = rawWeatherData.hourly[item][i+18];
        weatherDayData['nightWeather'][item] = rawWeatherData.hourly[item][i+24];
        }
        
        weatherDayData['date'] = new Date(weatherDayData['nightWeather']['time']);
        weatherDayData['datetime'] = rawWeatherData['daily']['time'][Math.floor(i / 24)];

        weatherDayData['day'] = getDay(weatherDayData['date']);

        weatherDayData['sunsetTime'] = rawWeatherData['daily']['sunset'][Math.floor(i / 24)];
        weatherDayData['sunriseTime'] = rawWeatherData['daily']['sunrise'][Math.floor(i / 24)];
        weatherDayData['weatherCode'] = rawWeatherData['daily']['weather_code'][Math.floor(i / 24)];
        weatherDayData['units'] = rawWeatherData['hourly_units'];
        weatherDayData['placeData'] = placeData;
        weatherDayData['minTemperature'] = rawWeatherData['daily']['temperature_2m_min'][Math.floor(i / 24)];
        weatherDayData['maxTemperature'] = rawWeatherData['daily']['temperature_2m_max'][Math.floor(i / 24)];
    
        weatherDataArray.push(weatherDayData);
    }

    return weatherDataArray;
}