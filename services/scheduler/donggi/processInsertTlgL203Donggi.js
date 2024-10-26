const { selectRealtimeDonggi } = require('../../query/donggi/selectRealtimeDonggi');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/donggi/tlgTableCheck');
const insertToTlg = require('../../../helpers/donggi/insertToTlg');

const processInsertTlgL203Donggi = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeDonggi = await selectRealtimeDonggi();

        const isTableExist = await tlgTableCheck('L203', yy)

        if(isTableExist){

            insertToTlg('L203', yy, formattedDate, formattedTimestamp, outputRealtimeDonggi)
        }


    } catch (err) {
        console.log('err processInsertTlgL203Donggi', err)
    }
}

module.exports = processInsertTlgL203Donggi;