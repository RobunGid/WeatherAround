import createPlaceButtons from "./createPlaceButtons.js"
import fetchPlaceData from "./fetchPlaceDataByName.js";
import placeListRemove from "./placeListRemove.js";

export default async function checkPlaceData (placeData, isList = false) {
    if (isList) {
        createPlaceButtons(placeData)
    } else {
        placeListRemove();
        const placeName = placeData.trim();
        let regExp = /^(?=.*[\p{L}\p{N}])[\p{L}\p{M}\p{Zs}\p{P}\p{N}]+$/u;
        if (regExp.test(placeName)) {
            let placeList = await fetchPlaceData.call(null, placeName);
            sessionStorage.setItem('placeListData', JSON.stringify(placeList));
            createPlaceButtons(placeList);
        } else {
            placeListRemove();
        }
    }

}