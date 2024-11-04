import createPlaceButtons from "./createPlaceButtons.js"

export default function updateCardSearchHistory() {
    if (localStorage.getItem("placeListHistory")) {
        createPlaceButtons(JSON.parse(localStorage.getItem('placeListHistory')).slice(0, 5), true)
    }
}