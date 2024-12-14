import { fetchWeatherDataByPlaceData } from "../fetchs/fetchWeatherDataByPlaceData.js";
import { createPlaceListButtons } from "../ui/createPlaceListButtons.js";
import { createWeatherCards } from "../ui/createWeatherCards.js";

export async function handlePlaceOptionButtonClick({ placeData }) {
    const weatherData = await fetchWeatherDataByPlaceData({ placeData });
    createWeatherCards({ weatherData, placeData });
    localStorage.setItem('lastPlaceData', JSON.stringify(placeData))

    if (localStorage.getItem('searchHistoryListData')) {
        const searchHistoryListData = JSON.parse(localStorage.getItem('searchHistoryListData'));
        const searchHistoryListId = searchHistoryListData.map(item => item.place_id);
        
        if (searchHistoryListId.includes(placeData.place_id)) searchHistoryListData.splice(searchHistoryListId.indexOf(placeData.place_id), 1); 
        
        const updatedSearchHistoryListData = [placeData, ...searchHistoryListData];
        localStorage.setItem('searchHistoryListData', JSON.stringify(updatedSearchHistoryListData));
        createPlaceListButtons({ placeListData: updatedSearchHistoryListData, isSearchHistory: true});
    } else {
        localStorage.setItem('searchHistoryListData', JSON.stringify([placeData]));
        createPlaceListButtons({ placeListData: [placeData], isSearchHistory: true});
    }
}