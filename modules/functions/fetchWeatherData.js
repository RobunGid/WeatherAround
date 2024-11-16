export default async function fetchWeatherData({lattitude, longitude}) {
    const weatherApiUrl =  `https://api.open-meteo.com/v1/forecast?latitude=${lattitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m&timezone=auto&past_days=7&daily=sunrise,sunset,weather_code,temperature_2m_max,temperature_2m_min&forecast_days=8`;
    const response = await fetch(weatherApiUrl);
    const rawWeatherData = await response.json();

    return rawWeatherData
}