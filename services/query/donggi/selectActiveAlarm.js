const { poolDonggi } = require("../../pool/poolDonggi");

const selectActiveAlarmDonggi = (tag) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM active_alarm WHERE tag = ?`;
        poolDonggi.query(query, [tag], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectActiveAlarmDonggi }