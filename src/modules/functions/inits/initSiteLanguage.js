import { getSiteLanguage } from "../language/getSiteLanguage.js";
import { switchLanguage } from "../language/switchLanguage.js";
import { translatePage } from "../language/translatePage.js";

export function initSiteLanguage() {
    const siteLanguage = getSiteLanguage();
    switchLanguage({ language: siteLanguage });
    translatePage({ language: siteLanguage })
}