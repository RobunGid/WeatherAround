export async function fetchPlaceListDataByCords({latitude, longitude}) {

const API_URL = `https://nominatim.openstreetmap.org/reverse?
lat=${latitude}&
lon=${longitude}&
format=json&
zoom=10&
limit=8`
const response = await fetch(API_URL);
const placeData = await response.json();

return placeData;
}