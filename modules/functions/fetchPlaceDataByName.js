export default async function fetchPlaceData(placeName) {

const openStreetMapApiUrl = `https://nominatim.openstreetmap.org/search?
q=${encodeURIComponent(placeName)}&
format=json&
zoom=10&
limit=8`
const response = await fetch(openStreetMapApiUrl);
const placeData = await response.json();

return placeData;
}