const express = require('express');
const router = express.Router();

const { selectRealtimeMatindok } = require('../../services/query/matindok/selectRealtimeMatindok');

// Route for getting data
router.get('/realtime', async (req, res) => {
    try {
        const results = await selectRealtimeMatindok(); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Export the router
module.exports = router;