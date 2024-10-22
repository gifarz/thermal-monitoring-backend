const { poolDonggi } = require("../../pool/poolDonggi");

const insertHistoryAlarmDonggi = (timestamp, alarmid, group, tag, text, status, tableName) => {
    
    return new Promise((resolve, reject) => {
        const query = 
        `INSERT INTO ${tableName} (timestamp,alarmid,\`group\`,tag,text,status) VALUES (?,?,?,?,?,?)`;

        poolDonggi.query(query, [timestamp, alarmid, group, tag, text, status], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}

module.exports = { insertHistoryAlarmDonggi }