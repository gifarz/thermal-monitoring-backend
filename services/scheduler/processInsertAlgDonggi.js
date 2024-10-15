const { selectRealtimeDonggi } = require('../query/donggi/selectRealtimeDonggi');
const { insertAlgDonggi } = require('../query/donggi/insertAlgDonggi');
const { formatDateToCustomString } = require('../../utils/convertTimestamp');
const { selectTbAlarmsDonggi } = require('../query/donggi/selectTbAlarmsDonggi');

const redisCheckState = require('../../utils/redisCheckState');

const processInsertAlgDonggi = async () => {
    let alarmStatus = null;
    let alarmId = null;
    let currentDate = new Date();

    try {
        const outputRealtimeDonggi = await selectRealtimeDonggi();
        const outputTbAlarmsDonggi = await selectTbAlarmsDonggi();

        const setAteH = outputRealtimeDonggi.find(result => result.tname == 'Set_ATE_H')?.tvalue;
        const setAteHH = outputRealtimeDonggi.find(result => result.tname == 'Set_ATE_HH')?.tvalue;

        // console.log('setAteH and setAteHH', setAteH + ' and ' + setAteHH)

        const filterResult = outputRealtimeDonggi
            .filter(result => result.tname.match(/^L\d{3}_T\d{2}$/));

        for (const item of filterResult) {
            
            if (parseFloat(item.tvalue) >= parseFloat(setAteHH)) {
                // console.log('item.tvalue and setAteHH', item.tvalue + ' and ' + setAteHH)
                // console.log('true danger')
                alarmStatus = 'Danger';

            } else if (parseFloat(item.tvalue) >= parseFloat(setAteH) && parseFloat(item.tvalue) < parseFloat(setAteHH)) {
                // console.log('item.tvalue and setAteH', item.tvalue + ' and ' + setAteH)
                // console.log('true warning')
                alarmStatus = 'Warning';
            }

            if (alarmStatus) {
                
                alarmId = outputTbAlarmsDonggi.find(alarm => alarm.tag === item.tname && alarm.group === alarmStatus)?.id;

                // Convert Timestamp
                const timestamp = formatDateToCustomString(currentDate);

                const outputRedisCheckState = await redisCheckState(item.tname, alarmStatus)

                // If outputRedisCheckState is true then do the insert 
                if(outputRedisCheckState){

                    // Call query insert to Alg table
                    await insertAlgDonggi(timestamp, alarmId, alarmStatus);
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
