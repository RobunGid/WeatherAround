export async function fetchPlaceListByPlaceName({ placeName }) {
    const openStreetMapApiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&featureType=city&limit=8`
    const response = await fetch(openStreetMapApiUrl);
    const placeListData = await response.json();
    return placeListData;
}