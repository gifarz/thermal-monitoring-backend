const { poolMatindok } = require("../../pool/poolMatindok");

const selectTbTagsMatindok = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tbtags';
        poolMatindok.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectTbTagsMatindok }