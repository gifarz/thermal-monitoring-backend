const { poolDonggi } = require("../../pool/poolDonggi");
const { poolMatindok } = require("../../pool/poolMatindok");

const createTable = (db_name, table_name, column) => {
    return new Promise((resolve, reject) => {
        const query = `
            CREATE TABLE IF NOT EXISTS ${table_name} (${column});
        `;

        db_name == 'donggi_' ?
        poolDonggi.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        })
        :
        poolMatindok.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }

            resolve(results);
        })
    });
}

module.exports = { createTable }