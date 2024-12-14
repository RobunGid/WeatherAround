import {translations} from "./translations.js";
import translateDate from "./translateDate.js";

import translatePlaceData from "./translatePlaceData.js";

import createWeatherCard from "./createWeatherCard.js";

export default async function translatePage(element, isOnlyTextNodes = false) {
    if (!isOnlyTextNodes) {
        if (sessionStorage.getItem('lastWeatherData')) {
            const lastWeatherData = JSON.parse(sessionStorage.getItem('lastWeatherData'));

            const lastWeatherPlaceData = lastWeatherData[0].placeData;

            const translatedLastWeatherPlaceData = await translatePlaceData([lastWeatherPlaceData]);

            const translatedLastWeatherData = lastWeatherData.map(item => {
                item.placeData = translatedLastWeatherPlaceData[0];
                return item;
            })
            createWeatherCard(translatedLastWeatherData);
        }
    }
    

    function getPlaceholderNodes(nodeElement, attribute) {
        let nodes = [];

        function recursive(node) {
            if (node?.dataset?.keyPlaceholderTranslate &&
                node.getAttribute(attribute)
            ) {
                    nodes.push(node);
            }
            node.childNodes.forEach(child => recursive(child));
        }
        recursive(nodeElement);
        return nodes;
    }

    function getIconNodes(nodeElement) {
        let nodes = [];

        function recursive(node) {
            if (node.nodeName === 'IMG' &&
                node.title) {
                    nodes.push(node);
            }
            node.childNodes.forEach(child => recursive(child));
        }
        recursive(nodeElement);
        return nodes;
    }

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
    let placeholderNodes = getPlaceholderNodes(element, 'data-key-placeholder-translate');
    let iconNodes = getIconNodes(element);

    textNodes.forEach(node => {
        node.textContent = translations[lang][node.parentNode.dataset.keyTextContentTranslate];
    })

    dateNodes.forEach(node => {
        node.textContent = translateDate(node.parentNode.getAttribute("datetime"));
    })

    placeholderNodes.forEach(node => {
        node.setAttribute('placeholder', translations[lang][node.dataset.keyPlaceholderTranslate])
    })

    iconNodes.forEach(node => {
        node.setAttribute('alt', translations[lang][node.dataset.keyAltTranslate]);
        node.setAttribute('aria-label', translations[lang][node.dataset.keyArialabelTranslate]);
        node.setAttribute('title', translations[lang][node.dataset.keyTitleTranslate]);
    })
}