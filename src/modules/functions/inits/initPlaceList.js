import { createPlaceListButtons } from "../ui/createPlaceListButtons.js";

export function initPlaceList() {
    const placeInputElement = document.querySelector('#place-input');

    if (sessionStorage.getItem('placeInputValue')) {
        placeInputElement.value = sessionStorage.getItem('placeInputValue');
    }

    if (sessionStorage.getItem('placeListData')) {
        createPlaceListButtons({ placeListData: JSON.parse(sessionStorage.getItem('placeListData')) });
    }
}