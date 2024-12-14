import { createPlaceListButtons } from "../ui/createPlaceListButtons.js";
import { fetchPlaceListByPlaceName } from "../fetchs/fetchPlaceListByName.js";
import { fetchTranslatePlaceListData } from "../fetchs/fetchTranslatePlaceListData.js";

export async function handlePlaceInput(event) {
    const validateRegEx = /^(?=.*[\p{L}\p{N}])[\p{L}\p{M}\p{Zs}\p{P}\p{N}]+$/u;
    const placeSearchText = event.target.value;

    document.querySelector('#place-option-container').innerHTML = '';

    if (!validateRegEx.test(placeSearchText)) return;
    
    const placeListData = await fetchPlaceListByPlaceName({ placeName: placeSearchText });
    const translatedPlaceListData = await fetchTranslatePlaceListData({ placeListData });

    createPlaceListButtons({ placeListData: translatedPlaceListData });

    sessionStorage.setItem('placeListData', JSON.stringify(translatedPlaceListData));
}