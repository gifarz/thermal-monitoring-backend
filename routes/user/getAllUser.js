const express = require('express');
const router = express.Router();

const { selectAllUser } = require('../../services/query/user/selectAllUser');

// Route for getting data
router.get('/lists', async (req, res) => {
    try {
        const results = await selectAllUser(); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Export the router
module.exports = router;