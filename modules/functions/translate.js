import {translations} from "./translations.js";

export default function translate(element) {
    function getTextNodes() {
        let textNodes = [];

        function recursive(node) {
            if (node.nodeType === Node.TEXT_NODE && 
                node.textContent.trim() !== '' && 
                node.parentNode.getAttribute('data-key-translate')) {
            textNodes.push(node);
            }
            node.childNodes.forEach(child => recursive(child));
        }
        recursive(element);
        return textNodes;
    }

    let textNodes = getTextNodes(element);

    const currentLanguage = localStorage.getItem("currentLanguage")

    textNodes.forEach(node => {
        node.textContent = translations[currentLanguage][node.parentNode.dataset.keyTranslate];
    })
}