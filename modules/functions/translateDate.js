export default function translateDate(dateString, lang = document.querySelector("#language-picker button").getAttribute('data-lang')) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    const formattedDate = new Intl.DateTimeFormat(lang, {
        year: 'numeric',
        month: 'numeric', 
        day: 'numeric'
    }).format(date);
    return formattedDate;
}