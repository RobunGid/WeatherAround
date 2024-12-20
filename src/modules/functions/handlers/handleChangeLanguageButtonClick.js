import { switchLanguage } from "../language/switchLanguage.js";

export function handleChangeLanguageButtonClick(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName !== 'A') return;

    switchLanguage({ language: clickedElement.dataset.lang });
    
    sessionStorage.removeItem('placeInputValue');
    sessionStorage.removeItem('placeListData');
    localStorage.removeItem('lastPlaceData');

    location.reload();
}