const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');

// DONGGI SITE
const getRealtimeDonggi = require('./routes/donggi/getRealtime')
const postAlgDonggi = require('./routes/donggi/postAlg')
const { processInsertAlgDonggi } = require('./services/scheduler/processInsertAlgDonggi');

// MATINDOK SITE
const getRealtimeMatindok = require('./routes/matindok/getRealtime')
const postAlgMatindok = require('./routes/matindok/postAlg');
const { processInsertAlgMatindok } = require('./services/scheduler/processInsertAlgMatindok');
const processInsertOrDeleteActiveAlarm = require('./services/scheduler/processInsertOrDeleteActiveAlarm');
const { processInsertHistoryAlarmDonggi } = require('./services/scheduler/processInsertHistoryAlarmDonggi');

const app = express();
const port = 3003;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use API routes
// All API routes will be prefixed with /api
app.use('/api/donggi', getRealtimeDonggi); 
app.use('/api/donggi', postAlgDonggi); 

app.use('/api/matindok', getRealtimeMatindok); 
app.use('/api/matindok', postAlgMatindok); 

// Cron job to run every 5 seconds
cron.schedule('*/5 * * * * *', () => {
    // Call the postAlgDonggi function inside the cron job
    // processInsertAlgDonggi()
    // processInsertAlgMatindok()

    processInsertHistoryAlarmDonggi()
    processInsertOrDeleteActiveAlarm()
    // console.log('Cron job triggered: postAlgDonggi');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});