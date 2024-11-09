const express = require('express');
const router = express.Router();

const { selectUserByUsername } = require('../../services/query/user/selectUserByUsername');

// Route for getting data
router.get('/list', async (req, res) => {

    const { username, password } = req.query

    try {
        const results = await selectUserByUsername(username); // Call the service
        console.log('res selectUserByUsername', results)
        
        let response 

        if(results[0]?.password == password){
            response = {
                resultCode: "0",
                resultDesc: "Success",
                data: results
            }

        } else {
            response = {
                resultCode: "01",
                resultDesc: "Invalid Username or Password",
            }
        }

        res.json(response);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Export the router
module.exports = router;