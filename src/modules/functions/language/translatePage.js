import { translations } from "../../data/translation.js";
import { initPlaceHover } from "../inits/initPlaceHover.js";
import { translateDate } from "./translateDate.js";

export function translatePage({ language }) {
    const translatableTextNodes = getTextNodes({ element: document });
    const translatableDateNodes = getDateNodes({ element: document });
    const translatablePlaceholderNodes = getPlaceholderNodes({ element: document });
    const translatableIconNodes = getIconNodes({ element: document })

    translatableTextNodes.forEach(node => node.textContent = translations[language][node.parentNode.dataset.keyTextContentTranslate]);
    translatableDateNodes.forEach(node => node.textContent = translateDate({ dateString: node.parentNode.getAttribute("datetime")}));
    translatablePlaceholderNodes.forEach(node => node.setAttribute('placeholder', translations[language][node.dataset.keyPlaceholderTranslate]));
    translatableIconNodes.forEach(node => {
        node.setAttribute('alt', translations[language][node.dataset.keyAltTranslate]);
        node.setAttribute('aria-label', translations[language][node.dataset.keyArialabelTranslate]);
        node.setAttribute('title', translations[language][node.dataset.keyTitleTranslate]);
    })

    initPlaceHover();

    function getTextNodes({ element }) {
        let nodes = [];

        function recursive(node) {
            if (node.nodeType === Node.TEXT_NODE && 
                node.parentNode.getAttribute('data-key-text-content-translate')) {
                    nodes.push(node);
            }
            node.childNodes.forEach(child => recursive(child));
        }
        recursive(element);
        return nodes;
    }



    function getDateNodes({ element }) {
        let nodes = [];

        function recursive(node) {
            if (node.nodeType === Node.TEXT_NODE && 
                node.parentNode.getAttribute('data-key-datetime-translate')) {
                    nodes.push(node);
            }
            node.childNodes.forEach(child => recursive(child));
        }
        recursive(element);
        return nodes;
    }



    function getPlaceholderNodes({ element }) {
            let nodes = [];
    
            function recursive(node) {
                if (node?.dataset?.keyPlaceholderTranslate &&
                    node.getAttribute('data-key-placeholder-translate')
                ) {
                        nodes.push(node);
                }
                node.childNodes.forEach(child => recursive(child));
            }
            recursive(element);
            return nodes;
        
    }



    function getIconNodes({ element }) {
        let nodes = [];

        function recursive(node) {
            if (node.nodeName === 'IMG' &&
                node.title) {
                    nodes.push(node);
            }
            node.childNodes.forEach(child => recursive(child));
        }
        recursive(element);
        return nodes;
    }

}