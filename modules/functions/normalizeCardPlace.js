export default function normalizeCardPlace(place) {
    const maxWordLength = 11;
    let wordArray = place.split(', ')
    if (wordArray.length > 3) {
    wordArray = [wordArray[0], wordArray[1], wordArray[2], wordArray[wordArray.length - 1]];
    }
    wordArray.forEach((item, index) => {
        if (item.trim().length > maxWordLength) {
            wordArray[index] = item.trim().slice(0, maxWordLength).trim() + '...';
        }
    }) 
    return wordArray.join(', ');
}