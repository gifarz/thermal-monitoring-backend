const { redisAllKeys } = require("../../utils/redisValidation")

const { deleteActiveAlarmDonggi } = require("../query/donggi/deleteActiveAlarm")
const { insertActiveAlarmDonggi } = require("../query/donggi/insertActiveAlarm")
const { selectActiveAlarmDonggi } = require("../query/donggi/selectActiveAlarm")
const { selectTbAlarmsDonggi } = require("../query/donggi/selectTbAlarmsDonggi")
const { selectTbTagsDonggi } = require("../query/donggi/selectTbTagsDonggi")
const { updateActiveAlarmDonggi } = require("../query/donggi/updateActiveAlarm")

const { selectTbAlarmsMatindok } = require("../query/matindok/selectTbAlarmsMatindok")
const { selectTbTagsMatindok } = require("../query/matindok/selectTbTagsMatindok")
const { selectActiveAlarmMatindok } = require("../query/matindok/selectActiveAlarm")
const { updateActiveAlarmMatindok } = require("../query/matindok/updateActiveAlarm")
const { deleteActiveAlarmMatindok } = require("../query/matindok/deleteActiveAlarm")
const { insertActiveAlarmMatindok } = require("../query/matindok/insertActiveAlarm")

const processInsertOrDeleteActiveAlarm = async () => {

    const outputRedisAllKeys = await redisAllKeys()

    // DONGGI
    const outputTbAlarmsDonggi = await selectTbAlarmsDonggi()
    const outputTbTagsDonggi = await selectTbTagsDonggi()

    // MATINDOK
    const outputTbAlarmsMatindok = await selectTbAlarmsMatindok()
    const outputTbTagsMatindok = await selectTbTagsMatindok()

    for (const key of outputRedisAllKeys) {

        // DONGGI SCOPE
        if (key.tag.match(/^L\d{3}_T\d{2}$/)) {

            const outputSelectActiveAlarm = await selectActiveAlarmDonggi(key.tag)

            if (outputSelectActiveAlarm.length > 0) {

                if (key.status == 'Warning' || key.status == 'Danger') {

                    const groupTbAlarm = outputSelectActiveAlarm.find(alarm => alarm.tag == key.tag &&
                        alarm.group == key.status)?.group

                    // If the status changed from Danger > Warning, this will update the row
                    if(key.status != groupTbAlarm){

                        const textTbAlarm = outputTbAlarmsDonggi.find(tbalarm => tbalarm.tag == key.tag &&
                            tbalarm.group == key.status)?.text
                        
                        const descTbTag = outputTbTagsDonggi.find(tbtag => tbtag.tag == key.tag)?.desc
    
                        const fixedText = textTbAlarm.replace('{desc}', descTbTag)
    
                        updateActiveAlarmDonggi(key.timestamp, key.alarmid, key.status, fixedText, key.tag)
                    }

                } else {

                    // Changed to normal condition
                    deleteActiveAlarmDonggi(key.alarmid)
                }

            } else {

                // Insert if havent exist and when the status is Warning or Danger
                if (key.status == 'Warning' || key.status == 'Danger') {

                    const textTbAlarm = outputTbAlarmsDonggi.find(tbalarm => tbalarm.tag == key.tag &&
                        tbalarm.group == key.status)?.text

                    const groupTbAlarm = outputTbAlarmsDonggi.find(tbalarm => tbalarm.tag == key.tag &&
                        tbalarm.group == key.status)?.group

                    const descTbTag = outputTbTagsDonggi.find(tbtag => tbtag.tag == key.tag)?.desc

                    const fixedText = textTbAlarm.replace('{desc}', descTbTag)

                    insertActiveAlarmDonggi(key.timestamp, key.alarmid, groupTbAlarm, key.tag, fixedText, 'Active')
                }
            }

        } 
        
        // MATINDOK SCOPE
        else { 

            const outputSelectActiveAlarm = await selectActiveAlarmMatindok(key.tag)

            if (outputSelectActiveAlarm.length > 0) {

                if (key.status == 'Warning' || key.status == 'Danger') {

                    const groupTbAlarm = outputSelectActiveAlarm.find(alarm => alarm.tag == key.tag &&
                        alarm.group == key.status)?.group

                    // If the status changed from Danger > Warning, this will update the row
                    if(key.status != groupTbAlarm){

                        const textTbAlarm = outputTbAlarmsMatindok.find(tbalarm => tbalarm.tag == key.tag &&
                            tbalarm.group == key.status)?.text
                        
                        const descTbTag = outputTbTagsMatindok.find(tbtag => tbtag.tag == key.tag)?.desc
    
                        const fixedText = textTbAlarm.replace('{desc}', descTbTag)
    
                        updateActiveAlarmMatindok(key.timestamp, key.alarmid, key.status, fixedText, key.tag)
                    }

                } else {

                    // Changed to normal condition
                    deleteActiveAlarmMatindok(key.alarmid)
                }

            } else {

                // Insert if havent exist and when the status is Warning or Danger
                if (key.status == 'Warning' || key.status == 'Danger') {

                    const textTbAlarm = outputTbAlarmsMatindok.find(tbalarm => tbalarm.tag == key.tag &&
                        tbalarm.group == key.status)?.text

                    const groupTbAlarm = outputTbAlarmsMatindok.find(tbalarm => tbalarm.tag == key.tag &&
                        tbalarm.group == key.status)?.group

                    const descTbTag = outputTbTagsMatindok.find(tbtag => tbtag.tag == key.tag)?.desc

                    const fixedText = textTbAlarm.replace('{desc}', descTbTag)

                    insertActiveAlarmMatindok(key.timestamp, key.alarmid, groupTbAlarm, key.tag, fixedText, 'Active')
                }
            }
        }
    }
}

module.exports = processInsertOrDeleteActiveAlarm