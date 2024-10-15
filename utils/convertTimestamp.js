const { format } = require('date-fns');

const formatDateToCustomString = (date) => {
    return format(date, 'yyMMddHHmmss');
}

const getOnlyYY = (date) => {
    return format(date, 'yy')
}

module.exports = { formatDateToCustomString, getOnlyYY }