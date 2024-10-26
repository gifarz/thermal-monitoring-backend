const { selectRealtimeMatindok } = require('../../query/matindok/selectRealtimeMatindok');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/matindok/tlgTableCheck');
const insertToTlg = require('../../../helpers/matindok/insertToTlg');

const processInsertTlgL03Matindok = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeMatindok = await selectRealtimeMatindok();

        const isTableExist = await tlgTableCheck('L03', yy)

        if(isTableExist){

            insertToTlg('L03', yy, formattedDate, formattedTimestamp, outputRealtimeMatindok)
        }


    } catch (err) {
        console.log('err processInsertTlgL03Matindok', err)
    }
}

module.exports = processInsertTlgL03Matindok;