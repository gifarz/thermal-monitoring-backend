const { checkExistTable } = require("../../services/query/general/checkExistTable");
const { createTable } = require("../../services/query/general/createTable");

require('dotenv').config();

const tlgTableCheck = async (group, yy) => {

    const dbName = process.env.DATABASE_MATINDOK
    const tableName = `tlg_${group.toLowerCase()}_${yy}`
    const columnQuery = `
        id BIGINT(20) AUTO_INCREMENT PRIMARY KEY,
        ${group}_T01 DOUBLE,
        ${group}_T02 DOUBLE,
        ${group}_T03 DOUBLE,
        ${group}_T04 DOUBLE,
        ${group}_T05 DOUBLE,
        ${group}_T06 DOUBLE,
        ${group}_T07 DOUBLE,
        ${group}_T08 DOUBLE,
        ${group}_T09 DOUBLE,
        ${group}_T10 DOUBLE,
        ${group}_T11 DOUBLE,
        ${group}_T12 DOUBLE,
        timestamp TIMESTAMP
    `
    const isExistTable = await checkExistTable(dbName, tableName) // Check if the table is exist or not

    // If doesnt exist then createTable
    if (isExistTable.length == 0) {

        await createTable(
            dbName,
            tableName,
            columnQuery
        )
    } else {

        return true
    }
}

module.exports = tlgTableCheck