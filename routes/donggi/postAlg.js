const express = require('express');
const router = express.Router();

const { processInsertAlgDonggi } = require('../../services/scheduler/processInsertAlgDonggi');

// Route for insert data
router.post('/alg', async (req, res) => {
    try {
        await processInsertAlgDonggi(); // Call the standalone function
        res.json({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert data' });
    }
});

// Export the router
module.exports = router;