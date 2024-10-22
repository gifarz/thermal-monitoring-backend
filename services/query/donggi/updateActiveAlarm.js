const { poolDonggi } = require("../../pool/poolDonggi");

const updateActiveAlarmDonggi = (timestamp, alarmid, group, text, tag) => {
    return new Promise((resolve, reject) => {
        const query = 
        `UPDATE active_alarm SET timestamp = ?, alarmid = ?, \`group\` = ?, text = ? WHERE tag = ?`;
        poolDonggi.query(query, [timestamp, alarmid, group, text, tag], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { updateActiveAlarmDonggi }