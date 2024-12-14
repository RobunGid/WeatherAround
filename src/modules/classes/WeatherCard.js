import { getIcon } from '../functions/getIcon.js'
import { formatDayOfTheWeek } from "../functions/formatDayOfTheWeek.js";
import { formatShortCardPlace } from '../functions/formatShortCardPlace.js';

export class WeatherCard {
    constructor({ weatherDayData, placeData, index }) {
        this.weatherDayData = weatherDayData;
        this.placeData = placeData;
        this.index = index;
        this.isMain = index == 7;
    }
    
    getMainIcon() {
        return getIcon(this.weatherDayData, 'main');
    }
    getMorningIcon() {
        return getIcon(this.weatherDayData, 'morning');
    }
    getDayIcon() {
        return getIcon(this.weatherDayData, 'day');
    }
    getEveningIcon() {
        return getIcon(this.weatherDayData, 'evening');
    }
    getNightIcon() {
        return getIcon(this.weatherDayData, 'night');
    }

    getWeatherCardElement() {
        const dayOfTheWeek = formatDayOfTheWeek({ dateString: this.weatherDayData.time });

        const shortCardPlace = formatShortCardPlace({ placeName: this.placeData.translated_display_name });
        const fullPlaceName = this.placeData.translated_display_name;

        const mainTemperature = (this.weatherDayData.temperature_2m_min + this.weatherDayData.temperature_2m_min) / 2 + '°C';
        const morningTemperature = this.weatherDayData.hourly.temperature_2m[6] + '°C';
        const dayTemperature = this.weatherDayData.hourly.temperature_2m[12] + '°C';
        const eveningTemperature = this.weatherDayData.hourly.temperature_2m[18] + '°C';
        const nightTemperature = this.weatherDayData.hourly.temperature_2m[24] + '°C';

        const mainIcon = this.getMainIcon();
        const morningIcon = this.getMorningIcon();
        const dayIcon = this.getDayIcon();
        const eveningIcon = this.getEveningIcon();
        const nightIcon = this.getNightIcon();

        const cardWeatherText = mainIcon.title;

        const weatherCardDiv = document.createElement('div');
        weatherCardDiv.classList.add('card');

        this.isMain && weatherCardDiv.classList.add('main');

        weatherCardDiv.dataset.index = this.index;

        weatherCardDiv.style.cssText = `transition: 0.5s; transform: translate(-125px)${this.isMain ? ' scale(1.2);' : ';'} `

        weatherCardDiv.innerHTML = `
        
    <div class="card-header">
        <div class="card-day" data-key-text-content-translate="${dayOfTheWeek}">${dayOfTheWeek}</div>
        <div class="card-date"><time datetime="${this.weatherDayData.time}" data-key-datetime-translate="Date">${this.weatherDayData.time}</time></div>
        <div class="card-place">
                <span class="place-part">${shortCardPlace}</span>
                <span class="place-full">${fullPlaceName}</span>
                <div class="place-blur-container" style="height: 90px;"></div>
        </div>
        <div class="card-weather-icon">${mainIcon.outerHTML}</div>
        <div class="card-weather-text" data-key-text-content-translate="${cardWeatherText}">${cardWeatherText}</div>
        <div class="card-temperature">${mainTemperature}</div>
    </div>
    <div class="card-hourly">
        <div class="hourly">
            <div class="hourly-icon">${morningIcon.outerHTML}</div>
            <div class="hourly-time" data-key-text-content-translate="Morning time">6 AM</div>
            <div class="hourly-temperature">${morningTemperature}</div>
        </div>
        <div class="hourly">
            <div class="hourly-icon">${dayIcon.outerHTML}</div>
            <div class="hourly-time" data-key-text-content-translate="Day time">12 AM</div>
            <div class="hourly-temperature">${dayTemperature}</div>
        </div>
        <div class="hourly">
            <div class="hourly-icon">${eveningIcon.outerHTML}</div>
            <div class="hourly-time" data-key-text-content-translate="Evening time">6 PM</div>
            <div class="hourly-temperature">${eveningTemperature}</div>
        </div>
        <div class="hourly">
            <div class="hourly-icon">${nightIcon.outerHTML}</div>
            <div class="hourly-time" data-key-text-content-translate="Night time">12 PM</div>
            <div class="hourly-temperature">${nightTemperature}</div>
        </div>
    </div>
    <div class="card-footer"><button class="copy-button">
            <div class="material-symbols-outlined">content_copy</div>
        </button>
        <div class="copy-window" data-key-text-content-translate="Copied!">Copied!</div>
    </div>
        `
        
        return weatherCardDiv;
    }
}