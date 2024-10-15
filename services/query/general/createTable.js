const { poolDonggi } = require("../../pool/poolDonggi");
const { poolMatindok } = require("../../pool/poolMatindok");

const createTable = (db_name, table_name, column) => {
    return new Promise((resolve, reject) => {
        const query = `
            CREATE TABLE IF NOT EXISTS ${table_name} (${column});
        `;

        console.log(query,  query)

        db_name == 'donggi_' ?
        poolDonggi.query(query, (error, results) => { // Not problem if the db_name is Matindok using Donggi
            if (error) {
                return reject(error);
            }

            resolve(results);
        })
        :
        poolMatindok.query(query, (error, results) => { // Not problem if the db_name is Matindok using Donggi
            if (error) {
                return reject(error);
            }

            resolve(results);
        })
    });
}

module.exports = { createTable }