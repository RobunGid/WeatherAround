import { translations } from "./translations.js";

export default function copyButtonFunctionally(event, lang) {
    if (!lang) {
        if (localStorage.getItem('currentLanguage')) {
            lang = localStorage.getItem('currentLanguage');
        } else {
            lang = document.querySelector("#language-picker button").getAttribute('data-lang');
        }
    }
    if (event.target.parentNode.tagName == 'BUTTON' && event.target.parentNode.classList.contains('copy-button')) {
        const cardElement = (event.target.closest('.card'));

        const copyWindow = event.target.parentNode.nextElementSibling; 
        copyWindow.classList.toggle('visible');

        const copyText = 
`Weather Around\n
${translations[lang]['Date copy button']}: ${cardElement.querySelector('.card-day').textContent}, ${cardElement.querySelector('.card-date').textContent}\n
${translations[lang]['Location copy button']}: ${(cardElement.querySelector('.card-place .place-full') ?? cardElement.querySelector('.card-place span')).textContent}\n
${translations[lang]['Average Temperature copy button']}: ${cardElement.querySelector('.card-temperature').textContent}\n
${translations[lang]['Overall Weather copy button']}: ${cardElement.querySelector('.card-weather-text').textContent}\n

${translations[lang]['Morning (6AM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(1) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(1) .hourly-icon img').title}\n
${translations[lang]['Day (12PM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(2) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(2) .hourly-icon img').title}\n
${translations[lang]['Evening (6PM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(3) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(3) .hourly-icon img').title}\n
${translations[lang]['Night (12AM) copy button']}: ${cardElement.querySelector('.card-hourly .hourly:nth-child(4) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(4) .hourly-icon img').title}\n`;
        
        navigator.clipboard.writeText(copyText);
        
        setTimeout(() => {
            copyWindow.classList.toggle('visible');
        }, 1200)
}
}