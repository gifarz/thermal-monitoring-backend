const { poolDonggi } = require("../../pool/poolDonggi");

const checkExistTable = (db_name, table_name) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT * 
            FROM information_schema.tables 
            WHERE table_schema = '${db_name}' 
            AND table_name = '${table_name}';
        `;
        poolDonggi.query(query, (error, results) => { // Not problem if the db_name is Matindok using Donggi
            if (error) {
                return reject(error);
            }

            resolve(results);
        });
    });
}

module.exports = { checkExistTable }