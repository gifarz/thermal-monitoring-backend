const { selectRealtimeMatindok } = require('../../query/matindok/selectRealtimeMatindok');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/matindok/tlgTableCheck');
const insertToTlg = require('../../../helpers/matindok/insertToTlg');

const processInsertTlgL05Matindok = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeMatindok = await selectRealtimeMatindok();

        const isTableExist = await tlgTableCheck('L05', yy)

        if(isTableExist){

            insertToTlg('L05', yy, formattedDate, formattedTimestamp, outputRealtimeMatindok)
        }


    } catch (err) {
        console.log('err processInsertTlgL05Matindok', err)
    }
}

module.exports = processInsertTlgL05Matindok;