import { translations } from "../../data/translation.js";
import { getSiteLanguage } from "./getSiteLanguage.js";

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



    function translateDate({ dateString }) {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 1);
        const formattedDate = new Intl.DateTimeFormat(language, {
            year: 'numeric',
            month: 'numeric', 
            day: 'numeric'
        }).format(date);
        return formattedDate;
    }

}