import languageInit from "./languageInit.js";

export default function load() {
    const loadingMask = document.querySelector('#mask');

    loadingMask.classList.toggle('hidden');

    languageInit();
}