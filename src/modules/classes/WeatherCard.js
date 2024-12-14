import { getIcon } from '../functions/getIcon.js'

export class WeatherCard {
    constructor({ weatherDayData, index }) {
        this.weatherDayData = weatherDayData;
        this.mainIcon = getIcon(weatherDayData, 'main');
        this.index = index;
    }

    getWeatherCardElement() {
        const weatherCardDiv = document.createElement('div');
        weatherCardDiv.classList.add('card');
        weatherCardDiv.dataset.index = index;
        weatherCardDiv.style.cssText = 'transform: translate(375px); transition: 0.5s;'

        weatherCardDiv.innerHTML = `
        <div class="card-header">
            <div class="card-day" data-key-text-content-translate="Sunday">Воскресенье</div>
            <div class="card-date"> <time datetime="2024-12-07" data-key-datetime-translate="Date">08.12.2024</time> </div>
            <div class="card-place"><span>Токио, Япония</span></div>
            <div class="card-weather-icon"> <img src="src/icons/animated/clear-day.svg" alt="Ясное небо (День)" title="Ясное небо (День)" aria-label="Ясное небо (День)" data-key-alt-translate="Clear sky (Day)" data-key-arialabel-translate="Clear sky (Day)" data-key-title-translate="Clear sky (Day)"> </div>
            <div class="card-weather-text" data-key-text-content-translate="Clear sky (Day)">Ясное небо (День)</div>
            <div class="card-temperature">+10.9°C</div>
        </div>
        <div class="card-hourly">
            <div class="hourly">
                <div class="hourly-icon"> <img src="src/icons/animated/clear-night.svg" alt="Ясное небо (Ночь)" title="Ясное небо (Ночь)" aria-label="Ясное небо (Ночь)" data-key-alt-translate="Clear sky (Night)" data-key-arialabel-translate="Clear sky (Night)" data-key-title-translate="Clear sky (Night)"> </div>
                <div class="hourly-time" data-key-text-content-translate="Morning time">6:00</div>
                <div class="hourly-temperature">+6.3°C</div>
            </div>
            <div class="hourly">
                <div class="hourly-icon"><img src="src/icons/animated/clear-day.svg" alt="Ясное небо (День)" title="Ясное небо (День)" aria-label="Ясное небо (День)" data-key-alt-translate="Clear sky (Day)" data-key-arialabel-translate="Clear sky (Day)" data-key-title-translate="Clear sky (Day)"></div>
                <div class="hourly-time" data-key-text-content-translate="Day time">12:00</div>
                <div class="hourly-temperature">+10.9°C</div>
            </div>
            <div class="hourly">
                <div class="hourly-icon"><img src="src/icons/animated/clear-night.svg" alt="Ясное небо (Ночь)" title="Ясное небо (Ночь)" aria-label="Ясное небо (Ночь)" data-key-alt-translate="Clear sky (Night)" data-key-arialabel-translate="Clear sky (Night)" data-key-title-translate="Clear sky (Night)"></div>
                <div class="hourly-time" data-key-text-content-translate="Evening time">18:00</div>
                <div class="hourly-temperature">+9.4°C</div>
            </div>
            <div class="hourly">
                <div class="hourly-icon"><img src="src/icons/animated/clear-night.svg" alt="Ясное небо (Ночь)" title="Ясное небо (Ночь)" aria-label="Ясное небо (Ночь)" data-key-alt-translate="Clear sky (Night)" data-key-arialabel-translate="Clear sky (Night)" data-key-title-translate="Clear sky (Night)"></div>
                <div class="hourly-time" data-key-text-content-translate="Night time">24:00</div>
                <div class="hourly-temperature">+5.8°C</div>
            </div>
        </div>
        <div class="card-footer"> <button class="copy-button">
                <div class="material-symbols-outlined">content_copy</div>
            </button>
            <div class="copy-window" data-key-text-content-translate="Copied!">Copied!</div>
        </div>
        `
    }
}