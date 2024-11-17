export default function placeListRemove(event) {
    document.querySelectorAll('#place-option-container .place-option').forEach(item => item.remove());
}