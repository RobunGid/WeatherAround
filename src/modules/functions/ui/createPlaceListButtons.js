export function createPlaceListButtons({ placeListData }) {

    placeListData.forEach(placeData => {
        const placeOptionLi = document.createElement('li');

        placeOptionLi.classList.add('place-option');

        const placeOptionButton = document.createElement('button');
        placeOptionButton.classList.toggle('place-option-button');
        placeOptionButton.type = 'button';
        placeOptionButton.textContent = placeData.translated_display_name

        placeOptionLi.append(placeOptionButton);

        document.querySelector('#place-option-container').append(placeOptionLi);
    })

}