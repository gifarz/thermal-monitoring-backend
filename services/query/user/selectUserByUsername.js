const { poolUser } = require("../../pool/poolUser");

const selectUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM list_of_user WHERE username = ?`;
        poolUser.query(query, [username], (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { selectUserByUsername }