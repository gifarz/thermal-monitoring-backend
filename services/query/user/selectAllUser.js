const { poolUser } = require("../../pool/poolUser");

const selectAllUser = () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM list_of_user`;
        poolUser.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectAllUser }