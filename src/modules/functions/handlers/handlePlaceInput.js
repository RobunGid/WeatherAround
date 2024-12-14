import { createPlaceListButtons } from "../domers/createPlaceListButtons.js";
import { fetchPlaceListByPlaceName } from "../fetchs/fetchPlaceListByName.js";
import { fetchTranslatePlaceListData } from "../fetchs/fetchTranslatePlaceListData.js";

export async function handlePlaceInput(event) {
    const placeSearchText = event.target.value;
    const placeListData = await fetchPlaceListByPlaceName({ placeName: placeSearchText });
    const translatedPlaceListData = await fetchTranslatePlaceListData({ placeListData })
    // createPlaceListButtons({ placeListData })
}