export default async function translatePlaceData(placeData, lang = document.querySelector("#language-picker button").getAttribute('data-lang')) {
    console.log(lang)
    lang = lang.length > 2 ? lang.substring(0, 2) : lang;
    console.log(lang)
    let placesDisplayNames = placeData.map(place => place.display_name + '\n').join('');
    const response = await fetch(`https://lingva.ml/api/v1/auto/${lang}/${encodeURIComponent(placesDisplayNames)}`);
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