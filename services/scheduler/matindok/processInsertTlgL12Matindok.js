const { selectRealtimeMatindok } = require('../../query/matindok/selectRealtimeMatindok');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/matindok/tlgTableCheck');
const insertToTlg = require('../../../helpers/matindok/insertToTlg');

const processInsertTlgL12Matindok = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeMatindok = await selectRealtimeMatindok();

        const isTableExist = await tlgTableCheck('L12', yy)

        if(isTableExist){

            insertToTlg('L12', yy, formattedDate, formattedTimestamp, outputRealtimeMatindok)
        }


    } catch (err) {
        console.log('err processInsertTlgL12Matindok', err)
    }
}

module.exports = processInsertTlgL12Matindok;