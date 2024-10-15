const { poolMatindok } = require("../../pool/poolMatindok");

const selectRealtimeMatindok = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM realtime';
        poolMatindok.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectRealtimeMatindok }