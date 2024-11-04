export default function copyButtonFunctionally(event) {
    if (event.target.parentNode.tagName == 'BUTTON' && event.target.parentNode.classList.contains('copy-button')) {
        const cardElement = (event.target.closest('.card'));

        const copyWindow = event.target.parentNode.nextElementSibling; 
        copyWindow.classList.toggle('visible');

        const copyText = 
`Weather Around\n
Date: ${cardElement.querySelector('.card-day').textContent}, ${cardElement.querySelector('.card-date').textContent}\n
Location: ${(cardElement.querySelector('.card-place .place-full') ?? cardElement.querySelector('.card-place span')).textContent}\n
Average Temperature: ${cardElement.querySelector('.card-temperature').textContent}\n
Overall Weather: ${cardElement.querySelector('.card-weather-text').textContent}\n

Morning (6AM): ${cardElement.querySelector('.card-hourly .hourly:nth-child(1) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(1) .hourly-icon img').title}\n
Day (12PM): ${cardElement.querySelector('.card-hourly .hourly:nth-child(2) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(2) .hourly-icon img').title}\n
Evening (6PM): ${cardElement.querySelector('.card-hourly .hourly:nth-child(3) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(3) .hourly-icon img').title}\n
Night (12AM): ${cardElement.querySelector('.card-hourly .hourly:nth-child(4) .hourly-temperature').textContent}, ${cardElement.querySelector('.hourly:nth-child(4) .hourly-icon img').title}\n`;
        
        console.log(copyText)
        navigator.clipboard.writeText(copyText)
        
        setTimeout(() => {
            copyWindow.classList.toggle('visible');
        }, 1200)
}
}