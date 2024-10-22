const { poolMatindok } = require("../../pool/poolMatindok");

const updateActiveAlarmMatindok = (timestamp, alarmid, group, text, tag) => {
    return new Promise((resolve, reject) => {
        const query = 
        `UPDATE active_alarm SET timestamp = ?, alarmid = ?, \`group\` = ?, text = ? WHERE tag = ?`;
        poolMatindok.query(query, [timestamp, alarmid, group, text, tag], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { updateActiveAlarmMatindok }