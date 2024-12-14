import { switchLanguage } from "../language/switchLanguage.js";

export function handleSwitchLanguageButtonClick(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName !== 'A') return;

    switchLanguage({ language: clickedElement.dataset.lang })
}