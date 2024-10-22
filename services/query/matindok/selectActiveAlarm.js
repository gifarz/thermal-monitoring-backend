const { poolMatindok } = require("../../pool/poolMatindok");

const selectActiveAlarmMatindok = (tag) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM active_alarm WHERE tag = ?`;
        poolMatindok.query(query, [tag], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectActiveAlarmMatindok }