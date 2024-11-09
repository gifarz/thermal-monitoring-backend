const express = require('express');
const router = express.Router();

const { selectSecretKeyByName } = require('../../services/query/user/selectSecretKeyByName');

// Route for getting data
router.get('/secret/login', async (req, res) => {

    const name = 'login';

    try {
        const results = await selectSecretKeyByName(name); // Call the service
        console.log('res selectSecretKeyByName', results)
        
        let response = {
            resultCode: "0",
            resultDesc: "Success",
            data: results
        }

        res.json(response);

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Export the router
module.exports = router;