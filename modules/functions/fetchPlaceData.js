export default async function fetchPlaceData(placeName) {

const openStreetMapApiUrl = `https://nominatim.openstreetmap.org/search?
q=${encodeURIComponent(placeName)}&
format=json&
limit=8`
console.log(openStreetMapApiUrl)
const response = await fetch(openStreetMapApiUrl);
console.log(response)
const placeData = await response.json();
console.log(placeData)

return placeData;
}