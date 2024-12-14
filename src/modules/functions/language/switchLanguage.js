import { getSiteLanguage } from './getSiteLanguage.js'

export function switchLanguage({ language }) {
    const siteLanguage = language || getSiteLanguage();

    const currentLangElement = document.querySelector('#selected-language');
    const selectedLangElement = document.querySelector(`[data-lang='${siteLanguage}']`);

    [currentLangElement.dataset.lang, selectedLangElement.dataset.lang] = [selectedLangElement.dataset.lang, currentLangElement.dataset.lang];
    [selectedLangElement.textContent, currentLangElement.textContent] = [currentLangElement.textContent, selectedLangElement.textContent];
    [currentLangElement.dataset.keyTextContentTranslate, selectedLangElement.dataset.keyTextContentTranslate] = [selectedLangElement.dataset.keyTextContentTranslate, currentLangElement.dataset.keyTextContentTranslate];

    localStorage.setItem('currentLanguage', siteLanguage);

    location.href = window.location.pathname + '#' + siteLanguage;

}