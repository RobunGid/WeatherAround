import { getSiteLanguage } from "../language/getSiteLanguage.js";

export async function fetchTranslatePlaceListData({ placeListData }) {
    if (!!placeListData && placeListData?.length == 0) return [] 

    const API_LANGUAGES = {
        'ru-RU': 'ru',
        'he-IL': 'iw',
        'en-US': 'en',
        'kk-KZ': 'kk'
    }
    const siteLanguage = getSiteLanguage();
    const formattedSiteLanguage = API_LANGUAGES[siteLanguage];
    
    const placeNames = placeListData.map(placeData => placeData.display_name + '\n').join('');

    const API_URL = `https://translate.plausibility.cloud/api/v1/auto/${formattedSiteLanguage}/${encodeURIComponent(placeNames)}`;

    const response = await fetch(API_URL);
    const { translation } = await response.json();
    const translatedPlaceList = translation.split('\n');

    const translatedPlaceListData = placeListData.map((placeData, index) => ({
        ...placeData, 'translated_display_name': translatedPlaceList[index]
    }))
    return translatedPlaceListData

}