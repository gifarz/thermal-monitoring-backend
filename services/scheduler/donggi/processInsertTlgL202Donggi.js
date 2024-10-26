const { selectRealtimeDonggi } = require('../../query/donggi/selectRealtimeDonggi');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/donggi/tlgTableCheck');
const insertToTlg = require('../../../helpers/donggi/insertToTlg');

const processInsertTlgL202Donggi = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeDonggi = await selectRealtimeDonggi();

        const isTableExist = await tlgTableCheck('L202', yy)

        if(isTableExist){

            insertToTlg('L202', yy, formattedDate, formattedTimestamp, outputRealtimeDonggi)
        }


    } catch (err) {
        console.log('err processInsertTlgL202Donggi', err)
    }
}

module.exports = processInsertTlgL202Donggi;