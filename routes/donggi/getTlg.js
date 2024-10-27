const express = require('express');
const router = express.Router();

const { 
    selectTlgL102Donggi,
    selectTlgL103Donggi,
    selectTlgL104Donggi,
    selectTlgL105Donggi,
    selectTlgL202Donggi,
    selectTlgL203Donggi,
    selectTlgL204Donggi,
    selectTlgL205Donggi,
    selectTlgL209Donggi,
    selectTlgL210Donggi,
    selectTlgL212Donggi,
    selectTlgL213Donggi,
    selectTlgL215Donggi,
    selectTlgL216Donggi,
    selectTlgL217Donggi,
    selectTlgL219Donggi,
    selectTlgL220Donggi,
    selectTlgL221Donggi,
    selectTlgL223Donggi,
    selectTlgL224Donggi,
} = require('../../services/query/donggi/selectTlgDonggi.js');
const { getOnlyYY } = require('../../utils/convertTimestamp');

const date = new Date()
const yy = getOnlyYY(date)

// Route for getting data
router.get('/tlg/l102', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL102Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/tlg/l103', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL103Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l104', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL104Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l105', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL105Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l202', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL202Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l203', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL203Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l204', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL204Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l205', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL205Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l209', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL209Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l210', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL210Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l212', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL212Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l213', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL213Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l215', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL215Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l216', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL216Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l217', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL217Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l219', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL219Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l220', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL220Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });

    }
});

router.get('/tlg/l221', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL221Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/tlg/l223', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL223Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

router.get('/tlg/l224', async (req, res) => {

    const { gte } = req.query
    const { lte } = req.query
    const { page } = req.query
    const { limit } = req.query

    const offset = (page - 1) * limit

    try {
        const results = await selectTlgL224Donggi(yy, gte, lte, offset, parseInt(limit));

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Export the router
module.exports = router;