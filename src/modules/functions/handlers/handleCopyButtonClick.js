import { getSiteLanguage } from '../language/getSiteLanguage.js';
import { translations } from '../../data/translation.js';

export function handleCopyButtonClick(event) {
    const language = getSiteLanguage();
    if (event.target.parentNode.tagName == 'BUTTON' && event.target.parentNode.classList.contains('copy-button')) {
        
        const cardElement = (event.target.closest('.card'));

        const copyWindow = event.target.parentNode.nextElementSibling; 

        copyWindow.classList.toggle('visible');

        const copyText = 
        `Weather Around\n
        ${translations[language]['Date copy button']}: ${cardElement.querySelector('.card-day').textContent}, ${cardElement.querySelector('.card-date').textContent}\n
        ${translations[language]['Location copy button']}: ${(cardElement.querySelector('.card-place .place-full') ?? cardElement.querySelector('.card-place span')).textContent}\n
        ${translations[language]['Average Temperature copy button']}: ${cardElement.querySelector('.card-temperature').textContent}\n
        ${translations[language]['Overall Weather copy button']}: ${cardElement.querySelector('.card-weather-text').textContent}\n

        ${translations[language]['Morning (6AM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(1) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(1) .hourly-icon img').title}\n
        ${translations[language]['Day (12PM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(2) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(2) .hourly-icon img').title}\n
        ${translations[language]['Evening (6PM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(3) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(3) .hourly-icon img').title}\n
        ${translations[language]['Night (12AM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(4) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(4) .hourly-icon img').title}\n`;
        
        navigator.clipboard.writeText(copyText);
        
        setTimeout(() => {
            copyWindow.classList.toggle('visible');
        }, 1200)
}
}