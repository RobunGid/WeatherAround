export default function previousButttonClick(event) {
    // Button to scroll previous card
    const previousButton = document.querySelector('#previous-button');
    // Button to scroll next card
    const nextButton = document.querySelector('#next-button');

    let currentCard = document.querySelector('.big');

    if (currentCard.previousElementSibling.classList.contains('card')) {
    currentCard.previousElementSibling.classList.toggle('big');
    currentCard.classList.toggle('big');

    document.querySelectorAll('.card').forEach(item => {
        let curTranslate = parseInt(item.style.transform.match(/-?\d+/)[0]);
        item.style.transform = `translate(${curTranslate + 250}px)`;
        
    })

    document.querySelector('.big').style.transform += ' scale(1.2)';

    }

    if (!(currentCard.previousElementSibling.previousElementSibling.previousElementSibling)) {
        previousButton.classList.add('dis');
    } else {
        nextButton.classList.remove('dis');
    }

    if (!(currentCard.previousElementSibling.previousElementSibling)) {
        nextButton.classList.remove('dis');
    } 

}