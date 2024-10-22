const { poolMatindok } = require("../../pool/poolMatindok");

const insertHistoryAlarmMatindok = (timestamp, alarmid, group, tag, text, status, tableName) => {
    
    return new Promise((resolve, reject) => {
        const query = 
        `INSERT INTO ${tableName} (timestamp,alarmid,\`group\`,tag,text,status) VALUES (?,?,?,?,?,?)`;

        poolMatindok.query(query, [timestamp, alarmid, group, tag, text, status], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { insertHistoryAlarmMatindok }