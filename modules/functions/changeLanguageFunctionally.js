import switchLanguage from "./switchLanguage.js";
import translate from "./translate.js";

export default function changeLanguageFunctionally(event) {
    localStorage.setItem("currentLanguage", event.target.dataset.lang);
    location.href = window.location.pathname + '#' + (event.target.dataset.lang);
    switchLanguage(event.target.dataset.lang);
    translate(document.body);
}