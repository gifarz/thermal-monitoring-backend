const { selectRealtimeDonggi } = require('../query/donggi/selectRealtimeDonggi');
const { insertAlgDonggi } = require('../query/donggi/insertAlgDonggi');
const { formatDateToCustomString, getOnlyYY } = require('../../utils/convertTimestamp');
const { selectTbAlarmsDonggi } = require('../query/donggi/selectTbAlarmsDonggi');
const { checkExistTable } = require('../query/general/checkExistTable');
const { createTable } = require('../query/general/createTable');

const { redisCheckState, redisGetKey, redisAllKeys } = require('../../utils/redisValidation');

const processInsertAlgDonggi = async () => {
    let alarmStatus = null;
    let alarmId = null;
    let currentDate = new Date();
    
    try {
        const yy = getOnlyYY(currentDate)
        const dbName = 'donggi_'
        const tableName = `alg_${yy}` // yy is only 2 digit year, example : 2024 > 24
        const columnQuery = `
                    id BIGINT AUTO_INCREMENT PRIMARY KEY
                    timestamp BIGINT PRIMARY KEY,
                    alarmid INT(11),
                    status VARCHAR(45)
                `

        const outputRealtimeDonggi = await selectRealtimeDonggi();
        const outputTbAlarmsDonggi = await selectTbAlarmsDonggi();
        const isExistTable = await checkExistTable(dbName, tableName) // Check if the table is exist or not

        // GET ALL KEYS FOR VALIDATING ALARMID IN NORMAL CONDITION
        const outputRedisAllKeys = await redisAllKeys()

        // If doesnt exist then createTable
        if(isExistTable.length == 0){

            await createTable(
                dbName, 
                tableName, 
                columnQuery
            )
        }

        const setAteH = outputRealtimeDonggi.find(result => result.tname == 'Set_ATE_H')?.tvalue;
        const setAteHH = outputRealtimeDonggi.find(result => result.tname == 'Set_ATE_HH')?.tvalue;

        // console.log('setAteH and setAteHH', setAteH + ' and ' + setAteHH)

        const filterResult = outputRealtimeDonggi
            .filter(result => result.tname.match(/^L\d{3}_T\d{2}$/));

        for (const item of filterResult) {
            
            if (parseFloat(item.tvalue) >= parseFloat(setAteHH)) {
                alarmStatus = 'Danger';

            } else if(parseFloat(item.tvalue) >= parseFloat(setAteH) && parseFloat(item.tvalue) < parseFloat(setAteHH)) {
                alarmStatus = 'Warning';

            } else if(parseFloat(item.tvalue) > parseFloat(0) && parseFloat(item.tvalue) < parseFloat(setAteH)){

                const isKeyExist = outputRedisAllKeys.find(key => key.tag == item.tname)

                isKeyExist ? alarmStatus = 'Normal' : null // If exist could be to the next step
            }

            if (alarmStatus) {
                
                if(alarmStatus == 'Normal'){
                    // Get AlarmID from previous state, example Warning > Normal, then use the Warning alarmid
                    alarmId = outputRedisAllKeys.find(key => key.tag == item.tname)?.alarmid
                } else {
                    alarmId = outputTbAlarmsDonggi.find(alarm => alarm.tag === item.tname && alarm.group === alarmStatus)?.id;
                }

                // Convert Timestamp
                const timestamp = formatDateToCustomString(currentDate);

                const outputRedisCheckState = await redisCheckState(item.tname, alarmStatus, alarmId, timestamp)

                // If outputRedisCheckState is true then do the insert 
                if(outputRedisCheckState){

                    const fixedAlarmStatus = alarmStatus == 'Danger' || alarmStatus == 'Warning' ? 
                    'Active' : 'Normal'

                    // Call query insert to Alg table
                    insertAlgDonggi(timestamp, alarmId, fixedAlarmStatus, tableName); // tableName for validating the table
                }

            }

            alarmStatus = null
        }
    } catch (error) {
        console.error('Error scheduler alg donggi:', error);
        throw new Error('Failed to process alg donggi');
    }
}

module.exports = { processInsertAlgDonggi };