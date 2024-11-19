import {translations} from "./translations.js";
import translateDate from "./translateDate.js";

export default function translate(element, lang = document.querySelector("#language-picker button").getAttribute('data-lang')) {
    function getNodes(nodeElement, attribute) {
        let nodes = [];

        function recursive(node) {
            if (node.nodeType === Node.TEXT_NODE && 
                node.textContent.trim() !== '' && 
                node.parentNode.getAttribute(attribute)) {
            nodes.push(node);
            }
            node.childNodes.forEach(child => recursive(child));
        }
        recursive(nodeElement);
        return nodes;
    }

    let textNodes = getNodes(element, 'data-key-text-content-translate');
    let dateNodes = getNodes(element, 'data-key-datetime-translate');

    textNodes.forEach(node => {
        node.textContent = translations[lang][node.parentNode.dataset.keyTextContentTranslate];
    })

    dateNodes.forEach(node => {
        node.textContent = translateDate(node.parentNode.getAttribute("datetime"));
    })
}