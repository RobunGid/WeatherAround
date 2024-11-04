export default function normalizeCardTemperature(value, unit) {
    return `${value > 0 ? '+' : ''}${value}${unit}`
}