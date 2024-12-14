import { handlePlaceOptionButtonClick } from "../handlers/handlePlaceOptionButtonClick.js";

export function createPlaceListButtons({ placeListData, isSearchHistory }) {
    isSearchHistory 
    ? document.querySelector('#search-history-option-container').innerHTML = ''
    : document.querySelector('#place-option-container').innerHTML = '';
    placeListData.forEach(placeData => {
        const placeOptionLi = document.createElement('li');

        placeOptionLi.classList.add('place-option');

        const placeOptionButton = document.createElement('button');
        placeOptionButton.classList.toggle('place-option-button');
        placeOptionButton.type = 'button';
        placeOptionButton.textContent = placeData.translated_display_name;
        placeOptionButton.addEventListener('click', handlePlaceOptionButtonClick.bind(null, {placeData}))

        placeOptionLi.append(placeOptionButton);

        isSearchHistory 
        ? document.querySelector('#search-history-option-container').append(placeOptionLi)
        : document.querySelector('#place-option-container').append(placeOptionLi);
    })

}