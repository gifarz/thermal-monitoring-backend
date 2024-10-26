const { selectRealtimeDonggi } = require('../../query/donggi/selectRealtimeDonggi');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/donggi/tlgTableCheck');
const insertToTlg = require('../../../helpers/donggi/insertToTlg');

const processInsertTlgL204Donggi = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeDonggi = await selectRealtimeDonggi();

        const isTableExist = await tlgTableCheck('L204', yy)

        if(isTableExist){

            insertToTlg('L204', yy, formattedDate, formattedTimestamp, outputRealtimeDonggi)
        }


    } catch (err) {
        console.log('err processInsertTlgL204Donggi', err)
    }
}

module.exports = processInsertTlgL204Donggi;