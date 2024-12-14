export async function fetchPlaceListDataByPlaceName({ placeName }) {
    const openStreetMapApiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&featureType=city&limit=8`;
    try {
        const response = await fetch(openStreetMapApiUrl);
        const placeListData = await response.json();
        document.querySelector('#place-option-container').innerHTML = '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
        return placeListData;
    }
    catch {
        const placeListData = null;
        return placeListData;
    };
}