const { poolDonggi } = require("../../pool/poolDonggi");

const selectTbTagsDonggi = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tbtags';
        poolDonggi.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectTbTagsDonggi }