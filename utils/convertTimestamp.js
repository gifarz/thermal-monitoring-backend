const { format } = require('date-fns');

const formatDateToCustomString = (date) => {
    return format(date, 'yyMMddHHmmss');
}

const formatDateToTimestamp = (date) => {
    return format(date, 'yyyy-MM-dd HH:mm:ss');
}

const getOnlyYY = (date) => {
    return format(date, 'yy')
}

module.exports = { formatDateToCustomString, formatDateToTimestamp, getOnlyYY }