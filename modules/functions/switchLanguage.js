export default function switchLanguage(lang) {
    const currentLangElement = document.querySelector("#selected-language");
    const selectedLangElement = document.querySelector(`[data-lang='${lang}']`);

    [currentLangElement.dataset.lang, selectedLangElement.dataset.lang] = [selectedLangElement.dataset.lang, currentLangElement.dataset.lang];
    [selectedLangElement.textContent, currentLangElement.textContent] = [currentLangElement.textContent, selectedLangElement.textContent];
    [currentLangElement.dataset.keyTranslate, selectedLangElement.dataset.keyTranslate] = [selectedLangElement.dataset.keyTranslate, currentLangElement.dataset.keyTranslate]
}