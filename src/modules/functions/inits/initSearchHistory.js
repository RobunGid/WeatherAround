import { createPlaceListButtons } from "../ui/createPlaceListButtons.js";
import { fetchTranslatePlaceListData } from "../fetchs/fetchTranslatePlaceListData.js";

export async function initSearchHistory() {
    if (localStorage.getItem('searchHistoryListData')) {
        const searchHistoryListData = JSON.parse(localStorage.getItem('searchHistoryListData'));

        const translatedSearchHistoryListData = await fetchTranslatePlaceListData({ placeListData: searchHistoryListData });        

        createPlaceListButtons({ placeListData: translatedSearchHistoryListData, isSearchHistory: true});
    }
}