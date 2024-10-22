const { selectRealtimeMatindok } = require('../query/matindok/selectRealtimeMatindok');
const { formatDateToCustomString, getOnlyYY } = require('../../utils/convertTimestamp');
const { selectTbAlarmsMatindok } = require('../query/matindok/selectTbAlarmsMatindok');
const { selectTbTagsMatindok } = require("../query/matindok/selectTbTagsMatindok")
const { checkExistTable } = require('../query/general/checkExistTable');
const { createTable } = require('../query/general/createTable');

const { redisCheckState, redisAllKeys } = require('../../utils/redisValidation');
const { insertHistoryAlarMatindok } = require('../query/matindok/insertHistoryAlarm');

const processInsertHistoryAlarmMatindok = async () => {
    let alarmStatus = null;
    let alarmId = null;
    let currentDate = new Date();
    
    try {
        const yy = getOnlyYY(currentDate)
        const dbName = 'matindok'
        const tableName = `history_alarm_${yy}` // yy is only 2 digit year, example : 2024 > 24
        const columnQuery = `
                    id BIGINT AUTO_INCREMENT PRIMARY KEY,
                    timestamp BIGINT,
                    alarmid INT(11),
                    \`group\` VARCHAR(50),
                    tag VARCHAR(50),
                    text VARCHAR(255),
                    status VARCHAR(50)
                `

        const outputRealtimeMatindok = await selectRealtimeMatindok();
        const outputTbAlarmsMatindok = await selectTbAlarmsMatindok();
        const outputTbTagsMatindok = await selectTbTagsMatindok()
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

        const setAteH = outputRealtimeMatindok.find(result => result.tname == 'Set_ATE_H')?.tvalue;
        const setAteHH = outputRealtimeMatindok.find(result => result.tname == 'Set_ATE_HH')?.tvalue;

        // console.log('setAteH and setAteHH', setAteH + ' and ' + setAteHH)

        const filterResult = outputRealtimeMatindok
            .filter(result => result.tname.match(/^L\d{3}_T\d{2}$/));

        for (const item of filterResult) {

            const previousStatus = outputRedisAllKeys.find(key => key.tag == item.tname)?.status
            
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
                    alarmId = outputTbAlarmsMatindok.find(alarm => alarm.tag === item.tname && alarm.group === alarmStatus)?.id;
                }

                // Convert Timestamp
                const timestamp = formatDateToCustomString(currentDate);

                const outputRedisCheckState = await redisCheckState(item.tname, alarmStatus, alarmId, timestamp)

                // console.log('outputRedisCheckState', outputRedisCheckState)

                // If outputRedisCheckState is true then do the insert 
                if(outputRedisCheckState){

                    const fixedAlarmStatus = alarmStatus == 'Danger' || alarmStatus == 'Warning' ? 
                    'Active' : 'Normal'

                    // Validation for taking previous status if alarmStatus is Normal
                    alarmStatus = alarmStatus == 'Normal' ? previousStatus : alarmStatus

                    const textTbAlarm = outputTbAlarmsMatindok.find(tbalarm => tbalarm.tag == item.tname &&
                        tbalarm.group == alarmStatus)?.text

                    const groupTbAlarm = outputTbAlarmsMatindok.find(tbalarm => tbalarm.tag == item.tname &&
                        tbalarm.group == alarmStatus)?.group

                    const descTbTag = outputTbTagsMatindok.find(tbtag => tbtag.tag == item.tname)?.desc

                    const fixedText = textTbAlarm.replace('{desc}', descTbTag)

                    insertHistoryAlarmMatindok(timestamp, alarmId, groupTbAlarm, item.tname, fixedText, fixedAlarmStatus, tableName)
                }

            }

            alarmStatus = null
        }
    } catch (error) {
        console.error('Error scheduler processInsertHistoryAlarmMatindok:', error);
        throw new Error('Failed to process processInsertHistoryAlarmMatindok');
    }
}

module.exports = { processInsertHistoryAlarmMatindok };