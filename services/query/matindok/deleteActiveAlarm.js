const { poolMatindok } = require("../../pool/poolMatindok");

const deleteActiveAlarmMatindok = (alarmid) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM active_alarm WHERE alarmid = ?`;
        poolMatindok.query(query, [alarmid], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { deleteActiveAlarmMatindok }