const { selectRealtimeMatindok } = require('../../query/matindok/selectRealtimeMatindok');

const { 
    getOnlyYY, 
    formatDateToCustomString, 
    formatDateToTimestamp 
} = require('../../../utils/convertTimestamp');

const tlgTableCheck = require('../../../helpers/matindok/tlgTableCheck');
const insertToTlg = require('../../../helpers/matindok/insertToTlg');

const processInsertTlgL29Matindok = async () => {
    try {

        const currentDate = new Date()
        const yy = getOnlyYY(currentDate)
        const formattedDate = formatDateToCustomString(currentDate)
        const formattedTimestamp = formatDateToTimestamp(currentDate)

        const outputRealtimeMatindok = await selectRealtimeMatindok();

        const isTableExist = await tlgTableCheck('L29', yy)

        if(isTableExist){

            insertToTlg('L29', yy, formattedDate, formattedTimestamp, outputRealtimeMatindok)
        }


    } catch (err) {
        console.log('err processInsertTlgL29Matindok', err)
    }
}

module.exports = processInsertTlgL29Matindok;