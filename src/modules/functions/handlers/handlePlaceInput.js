import { createPlaceListButtons } from "../ui/createPlaceListButtons.js";
import { fetchPlaceListByPlaceName } from "../fetchs/fetchPlaceListByName.js";
import { fetchTranslatePlaceListData } from "../fetchs/fetchTranslatePlaceListData.js";

export async function handlePlaceInput(event) {
    if (document.querySelector('#place-option-container li')) {
        document.querySelectorAll('#place-option-container li').forEach(item => item.remove())
    }
    
    const placeSearchText = event.target.value;
    const placeListData = await fetchPlaceListByPlaceName({ placeName: placeSearchText });
    const translatedPlaceListData = await fetchTranslatePlaceListData({ placeListData });
    createPlaceListButtons({ placeListData: translatedPlaceListData });

    sessionStorage.setItem('placeListData', JSON.stringify(translatedPlaceListData));
}