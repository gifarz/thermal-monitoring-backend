const { selectRealtimeDonggi } = require('../../query/donggi/selectRealtimeDonggi');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/donggi/tlgTableCheck');
const insertToTlg = require('../../../helpers/donggi/insertToTlg');

const processInsertTlgL209Donggi = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeDonggi = await selectRealtimeDonggi();

        const isTableExist = await tlgTableCheck('L209', yy)

        if(isTableExist){

            insertToTlg('L209', yy, formattedDate, formattedTimestamp, outputRealtimeDonggi)
        }


    } catch (err) {
        console.log('err processInsertTlgL209Donggi', err)
    }
}

module.exports = processInsertTlgL209Donggi;