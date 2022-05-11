import moment from 'moment';
export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));
    if (!parsed.isValid()) {
        return Date.now()
    }

    return parsed.format('DD/MM/YY HH:mm');
}
//moment.duration(moment(new Date(eventDate)).diff(new Date()));
export function getCountdownParts(date) {
    const duration = moment.duration(
        moment(new Date(date)).diff(Date.now())
    );

    return {
        days: duration.as('days'),
        hours: duration.as('hours'),
        minutes: duration.as('minutes'),
        seconds: duration.as('seconds')
    };

}