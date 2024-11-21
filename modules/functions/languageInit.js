import switchLanguage from './switchLanguage.js';

import translatePage from './translatePage.js';

export default function languageInit() {
    const siteLanguages = Array.from(document.querySelectorAll('[data-lang]')).map(element => element.dataset.lang);

    const hashLang = window.location.hash;

    const localStorageLang = localStorage.getItem("currentLanguage");

    const userLanguage = siteLanguages.find(element => element.startsWith(navigator.language));
    console.log(userLanguage)

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