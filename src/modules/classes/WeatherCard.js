import { getIcon } from '../functions/getIcon.js'
import { getSiteLanguage } from '../functions/language/getSiteLanguage.js';

export class WeatherCard {
    constructor({ weatherDayData, placeData, index }) {
        this.weatherDayData = weatherDayData;
        this.placeData = placeData;
        this.index = index;
        this.isMain = index == 7;
    }
    
    getMainIcon() {
        return getIcon(this.weatherDayData, 'main').outerHTML;
    }

    getWeatherCardElement() {
        const weatherCardDiv = document.createElement('div');
        weatherCardDiv.classList.add('card');
        this.isMain && weatherCardDiv.classList.add('main');
        weatherCardDiv.dataset.index = this.index;
        weatherCardDiv.style.cssText = `transition: 0.5s; transform: translate(-125px)${this.isMain ? ' scale(1.2);' : ';'} `

        weatherCardDiv.innerHTML = `
        
    <div class="card-header">
        <div class="card-day" data-key-text-content-translate="${convertDateStringToWord({ dateString: this.weatherDayData.time })}">${convertDateStringToWord({ dateString: this.weatherDayData.time })}</div>
        <div class="card-date"><time datetime="${this.weatherDayData.time}" data-key-datetime-translate="Date">${this.weatherDayData.time}</time></div>
        <div class="card-place"><span>${this.placeData.translated_display_name}</span></div>
        <div class="card-weather-icon">${this.getMainIcon()}</div>
        <div class="card-weather-text" data-key-text-content-translate="Clear sky (Day)">Clear sky (Day)</div>
        <div class="card-temperature">+11.6°C</div>
    </div>
    <div class="card-hourly">
        <div class="hourly">
            <div class="hourly-icon"><img src="src/icons/animated/clear-night.svg" alt="Clear sky (Night)" title="Clear sky (Night)" aria-label="Clear sky (Night)" data-key-alt-translate="Clear sky (Night)" data-key-arialabel-translate="Clear sky (Night)" data-key-title-translate="Clear sky (Night)"></div>
            <div class="hourly-time" data-key-text-content-translate="Morning time">6 AM</div>
            <div class="hourly-temperature">+4.9°C</div>
        </div>
        <div class="hourly">
            <div class="hourly-icon"><img src="src/icons/animated/clear-day.svg" alt="Clear sky (Day)" title="Clear sky (Day)" aria-label="Clear sky (Day)" data-key-alt-translate="Clear sky (Day)" data-key-arialabel-translate="Clear sky (Day)" data-key-title-translate="Clear sky (Day)"></div>
            <div class="hourly-time" data-key-text-content-translate="Day time">12 AM</div>
            <div class="hourly-temperature">+11.6°C</div>
        </div>
        <div class="hourly">
            <div class="hourly-icon"><img src="src/icons/animated/clear-night.svg" alt="Clear sky (Night)" title="Clear sky (Night)" aria-label="Clear sky (Night)" data-key-alt-translate="Clear sky (Night)" data-key-arialabel-translate="Clear sky (Night)" data-key-title-translate="Clear sky (Night)"></div>
            <div class="hourly-time" data-key-text-content-translate="Evening time">6 PM</div>
            <div class="hourly-temperature">+8.3°C</div>
        </div>
        <div class="hourly">
            <div class="hourly-icon"><img src="src/icons/animated/clear-night.svg" alt="Clear sky (Night)" title="Clear sky (Night)" aria-label="Clear sky (Night)" data-key-alt-translate="Clear sky (Night)" data-key-arialabel-translate="Clear sky (Night)" data-key-title-translate="Clear sky (Night)"></div>
            <div class="hourly-time" data-key-text-content-translate="Night time">12 PM</div>
            <div class="hourly-temperature">+5.8°C</div>
        </div>
    </div>
    <div class="card-footer"><button class="copy-button">
            <div class="material-symbols-outlined">content_copy</div>
        </button>
        <div class="copy-window" data-key-text-content-translate="Copied!">Copied!</div>
    </div>
        `
        function convertDateStringToWord({ dateString }) {
            const language = getSiteLanguage();

            const date = new Date(dateString);
            const todayDate = new Date();
            const yesterdayDate = new Date(Date.now() - 24 * 60 * 60 * 1000)
            const tomorrowDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
            
            const formattedDate = new Intl.DateTimeFormat(language).format(date);
            const formattedTodayDate = new Intl.DateTimeFormat(language).format(todayDate);
            const formattedYesterdayDate = new Intl.DateTimeFormat(language).format(yesterdayDate);
            const formattedTomorrowDate = new Intl.DateTimeFormat(language).format(tomorrowDate);

            if (formattedDate === formattedTodayDate) return 'Today';
            if (formattedDate === formattedYesterdayDate) return 'Yesterday';
            if (formattedDate === formattedTomorrowDate) return 'Tomorrow';
            return {
                0: 'Sunday',
                1: 'Monday',
                2: 'Tuesday',
                3: 'Wednesday',
                4: 'Thursday',
                5: 'Friday',
                6: 'Saturday',
            }[date.getDay()]
        }
        return weatherCardDiv
    }
}