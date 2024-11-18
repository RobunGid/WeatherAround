import switchLanguage from "./switchLanguage.js";

export default function changeLanguageFunctionally(event) {
    location.href = window.location.pathname + '#' + (event.target.dataset.lang);
    switchLanguage(event.target.dataset.lang);
}