export function getSiteLanguage(event) {
    const siteLanguages = Array.from(document.querySelectorAll('[data-lang]')).map(element => element.dataset.lang);

    const hashLanguageFull = window.location.hash;
    const hashLanguage = hashLanguageFull.substring(1)

    const localStorageLanguage = localStorage.getItem("currentLanguage");

    const userLanguage = siteLanguages.find(element => element.startsWith(navigator.language));

    const defaultLanguage = 'en-US';

    const siteLanguage = siteLanguages.includes(hashLanguage) && hashLanguage || 
    siteLanguages.includes(localStorageLanguage) && localStorageLanguage || 
    siteLanguages.includes(userLanguage) && userLanguage || 
    defaultLanguage;

    return siteLanguage
}