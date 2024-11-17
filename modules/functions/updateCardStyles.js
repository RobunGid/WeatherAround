import updateCardSearchHistory from "./updateCardSearchHistory.js";

export default function updateCardStyle() {
    // Button to scroll previous card
    const previousButton = document.querySelector('#previous-button');
    // Button to scroll next card
    const nextButton = document.querySelector('#next-button');

    updateCardSearchHistory()

    if (document.querySelector('.card')) {
    document.querySelectorAll('.card').forEach(item => {
        const bigCardIndex = Array.from(document.querySelectorAll('.card')).findIndex(element => element.classList.contains('big')) - 1
        if (document.querySelectorAll('.card').length === 1) {
            item.style.transform = `translate(${0}px)`
        } else if (document.querySelectorAll('.card').length === 2) {
            item.style.transform = `translate(${-125 + bigCardIndex * 250}px)`;
        } else if (document.querySelectorAll('.card').length === 3) {
            item.style.transform = `translate(${0 + bigCardIndex * 250}px)`;
        } else if (!(document.querySelectorAll('.card').length & 1)) {
            item.style.transform = `translate(${125 - (bigCardIndex - 5) * 250}px)`;
        } else {
            item.style.transform = `translate(${250 - (bigCardIndex - 5) * 250}px)`;
        }


        setTimeout(() => item.style.transition = '.5s all');
    })
    document.querySelector('.big').style.transform += ' scale(1.2)';
    
    if (!(document.querySelector('.big').previousElementSibling)) {
        previousButton.classList.add('dis');
    } else {
        nextButton.classList.remove('dis')
    }

    if (!(document.querySelector('.big').nextElementSibling)) {
        nextButton.classList.add('dis')
    } else {
        previousButton.classList.remove('dis')
    }

    document.querySelectorAll('.place-full').forEach(item => {
        item.style.display = 'initial';
        item.nextElementSibling.style.height = item.getBoundingClientRect().height + 50 + 'px';
        item.style.display = '';
    })
} else {
    previousButton.classList.add('dis');
    nextButton.classList.add('dis');
}

}