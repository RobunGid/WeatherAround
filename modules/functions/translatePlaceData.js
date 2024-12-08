export default async function translatePlaceData(placeData, lang) {
    if (!lang) {
        if (localStorage.getItem('currentLanguage')) {
            lang = localStorage.getItem('currentLanguage');
        } else {
            lang = document.querySelector("#language-picker button").getAttribute('data-lang');
        }
    }
    lang = lang.length > 2 ? lang.substring(0, 2) : lang;
    if (lang === 'he') lang = 'iw';
    let placesDisplayNames = placeData.map(place => place.display_name + '\n').join('');
    const response = await fetch(`https://translate.plausibility.cloud/api/v1/auto/${lang}/${encodeURIComponent(placesDisplayNames)}`);
    const dataJson = await response.json();
    let translatedPlacesDisplayNames = dataJson.translation.split(`\n`);
    let translatedPlaces = placeData.map((place, index) => {
        return {
            ...place, 
            display_name: translatedPlacesDisplayNames[index],
        };
    });
    return translatedPlaces;
}