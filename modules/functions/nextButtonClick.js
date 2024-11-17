export default function nextButtonClick(event) {
    // Button to scroll previous card
    const previousButton = document.querySelector('#previous-button');
    // Button to scroll next card
    const nextButton = document.querySelector('#next-button');

    let currentCard = document.querySelector('.big');

    if (currentCard.nextElementSibling.classList.contains('card')) {
    currentCard.nextElementSibling.classList.toggle('big');
    currentCard.classList.toggle('big');

    document.querySelectorAll('.card').forEach(item => {
        let curTranslate = parseInt(item.style.transform.match(/-?\d+/)[0])
        item.style.transform = `translate(${curTranslate - 250}px)`;
    
    })

    document.querySelector('.big').style.transform += ' scale(1.2)';

    }

    if (!(currentCard.nextElementSibling.nextElementSibling)) {
        nextButton.classList.add('dis');
    } else {
        previousButton.classList.remove('dis');
    }
    
    if (!(currentCard.nextElementSibling.nextElementSibling)) {
        previousButton.classList.remove('dis');
    }


}