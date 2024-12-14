import { getSiteLanguage } from "./getSiteLanguage.js";

export function translateDate({ dateString }) {
    const language = getSiteLanguage();
    const date = new Date(dateString);
    date.setDate(date.getDate());
    const formattedDate = new Intl.DateTimeFormat(language, {
        year: 'numeric',
        month: 'numeric', 
        day: 'numeric'
    }).format(date);
    return formattedDate;
}