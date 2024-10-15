const { poolDonggi } = require("../../pool/poolDonggi");

const selectRealtimeDonggi = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM realtime';
        poolDonggi.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectRealtimeDonggi }