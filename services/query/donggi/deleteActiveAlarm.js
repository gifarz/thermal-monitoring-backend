const { poolDonggi } = require("../../pool/poolDonggi");

const deleteActiveAlarmDonggi = (alarmid) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM active_alarm WHERE alarmid = ?`;
        poolDonggi.query(query, [alarmid], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { deleteActiveAlarmDonggi }