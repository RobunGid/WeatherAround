import switchLanguage from './switchLanguage.js';

import translatePage from './translatePage.js';

export default function languageInit() {
    const siteLanguages = Array.from(document.querySelectorAll('[data-lang]')).map(element => element.dataset.lang);

    const hashLang = window.location.hash.substring(1, 3); 

    const localStorageLang = localStorage.getItem("currentLanguage");

    const userLanguage = navigator.language;

    let newLanguage;

    if (hashLang && siteLanguages.includes(hashLang)) {
        newLanguage = hashLang;
    } else if (localStorageLang && siteLanguages.includes(localStorageLang)) {
        newLanguage = localStorageLang;
    } else if (userLanguage) {
        newLanguage = userLanguage;
    } else {
        newLanguage = 'en';
    }

    switchLanguage(newLanguage);
    localStorage.setItem("currentLanguage", newLanguage);
    translatePage(document.body);
}