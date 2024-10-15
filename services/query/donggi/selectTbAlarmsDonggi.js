const { poolDonggi } = require("../../pool/poolDonggi");

const selectTbAlarmsDonggi = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tbalarms';
        poolDonggi.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectTbAlarmsDonggi }