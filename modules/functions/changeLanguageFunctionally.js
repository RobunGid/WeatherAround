import switchLanguage from "./switchLanguage.js";
import translatePage from "./translatePage.js";

export default function changeLanguageFunctionally(event) {
    localStorage.setItem("currentLanguage", event.target.dataset.lang);
    location.href = window.location.pathname + '#' + (event.target.dataset.lang);
    switchLanguage(event.target.dataset.lang);
    location.reload();
}