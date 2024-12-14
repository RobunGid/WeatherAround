import {icons} from '../instances/icons.js';
// TODO: FULL REFACTORING!!! FIX THIS ALL SHIT!!
export function getIcon(weatherData, type='main') {

    weatherData['morningWeather'] = {};
    weatherData['dayWeather'] = {};
    weatherData['nightWeather'] = {};
    weatherData['eveningWeather'] = {};

    Object.entries(weatherData['hourly']).forEach((entry) => {
        const key = entry[0];
        const value = entry[1];
        weatherData['morningWeather'][key] = value[6];
        weatherData['dayWeather'][key] = value[12];
        weatherData['eveningWeather'][key] = value[18];
        weatherData['nightWeather'][key] = value[24];
    })


    const sunriseTime = new Date(weatherData.sunrise);
    const sunsetTime = new Date(weatherData.sunset);

    const eveningTime = new Date(weatherData['hourly']['time'][18]);
    const morningTime = new Date(weatherData['hourly']['time'][6]);

    let isDayIcon = false;
    let isNightIcon = false;
    let isMainIcon = false;

    if (type == 'main') isMainIcon = true;

    if (type == 'night') isNightIcon = true;

    if (type == 'day') isDayIcon = true;


    if (type == 'morning') morningTime < sunriseTime ? isNightIcon = true : isDayIcon = true;

    if (type == 'evening') eveningTime > sunsetTime ? isNightIcon = true : isDayIcon = true;
    
    if (isMainIcon) {
        
        if (weatherData['weather_code'] == 0 ||
            weatherData['weather_code'] == 1 ||
            weatherData['weather_code'] == 2 ||
            weatherData['weather_code'] == 3 
        ) {
            return icons['clearDayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 4 ||
            weatherData['weather_code'] == 5
        ) {
            return icons['hazeIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 6 ||
            weatherData['weather_code'] == 7 ||
            weatherData['weather_code'] == 8 ||
            weatherData['weather_code'] == 9 
        ) {
            return icons['dustIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 10 ||
            weatherData['weather_code'] == 11 ||
            weatherData['weather_code'] == 12
        ) {
            return icons['fogIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 13) return icons['thunderstormsIcon'].getIconElement();

        if (weatherData['weather_code'] == 14) return icons['cloudyIcon'].getIconElement();

        if (weatherData['weather_code'] >= 40 && 
            weatherData['weather_code'] <= 49
        ) {
            return icons['fogIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 50 ||
            weatherData['weather_code'] == 51
        ) {
            return icons['rainy1Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 52 ||
            weatherData['weather_code'] == 53
        ) {
            return icons['rainy2Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 54 ||
            weatherData['weather_code'] == 55
        ) {
            return icons['rainy3Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 60 ||
            weatherData['weather_code'] == 61
        ) {
            return icons['rainy1Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 62 ||
            weatherData['weather_code'] == 63
        ) {
            return icons['rainy2Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 64 ||
            weatherData['weather_code'] == 65
        ) {
            return icons['rainy3Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 66 ||
            weatherData['weather_code'] == 70
        ) {
            return icons['snowy1Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 71 ||
            weatherData['weather_code'] == 72
        ) {
            return icons['snowy2Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 73 ||
            weatherData['weather_code'] == 74 ||
            weatherData['weather_code'] == 75
        ) {
            return icons['snowy3Icon'].getIconElement();
        }

        if (weatherData['weather_code'] == 77) return icons['snowy3Icon'].getIconElement();

        if (weatherData['weather_code'] == 80) return icons['rainy1Icon'].getIconElement();
        
        if (weatherData['weather_code'] == 81) return icons['rainy2Icon'].getIconElement();

        if (weatherData['weather_code'] == 82) return icons['rainy3Icon'].getIconElement();

        if (weatherData['weather_code'] == 85) return icons['snowy3Icon'].getIconElement();

        if (weatherData['weather_code'] == 95) return icons['thunderstormsIcon'].getIconElement();

        if (weatherData['weather_code'] == 96) return icons['hailIcon'].getIconElement();

    }

    if (isNightIcon) {

        if (weatherData[`${type}Weather`]['weather_code'] == 4 ||
            weatherData[`${type}Weather`]['weather_code'] == 5
        ) {
            return icons['hazeNightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] >= 40 && 
            weatherData[`${type}Weather`]['weather_code'] <= 49
        ) {
            return icons['fogNightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 50 ||
            weatherData[`${type}Weather`]['weather_code'] == 51
        ) {
            return icons['rainy1NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 52 ||
            weatherData[`${type}Weather`]['weather_code'] == 53
        ) {
            return icons['rainy2NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 54 ||
            weatherData[`${type}Weather`]['weather_code'] == 55
        ) {
            return icons['rainy3NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 60 ||
            weatherData[`${type}Weather`]['weather_code'] == 61
        ) {
            return icons['rainy1NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 62 ||
            weatherData[`${type}Weather`]['weather_code'] == 63
        ) {
            return icons['rainy2NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 64 ||
            weatherData[`${type}Weather`]['weather_code'] == 65
        ) {
            return icons['rainy3NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 66) {
            return icons['snowy1Icon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 70
        ) {
            return icons['snowy1NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 71 ||
            weatherData[`${type}Weather`]['weather_code'] == 72
        ) {
            return icons['snowy2NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 73 ||
            weatherData[`${type}Weather`]['weather_code'] == 74 ||
            weatherData[`${type}Weather`]['weather_code'] == 75
        ) {
            return icons['snowy3NightIcon'].getIconElement();
        }

        if (weatherData[`${type}Weather`]['weather_code'] == 77) return icons['snowy3NightIcon'].getIconElement();
        if (weatherData[`${type}Weather`]['weather_code'] == 80) return icons['rainy1NightIcon'].getIconElement();
        if (weatherData[`${type}Weather`]['weather_code'] == 81) return icons['rainy2NightIcon'].getIconElement();
        if (weatherData[`${type}Weather`]['weather_code'] == 82) return icons['rainy3NightIcon'].getIconElement();
        if (weatherData[`${type}Weather`]['weather_code'] == 85) return icons['snowy3NightIcon'].getIconElement();
        if (weatherData[`${type}Weather`]['weather_code'] == 95) return icons['thunderstormsIcon'].getIconElement();
        if (weatherData[`${type}Weather`]['weather_code'] == 96) return icons['hailIcon'].getIconElement();

            if (type == 'morning') {

                if (weatherData.morningWeather.cloud_cover >= 95) {
                    return icons['cloudy3NightIcon'].getIconElement();
                }
    
                if (weatherData.morningWeather.cloud_cover >= 90) {
                    return icons['cloudy2NightIcon'].getIconElement();
                }
    
                if (weatherData.morningWeather.cloud_cover >= 85) {
                    return icons['cloudy1NightIcon'].getIconElement();
                }
            }
    
            if (type == 'day') {
                if (weatherData.dayWeather.cloud_cover >= 95) {
                    return icons['cloudy3NightIcon'].getIconElement();
                }
    
                if (weatherData.dayWeather.cloud_cover >= 90) {
                    return icons['cloudy2NightIcon'].getIconElement();
                }
    
                if (weatherData.dayWeather.cloud_cover >= 85) {
                    return icons['cloudy1NightIcon'].getIconElement();
                }
            }
    
            if (type == 'evening') {
                if (weatherData.eveningWeather.cloud_cover >= 95) {
                    return icons['cloudy3NightIcon'].getIconElement();
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 90) {
                    return icons['cloudy2NightIcon'].getIconElement();
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 85) {
                    return icons['cloudy1NightIcon'].getIconElement();
                }
            }

            if (weatherData[`${type}Weather`]['weather_code'] == 0 ||
                weatherData[`${type}Weather`]['weather_code'] == 1 ||
                weatherData[`${type}Weather`]['weather_code'] == 2 ||
                weatherData[`${type}Weather`]['weather_code'] == 3 
            ) {
                return icons['clearNightIcon'].getIconElement();
            }

    }

    if (isDayIcon) {

        if (weatherData['weather_code'] == 4 ||
            weatherData['weather_code'] == 5
        ) {
            return icons['hazeDayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] >= 40 && 
            weatherData['weather_code'] <= 49
        ) {
            return icons['fogDayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 50 ||
            weatherData['weather_code'] == 51
        ) {
            return icons['rainy1DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 52 ||
            weatherData['weather_code'] == 53
        ) {
            return icons['rainy2DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 54 ||
            weatherData['weather_code'] == 55
        ) {
            return icons['rainy3DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 60 ||
            weatherData['weather_code'] == 61
        ) {
            return icons['rainy1DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 62 ||
            weatherData['weather_code'] == 63
        ) {
            return icons['rainy2DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 64 ||
            weatherData['weather_code'] == 65
        ) {
            return icons['rainy3DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 70 ||
            weatherData['weather_code'] == 71
        ) {
            return icons['snowy1DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 71 ||
            weatherData['weather_code'] == 72
        ) {
            return icons['snowy2DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 73 ||
            weatherData['weather_code'] == 74 ||
            weatherData['weather_code'] == 75
        ) {
            return icons['snowy3DayIcon'].getIconElement();
        }

        if (weatherData['weather_code'] == 77) return icons['snowy3DayIcon'].getIconElement();
        if (weatherData['weather_code'] == 80) return icons['rainy1DayIcon'].getIconElement();
        if (weatherData['weather_code'] == 81) return icons['rainy2DayIcon'].getIconElement();
        if (weatherData['weather_code'] == 82) return icons['rainy3DayIcon'].getIconElement();
        if (weatherData['weather_code'] == 85) return icons['snowy3DayIcon'].getIconElement();
        if (weatherData['weather_code'] == 95) return icons['thunderstormsIcon'].getIconElement();
        if (weatherData['weather_code'] == 96) return icons['hailIcon'].getIconElement();

            if (type == 'morning') {


                if (weatherData.morningWeather.cloud_cover >= 95) {
                    return icons['cloudy3DayIcon'].getIconElement();
                }
    
                if (weatherData.morningWeather.cloud_cover >= 90) {
                    return icons['cloudy2DayIcon'].getIconElement();
                }
    
                if (weatherData.morningWeather.cloud_cover >= 85) {
                    return icons['cloudy1DayIcon'].getIconElement();
                }
            }
    
            if (type == 'day') {
                if (weatherData.dayWeather.cloud_cover >= 95) {
                    return icons['cloudy3DayIcon'].getIconElement();
                }
    
                if (weatherData.dayWeather.cloud_cover >= 90) {
                    return icons['cloudy2DayIcon'].getIconElement();
                }
    
                if (weatherData.dayWeather.cloud_cover >= 85) {
                    return icons['cloudy1DayIcon'].getIconElement();
                }
            }
    
            if (type == 'evening') {
                if (weatherData.eveningWeather.cloud_cover >= 95) {
                    return icons['cloudy3DayIcon'].getIconElement();
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 90) {
                    return icons['cloudy2DayIcon'].getIconElement();
                }
    
                if (weatherData.eveningWeather.cloud_cover >= 85) {
                    return icons['cloudy1DayIcon'].getIconElement();
                }
            }
            
        if (weatherData[`${type}Weather`]['weather_code'] == 0 ||
            weatherData[`${type}Weather`]['weather_code'] == 1 ||
            weatherData[`${type}Weather`]['weather_code'] == 2 ||
            weatherData[`${type}Weather`]['weather_code'] == 3 
        ) {
            return icons['clearDayIcon'].getIconElement();
        }

    }


    return icons['undefinedIcon'].getIconElement();
}