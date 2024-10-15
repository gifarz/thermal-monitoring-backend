const express = require('express');
const router = express.Router();

const { processInsertAlgMatindok } = require('../../services/scheduler/processInsertAlgMatindok');

// Route for insert data
router.post('/alg', async (req, res) => {
    try {
        await processInsertAlgMatindok(); // Call the standalone function
        res.json({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Failed to insert data' });
    }
});

// Export the router
module.exports = router;