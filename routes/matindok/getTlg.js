const express = require('express');
const router = express.Router();

const { 
    selectTlgL01Matindok,
    selectTlgL02Matindok,
    selectTlgL03Matindok,
    selectTlgL04Matindok,
    selectTlgL05Matindok,
    selectTlgL06Matindok,
    selectTlgL10Matindok,
    selectTlgL11Matindok,
    selectTlgL12Matindok,
    selectTlgL13Matindok,
    selectTlgL14Matindok,
    selectTlgL19Matindok,
    selectTlgL20Matindok,
    selectTlgL21Matindok,
    selectTlgL22Matindok,
    selectTlgL23Matindok,
    selectTlgL24Matindok,
    selectTlgL26Matindok,
    selectTlgL29Matindok,
    selectTlgL30Matindok,
    selectTlgL33Matindok,
} = require('../../services/query/matindok/selectTlgMatindok');
const { getOnlyYY } = require('../../utils/convertTimestamp');

const date = new Date()
const yy = getOnlyYY(date)

// Route for getting data
router.get('/tlg/l01', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL01Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/tlg/l02', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL02Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/tlg/l03', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL03Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l04', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL04Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l05', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL05Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l06', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL06Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l10', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL10Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l11', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL11Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l12', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL12Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l13', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL13Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l14', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL14Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l19', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL19Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l20', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL20Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l21', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL21Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l22', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL22Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l23', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL23Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l24', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL24Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l26', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL26Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l29', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL29Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/tlg/l30', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL30Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/tlg/l33', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    
    try {
        const results = await selectTlgL33Matindok(yy,gte,lte); // Call the service

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Export the router
module.exports = router;