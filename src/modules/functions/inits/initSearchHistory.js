import { createPlaceListButtons } from "../ui/createPlaceListButtons.js";

export function initSearchHistory() {
    if (localStorage.getItem('searchHistoryListData')) {
        const searchHistoryListData = JSON.parse(localStorage.getItem('searchHistoryListData'))
        createPlaceListButtons({ placeListData: searchHistoryListData, isSearchHistory: true})
    }
}