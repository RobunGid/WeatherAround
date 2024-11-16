'use strict';
import previousButttonClick from "../modules/functions/previousButtonClick.js";

import nextButtonClick from "../modules/functions/nextButtonClick.js";

import domContentLoaded from "../modules/functions/domContentLoaded.js";

import savePlaceInput from "../modules/functions/savePlaceInput.js";

import validatePlaceData from "../modules/functions/validatePlaceData.js";

import functionallyCopyButton from "../modules/functions/functionallyCopyButton.js";

import functionallySearchHistoryButton from "../modules/functions/functionallySearchHistoryButton.js";

import windowLoad from "../modules/functions/windowLoad.js";

// Button to scroll previous card
const previousButton = document.querySelector('#previous-button');
// Button to scroll next card
const nextButton = document.querySelector('#next-button');
// Place input
const placeInput = document.querySelector("#place-input");
// History button
const searchHistoryButton = document.querySelector('#search-history-button')

previousButton.addEventListener('click', previousButttonClick)

nextButton.addEventListener('click', nextButtonClick)

document.addEventListener("DOMContentLoaded", domContentLoaded)

placeInput.addEventListener('input', (event => {
    let timeout = null;
    return function(event) {
        clearTimeout(timeout);
        timeout = setTimeout(validatePlaceData.bind(null, document.querySelector("#place-input").value), 500)
    }
})())

placeInput.addEventListener('input', savePlaceInput);

searchHistoryButton.addEventListener('click', functionallySearchHistoryButton)

document.addEventListener('click', functionallyCopyButton);

window.addEventListener('load', windowLoad);