export default function getRandomInt(min, max) {
        const number = min + Math.random() * (max + 1 - min);
        return Math.floor(number);
}