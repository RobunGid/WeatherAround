import retrieveWeatherData from "./retrieveWeatherData.js";

export default async function createPlaceButtons(placeList, isSearchHistory = false, translate = false, lang = document.querySelector("#language-picker button").getAttribute('data-lang')) {
    if (isSearchHistory) {
        if (document.querySelector('#search-history-option-container li')) {
            document.querySelectorAll('#search-history-option-container li').forEach(item => item.remove())
        }
        for (let place of placeList) {
            let placeLi = document.createElement('li');
            let placeButton = document.createElement('button');
    
            placeLi.classList.toggle('place-option');
            placeButton.type = 'button';
            placeButton.classList.toggle('place-option-button');
    
            placeButton.textContent = place.display_name;
    
            placeButton.addEventListener('click', retrieveWeatherData.bind(null, place));
    
            placeLi.append(placeButton);
    
            document.querySelector('#search-history-option-container').append(placeLi);

        }
    }



    if (!isSearchHistory) {
        for (let place of placeList) {
            let placeLi = document.createElement('li');
            let placeButton = document.createElement('button');

            placeLi.classList.toggle('place-option');
            placeButton.type = 'button';
            placeButton.classList.toggle('place-option-button');

            placeButton.textContent = place.display_name;

            placeButton.addEventListener('click', retrieveWeatherData.bind(null, place));

            placeLi.append(placeButton);

            document.querySelector('#place-option-container').append(placeLi);
    }
    }
}
