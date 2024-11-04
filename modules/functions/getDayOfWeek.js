export default function getDayOfWeek(date) {
    date = new Date(date)
    const todayDate = new Date((new Date()).getTime()).toString().slice(0,15);
    const tomorrowDate = new Date((new Date()).getTime() + 1000*60*60*24).toString().slice(0,15)
    const yesterdayDate = new Date((new Date()).getTime() - 1000*60*60*24).toString().slice(0,15)
    if (date.toString().slice(0, 15) == todayDate) return 'Today';
    if (date.toString().slice(0, 15) == yesterdayDate) return 'Yesterday';
    if (date.toString().slice(0, 15) == tomorrowDate) return 'Tomorrow';
    switch((new Date(date).getDay()).toString()){
        case '0': return 'Sunday';
        case '1': return 'Monday';
        case '2': return 'Tuesday';
        case '3': return 'Wednesday';
        case '4': return 'Thursday';
        case '5': return 'Friday';
        case '6': return 'Saturday';
        default: return new Error();
    }
}