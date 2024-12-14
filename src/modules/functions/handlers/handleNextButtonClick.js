export function handleNextButtonClick(event) {
    const previousButtonElement = document.querySelector('#previous-button');
    const nextButtonElement = document.querySelector('#next-button');
    const currentCardElement = document.querySelector('.main');
    const allCardsElements = document.querySelectorAll('.card');
    const cardSize = 250;

    const currentCardIndex = currentCardElement.dataset.index;
    const newTranslateValue = -cardSize * (currentCardIndex - 5) + 125;

    if (currentCardElement.dataset.index == allCardsElements.length - 2) {
        nextButtonElement.classList.add('dis');
    } else {
        previousButtonElement.classList.remove('dis');
    }
    if (currentCardElement.dataset.index == allCardsElements.length - 1) return;

    allCardsElements.forEach(cardElement => cardElement.style.transform = `translate(${newTranslateValue}px)`);

    currentCardElement.classList.remove('main');

    const newCurrentCard = allCardsElements[parseInt(currentCardIndex) + 1];
    
    newCurrentCard.classList.toggle('main');
    newCurrentCard.style.transform = (`${newCurrentCard.style.transform} scale(1.2)`);

}