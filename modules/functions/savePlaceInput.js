export default function saveLoadPlaceInput (event) {
    sessionStorage.setItem('placeInputData', event.target.value)
}