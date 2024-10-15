const { poolDonggi } = require("../../pool/poolDonggi");

const insertAlgDonggi = (timestamp, alarmid, status) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO alg_24 (timestamp,alarmid,status) VALUES (?, ?, ?)`;
        poolDonggi.query(query, [timestamp, alarmid, status], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { insertAlgDonggi }