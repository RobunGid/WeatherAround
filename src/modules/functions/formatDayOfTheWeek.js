import { getSiteLanguage } from "./language/getSiteLanguage.js";

export function formatDayOfTheWeek({ dateString }) {
    const language = getSiteLanguage();

    const date = new Date(dateString);
    const todayDate = new Date();
    const yesterdayDate = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const tomorrowDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
    
    const formattedDate = new Intl.DateTimeFormat(language).format(date);
    const formattedTodayDate = new Intl.DateTimeFormat(language).format(todayDate);
    const formattedYesterdayDate = new Intl.DateTimeFormat(language).format(yesterdayDate);
    const formattedTomorrowDate = new Intl.DateTimeFormat(language).format(tomorrowDate);

    if (formattedDate === formattedTodayDate) return 'Today';
    if (formattedDate === formattedYesterdayDate) return 'Yesterday';
    if (formattedDate === formattedTomorrowDate) return 'Tomorrow';
    return {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    }[date.getDay()]
}