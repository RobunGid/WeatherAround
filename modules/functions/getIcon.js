import {icons} from '../instances/icons.js';
import getRandomInt from './getRandomInt.js';

export default function getIcon(weatherData, type='main') {
    const currentDate = new Date(weatherData.date);

    const sunriseTime = new Date(weatherData.sunriseTime);
    const sunsetTime = new Date(weatherData.sunsetTime);

    const eveningTime = new Date(weatherData.eveningWeather.time);
    const morningTime = new Date(weatherData.morningWeather.time);

    let isDayIcon = false;
    let isNightIcon = false;
    let isMainIcon = false;

    if (type == 'main') isMainIcon = true;

    if (type == 'night') isNightIcon = true;

    if (type == 'day') isDayIcon = true;


    if (type == 'morning') morningTime < sunriseTime ? isNightIcon = true : isDayIcon = true;

    if (type == 'evening') eveningTime > sunsetTime ? isNightIcon = true : isDayIcon = true;
    
    if (isMainIcon) {

        if (weatherData['weatherCode'] == 0 ||
            weatherData['weatherCode'] == 1 ||
            weatherData['weatherCode'] == 2 ||
            weatherData['weatherCode'] == 3 
        ) {
            return icons['clearDayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 4 ||
            weatherData['weatherCode'] == 5
        ) {
            return icons['hazeIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 6 ||
            weatherData['weatherCode'] == 7 ||
            weatherData['weatherCode'] == 8 ||
            weatherData['weatherCode'] == 9 
        ) {
            return icons['dustIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 10 ||
            weatherData['weatherCode'] == 11 ||
            weatherData['weatherCode'] == 12
        ) {
            return icons['fogIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 13) return icons['thunderstormsIcon'].getIconElement()

        if (weatherData['weatherCode'] == 14) return icons['cloudyIcon'].getIconElement()

        if (weatherData['weatherCode'] >= 40 && 
            weatherData['weatherCode'] <= 49
        ) {
            return icons['fogIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 50 ||
            weatherData['weatherCode'] == 51
        ) {
            return icons['rainy1Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 52 ||
            weatherData['weatherCode'] == 53
        ) {
            return icons['rainy2Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 54 ||
            weatherData['weatherCode'] == 55
        ) {
            return icons['rainy3Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 60 ||
            weatherData['weatherCode'] == 61
        ) {
            return icons['rainy1Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 62 ||
            weatherData['weatherCode'] == 63
        ) {
            return icons['rainy2Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 64 ||
            weatherData['weatherCode'] == 65
        ) {
            return icons['rainy3Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 70
        ) {
            return icons['snowy1Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 71 ||
            weatherData['weatherCode'] == 72
        ) {
            return icons['snowy2Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 73 ||
            weatherData['weatherCode'] == 74 ||
            weatherData['weatherCode'] == 75
        ) {
            return icons['snowy3Icon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 77) return icons['snowy3Icon'].getIconElement()

        if (weatherData['weatherCode'] == 80) return icons['rainy1Icon'].getIconElement()
        
        if (weatherData['weatherCode'] == 81) return icons['rainy2Icon'].getIconElement()

        if (weatherData['weatherCode'] == 82) return icons['rainy3Icon'].getIconElement()

        if (weatherData['weatherCode'] == 85) return icons['snowy3Icon'].getIconElement()

        if (weatherData['weatherCode'] == 95) return icons['thunderstormsIcon'].getIconElement()

        if (weatherData['weatherCode'] == 96) return icons['hailIcon'].getIconElement()

    }

    if (isNightIcon) {

        if (weatherData['weatherCode'] == 4 ||
            weatherData['weatherCode'] == 5
        ) {
            return icons['hazeNightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] >= 40 && 
            weatherData['weatherCode'] <= 49
        ) {
            return icons['fogNightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 50 ||
            weatherData['weatherCode'] == 51
        ) {
            return icons['rainy1NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 52 ||
            weatherData['weatherCode'] == 53
        ) {
            return icons['rainy2NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 54 ||
            weatherData['weatherCode'] == 55
        ) {
            return icons['rainy3NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 60 ||
            weatherData['weatherCode'] == 61
        ) {
            return icons['rainy1NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 62 ||
            weatherData['weatherCode'] == 63
        ) {
            return icons['rainy2NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 64 ||
            weatherData['weatherCode'] == 65
        ) {
            return icons['rainy3NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 70
        ) {
            return icons['snowy1NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 71 ||
            weatherData['weatherCode'] == 72
        ) {
            return icons['snowy2NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 73 ||
            weatherData['weatherCode'] == 74 ||
            weatherData['weatherCode'] == 75
        ) {
            return icons['snowy3NightIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 77) return icons['snowy3NightIcon'].getIconElement()
        if (weatherData['weatherCode'] == 80) return icons['rainy1NightIcon'].getIconElement()
        if (weatherData['weatherCode'] == 81) return icons['rainy2NightIcon'].getIconElement()
        if (weatherData['weatherCode'] == 82) return icons['rainy3NightIcon'].getIconElement()
        if (weatherData['weatherCode'] == 85) return icons['snowy3NightIcon'].getIconElement()
        if (weatherData['weatherCode'] == 95) return icons['thunderstormsIcon'].getIconElement()
        if (weatherData['weatherCode'] == 96) return icons['hailIcon'].getIconElement()

            if (type == 'morning') {

                if (weatherData.morningWeather.cloud_cover >= 95) {
                    return icons['cloudy3NightIcon'].getIconElement()
                }
    
                if (weatherData.morningWeather.cloud_cover >= 90) {
                    return icons['cloudy2NightIcon'].getIconElement()
                }
    
                if (weatherData.morningWeather.cloud_cover >= 85) {
                    return icons['cloudy1NightIcon'].getIconElement()
                }
            }
    
            if (type == 'day') {
                if (weatherData.dayWeather.cloud_cover >= 95) {
                    return icons['cloudy3NightIcon'].getIconElement()
                }
    
                if (weatherData.dayWeather.cloud_cover >= 90) {
                    return icons['cloudy2NightIcon'].getIconElement()
                }
    
                if (weatherData.dayWeather.cloud_cover >= 85) {
                    return icons['cloudy1NightIcon'].getIconElement()
                }
            }
    
            if (type == 'evening') {
                if (weatherData.eveningWeather.cloud_cover >= 95) {
                    return icons['cloudy3NightIcon'].getIconElement()
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 90) {
                    return icons['cloudy2NightIcon'].getIconElement()
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 85) {
                    return icons['cloudy1NightIcon'].getIconElement()
                }
            }

            if (weatherData['weatherCode'] == 0 ||
                weatherData['weatherCode'] == 1 ||
                weatherData['weatherCode'] == 2 ||
                weatherData['weatherCode'] == 3 
            ) {
                return icons['clearNightIcon'].getIconElement()
            }

    }

    if (isDayIcon) {

        if (weatherData['weatherCode'] == 4 ||
            weatherData['weatherCode'] == 5
        ) {
            return icons['hazeDayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] >= 40 && 
            weatherData['weatherCode'] <= 49
        ) {
            return icons['fogDayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 50 ||
            weatherData['weatherCode'] == 51
        ) {
            return icons['rainy1DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 52 ||
            weatherData['weatherCode'] == 53
        ) {
            return icons['rainy2DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 54 ||
            weatherData['weatherCode'] == 55
        ) {
            return icons['rainy3DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 60 ||
            weatherData['weatherCode'] == 61
        ) {
            return icons['rainy1DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 62 ||
            weatherData['weatherCode'] == 63
        ) {
            return icons['rainy2DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 64 ||
            weatherData['weatherCode'] == 65
        ) {
            return icons['rainy3DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 70 ||
            weatherData['weatherCode'] == 71
        ) {
            return icons['snowy1DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 71 ||
            weatherData['weatherCode'] == 72
        ) {
            return icons['snowy2DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 73 ||
            weatherData['weatherCode'] == 74 ||
            weatherData['weatherCode'] == 75
        ) {
            return icons['snowy3DayIcon'].getIconElement()
        }

        if (weatherData['weatherCode'] == 77) return icons['snowy3DayIcon'].getIconElement()
        if (weatherData['weatherCode'] == 80) return icons['rainy1DayIcon'].getIconElement()
        if (weatherData['weatherCode'] == 81) return icons['rainy2DayIcon'].getIconElement()
        if (weatherData['weatherCode'] == 82) return icons['rainy3DayIcon'].getIconElement()
        if (weatherData['weatherCode'] == 85) return icons['snowy3DayIcon'].getIconElement()
        if (weatherData['weatherCode'] == 95) return icons['thunderstormsIcon'].getIconElement()
        if (weatherData['weatherCode'] == 96) return icons['hailIcon'].getIconElement()

            if (type == 'morning') {


                if (weatherData.morningWeather.cloud_cover >= 95) {
                    return icons['cloudy3DayIcon'].getIconElement()
                }
    
                if (weatherData.morningWeather.cloud_cover >= 90) {
                    return icons['cloudy2DayIcon'].getIconElement()
                }
    
                if (weatherData.morningWeather.cloud_cover >= 85) {
                    return icons['cloudy1DayIcon'].getIconElement()
                }
            }
    
            if (type == 'day') {
                if (weatherData.dayWeather.cloud_cover >= 95) {
                    return icons['cloudy3DayIcon'].getIconElement()
                }
    
                if (weatherData.dayWeather.cloud_cover >= 90) {
                    return icons['cloudy2DayIcon'].getIconElement()
                }
    
                if (weatherData.dayWeather.cloud_cover >= 85) {
                    return icons['cloudy1DayIcon'].getIconElement()
                }
            }
    
            if (type == 'evening') {
                if (weatherData.eveningWeather.cloud_cover >= 95) {
                    return icons['cloudy3DayIcon'].getIconElement()
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 90) {
                    return icons['cloudy2DayIcon'].getIconElement()
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 85) {
                    return icons['cloudy1DayIcon'].getIconElement()
                }
            }
            
        if (weatherData['weatherCode'] == 0 ||
            weatherData['weatherCode'] == 1 ||
            weatherData['weatherCode'] == 2 ||
            weatherData['weatherCode'] == 3 
        ) {
            return icons['clearDayIcon'].getIconElement()
        }

    }



    return icons['undefinedIcon'].getIconElement()
}