export default function normalizeCardDate(date) {
    date = new Date(date)
    const monthNumber = (date.getMonth() + 1).toString().length == 1 ?
    '0' + (date.getMonth() + 1).toString() :
    (date.getMonth() + 1).toString();

    const dayNumber = (date.getDate()).toString().length == 1 ?
    '0' + (date.getDate()).toString() :
    (date.getDate()).toString();

    const yearNumber = date.getFullYear();

    const normalizedDate = `${monthNumber}.${dayNumber}.${yearNumber}`;

    return normalizedDate;
}