export default function switchLanguage(lang) {
    const currentLangElement = document.querySelector("#selected-language");
    const selectedLangElement = document.querySelector(`[data-lang='${lang}']`);

    [currentLangElement.dataset.lang, selectedLangElement.dataset.lang] = [selectedLangElement.dataset.lang, currentLangElement.dataset.lang];
    [selectedLangElement.textContent, currentLangElement.textContent] = [currentLangElement.textContent, selectedLangElement.textContent];
    [currentLangElement.dataset.keyTextContentTranslate, selectedLangElement.dataset.keyTextContentTranslate] = [selectedLangElement.dataset.keyTextContentTranslate, currentLangElement.dataset.keyTextContentTranslate]
}