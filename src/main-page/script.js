'use strict';

import { handleNextButtonClick } from "../modules/functions/handlers/handleNextButtonClick.js";
import { handlePlaceInput } from "../modules/functions/handlers/handlePlaceInput.js";
import { handlePreviousButtonClick } from "../modules/functions/handlers/handlePreviousButtonClick.js";
import { handleSwitchLanguageButtonClick } from "../modules/functions/handlers/handleSwitchLanguageButtonClick.js";
import { initPlaceList } from "../modules/functions/inits/initPlaceList.js";
import { handleSavePlaceInput } from '../modules/functions/handlers/handleSavePlaceInput.js'
import { initSiteLanguage } from "../modules/functions/inits/initSiteLanguage.js";
import { initPlaceHover } from "../modules/functions/inits/initPlaceHover.js";

const previousButtonElement = document.querySelector("#previous-button");
const nextButtonElement = document.querySelector("#next-button");

const languagePickerElement = document.querySelector('#language-picker');

const placeInputElement = document.querySelector('#place-input');

previousButtonElement.addEventListener('click', handlePreviousButtonClick);
nextButtonElement.addEventListener('click', handleNextButtonClick);

languagePickerElement.addEventListener('click', handleSwitchLanguageButtonClick);

document.addEventListener('DOMContentLoaded', initSiteLanguage);
document.addEventListener('DOMContentLoaded', initPlaceList);

placeInputElement.addEventListener('input', (event => {
    let timeout = null;
    return function(event) {
        clearTimeout(timeout);
        timeout = setTimeout(handlePlaceInput.bind(null, event), 500)
    }
})())

placeInputElement.addEventListener('input', handleSavePlaceInput)

