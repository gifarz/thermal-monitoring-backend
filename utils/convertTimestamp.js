const { format } = require('date-fns');

const formatDateToCustomString = (date) => {
    return format(date, 'yyyyMMddHHmmss');
}

module.exports = { formatDateToCustomString }