const { poolMatindok } = require("../../pool/poolMatindok");

const selectTbAlarmsMatindok = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tbalarms';
        poolMatindok.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectTbAlarmsMatindok }