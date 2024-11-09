const { poolUser } = require("../../pool/poolUser");

const selectSecretKeyByName = (name) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM secret_key WHERE name = ?`;
        poolUser.query(query, [name], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectSecretKeyByName }