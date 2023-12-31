import { formatDistance, subDays, format, differenceInCalendarYears } from 'date-fns'
import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import isThisWeek from 'date-fns/isThisWeek'
import isThisMonth from 'date-fns/isThisMonth'
import isThisYear from 'date-fns/isThisYear'

const dateFormats = (dateString, mode) => {
    const dateObj = new Date(dateString)
    const now = Date.now()
    console.log(dateObj)

    const friendlyDays = (dateObj) => {
        if(isToday(dateObj)) return "Today";
        if(isYesterday(dateObj)) return "Yesterday";
        if(isThisWeek(dateObj)) return format(dateObj, 'EEE')
        if(isThisMonth(dateObj)) return format(dateObj, 'EEE d')
        if(isThisYear(dateObj)) return format(dateObj, 'EEE d LLL')
        return format(dateObj, "d LLL yyyy")
    }

    const ago = (dateObj) => {
        return formatDistance(subDays(dateObj, 0), new Date(), { addSuffix: true })
    }

    const birthday = (dateObj) => {
        return format(dateObj, 'd LLL yyyy')
    }

    const age = (dateObj) => {
        return differenceInCalendarYears(now, dateObj)
    }

    switch(mode){
        case 'friendlyDays': return friendlyDays(dateObj)
        case 'ago': return ago(dateObj)
        case 'birthday': return birthday(dateObj)
        case 'age': return age(dateObj)
        default: return 
    }
}

export default dateFormats
