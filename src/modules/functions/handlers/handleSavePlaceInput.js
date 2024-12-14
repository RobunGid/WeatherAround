export function handleSavePlaceInput(event) {
    sessionStorage.setItem('placeInputValue', event.target.value)
}