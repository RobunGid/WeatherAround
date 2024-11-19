import updateCardStyles from "./updateCardStyles.js";

import getDayOfWeek from "./getDayOfWeek.js";

import normalizeCardDate from "./normalizeCardDate.js";

import normalizeCardPlace from "./normalizeCardPlace.js";

import normalizeCardTemperature from "./normalizeCardTemperature.js";

import getIcon from "./getIcon.js";

export default function createWeatherCard(weatherData) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    container.innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
    
    
    
    for (let weatherDayData of weatherData) {
        // Get info variables
        const currentDayOfWeek = getDayOfWeek(weatherDayData.date);
        const currentMainIcon = getIcon(weatherDayData);
        const currentNormalizedCardDate = normalizeCardDate(weatherDayData.date);
        const currentNormalizedCardTemperature = normalizeCardTemperature(weatherDayData.dayWeather.temperature_2m, weatherDayData.units.temperature_2m);
        const currentNormalizedCardPlace = normalizeCardPlace(weatherDayData.placeData.display_name);


        // Main card element
        const cardDiv = document.createElement('div');
        cardDiv.dataset.index = weatherData.indexOf(weatherDayData) + 1;
        cardDiv.classList.toggle('card')

        // Creating header, hourly, footer elements
        const cardHeaderDiv = document.createElement('div');
        cardHeaderDiv.classList.toggle('card-header');
        const cardHourlyDiv = document.createElement('div');
        cardHourlyDiv.classList.toggle('card-hourly');
        const cardFooterDiv = document.createElement('div');
        cardFooterDiv.classList.toggle('card-footer');

        // Creating every header elements
        const cardDayDiv = document.createElement('div');
        cardDayDiv.classList.toggle('card-day');
        cardDayDiv.textContent = currentDayOfWeek;
        cardDayDiv.setAttribute('data-key-text-content-translate', currentDayOfWeek);

        const cardDateDiv = document.createElement('div');
        cardDateDiv.classList.toggle('card-date');
        const cardDateTime = document.createElement('time');
        cardDateTime.textContent = currentNormalizedCardDate;
        cardDateTime.dateTime = weatherDayData.datetime;
        cardDateTime.setAttribute("data-key-datetime-translate", "Date")
        cardDateDiv.append(cardDateTime);

        const cardPlaceDiv = document.createElement('div');
        cardPlaceDiv.classList.toggle('card-place');

        if (currentNormalizedCardPlace != weatherDayData.placeData.display_name) {

        const placeBlurContainer = document.createElement('div');
        placeBlurContainer.classList.add('place-blur-container')

        const placePartSpan = document.createElement('span');
        placePartSpan.textContent = currentNormalizedCardPlace;
        placePartSpan.classList.add('place-part');

        const placeFullSpan = document.createElement('span');
        placeFullSpan.textContent = weatherDayData.placeData.display_name;
        placeFullSpan.classList.add('place-full')

        cardPlaceDiv.append(placePartSpan);
        cardPlaceDiv.append(placeFullSpan);
        cardPlaceDiv.append(placeBlurContainer);

        } else {

            const placeSpan = document.createElement('span');
            placeSpan.textContent = weatherDayData.placeData.display_name;

            cardPlaceDiv.append(placeSpan);

        }

        const cardWeatherIconDiv = document.createElement('div');
        cardWeatherIconDiv.classList.toggle('card-weather-icon');
        cardWeatherIconDiv.append(currentMainIcon)

        const cardWeatherTextDiv = document.createElement('div');
        cardWeatherTextDiv.classList.toggle('card-weather-text');
        cardWeatherTextDiv.textContent = cardWeatherIconDiv.firstElementChild.alt;

        const cardTemperatureDiv = document.createElement('div');
        cardTemperatureDiv.classList.toggle('card-temperature');
        cardTemperatureDiv.textContent = currentNormalizedCardTemperature;

        // Append header elements into header
        cardHeaderDiv.append(cardDayDiv);
        cardHeaderDiv.append(cardDateDiv);
        cardHeaderDiv.append(cardPlaceDiv);
        cardHeaderDiv.append(cardWeatherIconDiv);
        cardHeaderDiv.append(cardWeatherTextDiv);
        cardHeaderDiv.append(cardTemperatureDiv);

        // Append headerDiv into cardDiv
        cardDiv.append(cardHeaderDiv)

        // Creating every hourly elements
        const hourlyElements = [];

        const dayParts = [['morning', '6 AM'], ['day', '12 PM'], ['evening', '6 PM'], ['night', '12 AM']];

        for (const part of dayParts) {
            let hourlyDiv = document.createElement('div');
            hourlyDiv.classList.add('hourly');

            const hourlyIconDiv = document.createElement('div');
            hourlyIconDiv.classList.add('hourly-icon');
            hourlyIconDiv.append(getIcon(weatherDayData, part[0]));

            const hourlyTimeDiv = document.createElement('div');
            hourlyTimeDiv.classList.add('hourly-time');
            hourlyTimeDiv.textContent = part[1];
            hourlyTimeDiv.setAttribute("data-key-text-content-translate", part[0][0].toUpperCase() + part[0].substring(1, part[0].length) + " time");

            const hourlyTemperatureDiv = document.createElement('div');
            hourlyTemperatureDiv.classList.add('hourly-temperature');
            hourlyTemperatureDiv.textContent = normalizeCardTemperature(weatherDayData[`${part[0]}Weather`].temperature_2m, weatherDayData.units.temperature_2m);
            hourlyDiv.append(hourlyIconDiv);
            hourlyDiv.append(hourlyTimeDiv);
            hourlyDiv.append(hourlyTemperatureDiv);

            hourlyElements.push(hourlyDiv)
        }

        for (const hourlyItem of hourlyElements) {
            cardHourlyDiv.append(hourlyItem)
        }

        // Append hourlyDiv into cardDiv
        cardDiv.append(cardHourlyDiv)

        // Creating every footer elements
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');

        const copyIcon = document.createElement('div');
        copyIcon.classList.add('material-symbols-outlined');
        copyIcon.textContent = 'content_copy';

        copyButton.append(copyIcon);

        const copyWindowDiv = document.createElement('div');
        copyWindowDiv.classList.add('copy-window');
        copyWindowDiv.textContent = 'Copied!'

        cardFooterDiv.append(copyButton);
        cardFooterDiv.append(copyWindowDiv);
        
        cardDiv.append(cardFooterDiv)

        // Append main cardDiv into container
        container.append(cardDiv)

        // Make today weather card big
        if (currentDayOfWeek == 'Today') {
            cardDiv.classList.add('big')
        }
    }
    updateCardStyles();
}