const { poolMatindok } = require("../../pool/poolMatindok");

const insertActiveAlarmMatindok = (timestamp, alarmid, group, tag, text, status) => {
    return new Promise((resolve, reject) => {
        const query = 
        `INSERT INTO active_alarm (timestamp,alarmid,\`group\`,tag,text,status) VALUES (?, ?, ?, ?, ?, ?)`;

        poolMatindok.query(query, [timestamp, alarmid, group, tag, text, status], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { insertActiveAlarmMatindok }