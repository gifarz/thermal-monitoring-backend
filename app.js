const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

// DONGGI SITE
const getRealtimeDonggi = require('./routes/donggi/getRealtime')
const getTlgDonggi = require('./routes/donggi/getTlg')
const { processInsertHistoryAlarmDonggi } = require('./services/scheduler/donggi/processInsertHistoryAlarmDonggi');
const processInsertTlgL102Donggi = require('./services/scheduler/donggi/processInsertTlgL102Donggi');
const processInsertTlgL103Donggi = require('./services/scheduler/donggi/processInsertTlgL103Donggi');
const processInsertTlgL104Donggi = require('./services/scheduler/donggi/processInsertTlgL104Donggi');
const processInsertTlgL105Donggi = require('./services/scheduler/donggi/processInsertTlgL105Donggi');
const processInsertTlgL202Donggi = require('./services/scheduler/donggi/processInsertTlgL202Donggi');
const processInsertTlgL203Donggi = require('./services/scheduler/donggi/processInsertTlgL203Donggi');
const processInsertTlgL204Donggi = require('./services/scheduler/donggi/processInsertTlgL204Donggi');
const processInsertTlgL205Donggi = require('./services/scheduler/donggi/processInsertTlgL205Donggi');
const processInsertTlgL209Donggi = require('./services/scheduler/donggi/processInsertTlgL209Donggi');
const processInsertTlgL210Donggi = require('./services/scheduler/donggi/processInsertTlgL210Donggi');
const processInsertTlgL212Donggi = require('./services/scheduler/donggi/processInsertTlgL212Donggi');
const processInsertTlgL213Donggi = require('./services/scheduler/donggi/processInsertTlgL213Donggi');
const processInsertTlgL215Donggi = require('./services/scheduler/donggi/processInsertTlgL215Donggi');
const processInsertTlgL216Donggi = require('./services/scheduler/donggi/processInsertTlgL216Donggi');
const processInsertTlgL217Donggi = require('./services/scheduler/donggi/processInsertTlgL217Donggi');
const processInsertTlgL219Donggi = require('./services/scheduler/donggi/processInsertTlgL219Donggi');
const processInsertTlgL220Donggi = require('./services/scheduler/donggi/processInsertTlgL220Donggi');
const processInsertTlgL221Donggi = require('./services/scheduler/donggi/processInsertTlgL221Donggi');
const processInsertTlgL223Donggi = require('./services/scheduler/donggi/processInsertTlgL223Donggi');
const processInsertTlgL224Donggi = require('./services/scheduler/donggi/processInsertTlgL224Donggi');

// MATINDOK SITE
const getRealtimeMatindok = require('./routes/matindok/getRealtime')
const getTlgMatindok = require('./routes/matindok/getTlg')
const { processInsertHistoryAlarmMatindok } = require('./services/scheduler/matindok/processInsertHistoryAlarmMatindok');
const processInsertTlgL01Matindok = require('./services/scheduler/matindok/processInsertTlgL01Matindok');
const processInsertTlgL02Matindok = require('./services/scheduler/matindok/processInsertTlgL02Matindok');
const processInsertTlgL03Matindok = require('./services/scheduler/matindok/processInsertTlgL03Matindok');
const processInsertTlgL04Matindok = require('./services/scheduler/matindok/processInsertTlgL04Matindok');
const processInsertTlgL05Matindok = require('./services/scheduler/matindok/processInsertTlgL05Matindok');
const processInsertTlgL06Matindok = require('./services/scheduler/matindok/processInsertTlgL06Matindok');
const processInsertTlgL10Matindok = require('./services/scheduler/matindok/processInsertTlgL10Matindok');
const processInsertTlgL11Matindok = require('./services/scheduler/matindok/processInsertTlgL11Matindok');
const processInsertTlgL12Matindok = require('./services/scheduler/matindok/processInsertTlgL12Matindok');
const processInsertTlgL13Matindok = require('./services/scheduler/matindok/processInsertTlgL13Matindok');
const processInsertTlgL14Matindok = require('./services/scheduler/matindok/processInsertTlgL14Matindok');
const processInsertTlgL19Matindok = require('./services/scheduler/matindok/processInsertTlgL19Matindok');
const processInsertTlgL20Matindok = require('./services/scheduler/matindok/processInsertTlgL20Matindok');
const processInsertTlgL21Matindok = require('./services/scheduler/matindok/processInsertTlgL21Matindok');
const processInsertTlgL22Matindok = require('./services/scheduler/matindok/processInsertTlgL22Matindok');
const processInsertTlgL23Matindok = require('./services/scheduler/matindok/processInsertTlgL23Matindok');
const processInsertTlgL24Matindok = require('./services/scheduler/matindok/processInsertTlgL24Matindok');
const processInsertTlgL26Matindok = require('./services/scheduler/matindok/processInsertTlgL26Matindok');
const processInsertTlgL29Matindok = require('./services/scheduler/matindok/processInsertTlgL29Matindok');
const processInsertTlgL30Matindok = require('./services/scheduler/matindok/processInsertTlgL30Matindok');
const processInsertTlgL33Matindok = require('./services/scheduler/matindok/processInsertTlgL33Matindok');

// GENERAL SITE
const processInsertOrDeleteActiveAlarm = require('./services/scheduler/general/processInsertOrDeleteActiveAlarm');


const app = express();
const port = 3003;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use API routes
// All API routes will be prefixed with /api
app.use('/api/donggi', getRealtimeDonggi);
app.use('/api/donggi', getTlgDonggi);

app.use('/api/matindok', getRealtimeMatindok);
app.use('/api/matindok', getTlgMatindok);

// Cron job to run every 5 seconds
cron.schedule('*/5 * * * * *', () => {
    // Call the postAlgDonggi function inside the cron job

    // GENERAL SCOPE
    processInsertOrDeleteActiveAlarm()

    // DONGGI SCOPE
    processInsertHistoryAlarmDonggi()
    processInsertTlgL102Donggi()
    processInsertTlgL103Donggi()
    processInsertTlgL104Donggi()
    processInsertTlgL105Donggi()
    processInsertTlgL202Donggi()
    processInsertTlgL203Donggi()
    processInsertTlgL204Donggi()
    processInsertTlgL205Donggi()
    processInsertTlgL209Donggi()
    processInsertTlgL210Donggi()
    processInsertTlgL212Donggi()
    processInsertTlgL213Donggi()
    processInsertTlgL215Donggi()
    processInsertTlgL216Donggi()
    processInsertTlgL217Donggi()
    processInsertTlgL219Donggi()
    processInsertTlgL220Donggi()
    processInsertTlgL221Donggi()
    processInsertTlgL223Donggi()
    processInsertTlgL224Donggi()

    // MATINDOK SCOPE
    processInsertHistoryAlarmMatindok()
    processInsertTlgL01Matindok()
    processInsertTlgL02Matindok()
    processInsertTlgL03Matindok()
    processInsertTlgL04Matindok()
    processInsertTlgL05Matindok()
    processInsertTlgL06Matindok()
    processInsertTlgL10Matindok()
    processInsertTlgL11Matindok()
    processInsertTlgL12Matindok()
    processInsertTlgL13Matindok()
    processInsertTlgL14Matindok()
    processInsertTlgL19Matindok()
    processInsertTlgL20Matindok()
    processInsertTlgL21Matindok()
    processInsertTlgL22Matindok()
    processInsertTlgL23Matindok()
    processInsertTlgL24Matindok()
    processInsertTlgL26Matindok()
    processInsertTlgL29Matindok()
    processInsertTlgL30Matindok()
    processInsertTlgL33Matindok()

});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});