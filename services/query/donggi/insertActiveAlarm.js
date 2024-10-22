const { poolDonggi } = require("../../pool/poolDonggi");

const insertActiveAlarmDonggi = (timestamp, alarmid, group, tag, text, status) => {
    return new Promise((resolve, reject) => {
        const query = 
        `INSERT INTO active_alarm (timestamp,alarmid,\`group\`,tag,text,status) VALUES (?, ?, ?, ?, ?, ?)`;

        poolDonggi.query(query, [timestamp, alarmid, group, tag, text, status], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { insertActiveAlarmDonggi }