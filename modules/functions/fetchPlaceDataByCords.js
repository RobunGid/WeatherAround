export default async function fetchPlaceData(lat, lon) {

const openStreetMapApiUrl = `https://nominatim.openstreetmap.org/reverse?
lat=${lat}&
lon=${lon}&
format=json&
zoom=10&
limit=8`
const response = await fetch(openStreetMapApiUrl);
const placeData = await response.json();

return placeData;
}