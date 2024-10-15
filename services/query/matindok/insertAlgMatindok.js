const { poolMatindok } = require("../../pool/poolMatindok");

const insertAlgMatindok = (timestamp, alarmid, status, tablename) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${tablename} (timestamp,alarmid,status) VALUES (?, ?, ?)`;
        poolMatindok.query(query, [timestamp, alarmid, status], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { insertAlgMatindok }