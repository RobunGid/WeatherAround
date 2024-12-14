'use strict';

import { handleNextButtonClick } from "../modules/functions/handlers/handleNextButtonClick.js";
import { handlePreviousButtonClick } from "../modules/functions/handlers/handlePreviousButtonClick.js";
import { handleSwitchLanguageButtonClick } from "../modules/functions/handlers/handleSwitchLanguageButtonClick.js";
import { switchLanguage } from "../modules/functions/language/switchLanguage.js";

const previousButtonElement = document.querySelector("#previous-button");
const nextButtonElement = document.querySelector("#next-button");

const languagePickerElement = document.querySelector('#language-picker');

previousButtonElement.addEventListener('click', handlePreviousButtonClick);
nextButtonElement.addEventListener('click', handleNextButtonClick);

languagePickerElement.addEventListener('click', handleSwitchLanguageButtonClick)

document.addEventListener('DOMContentLoaded', switchLanguage)

